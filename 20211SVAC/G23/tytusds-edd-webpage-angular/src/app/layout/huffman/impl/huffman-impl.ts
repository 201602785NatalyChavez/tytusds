import { obtenerCodigosDelTexto, codificar, decodificar, obtenerFrecuencia, obtenerFrecuenciaRelativa, getEntropyOfText, obtenerArbol, NodoArbol  } from './huffman';

export class HuffmanImpl{
    public codes: Map<string, string>;
    public result: string[];
    public frequency: any[];
    public relFreq: any[];
    public tablaSalida:string;
    arbol:NodoArbol;

    constructor(private cadenaEntrada:string){
        this.codes = obtenerCodigosDelTexto(cadenaEntrada); 
        this.result = codificar(cadenaEntrada, this.codes); 
        this.frequency = obtenerFrecuencia(cadenaEntrada);
        this.relFreq = obtenerFrecuenciaRelativa(this.frequency);
        this.construirSalida();
    }

    obtenerArbol(){
        return obtenerArbol(this.frequency);
    }
    construirSalida(){
        this.tablaSalida="";
        for(let i = this.frequency.length-1;i>=0;i--){
            const nodoFrecuencia=this.frequency[i];
            this.tablaSalida+=(nodoFrecuencia[0]==' '?"' '":nodoFrecuencia[0])+" "+nodoFrecuencia[1]+"/"+this.result.length+"\t";
        }
        this.tablaSalida+="\n";
        let lineasStr=[];
        let aux = this.arbol;
        lineasStr.push(this.result.length.toString());
        lineasStr.push("\n");
        //nivel1
        var leaf1=aux.leafs[0];
        var leaf2=aux.leafs[1];
        lineasStr.push(leaf2.weight+"/"+this.result.length+"\t"+leaf1.weight+"/"+this.result.length);
        lineasStr.push("\n");
        var texto3="";var texto4=""; var texto5="";var texto6="";
        var leaf3=leaf1.leafs[0]; if(leaf3!=undefined) texto3=leaf3.weight+"/"+this.result.length;
        var leaf4=leaf1.leafs[1]; if(leaf4!=undefined) texto4=leaf4.weight+"/"+this.result.length;
        var leaf5=leaf2.leafs[0]; if(leaf5!=undefined) texto5=leaf5.weight+"/"+this.result.length;
        var leaf6=leaf2.leafs[1]; if(leaf6!=undefined) texto6=leaf6.weight+"/"+this.result.length;
        lineasStr.push(texto6+"\t"+texto5+"\t"+texto4+"\t"+texto3);
        lineasStr.push("\n");
        var texto7="";var texto8=""; var texto9="";var texto10="";
        var texto11="";var texto12=""; var texto13="";var texto14="";
        var leaf7=leaf3.leafs[0]; if(leaf7!=undefined) texto7=leaf7.weight+"/"+this.result.length;
        var leaf8=leaf3.leafs[1]; if(leaf8!=undefined) texto8=leaf8.weight+"/"+this.result.length;
        var leaf9=leaf4.leafs[0]; if(leaf9!=undefined) texto9=leaf9.weight+"/"+this.result.length;
        var leaf10=leaf4.leafs[1]; if(leaf10!=undefined) texto10=leaf10.weight+"/"+this.result.length;
        var leaf11=leaf5.leafs[0]; if(leaf11!=undefined) texto11=leaf11.weight+"/"+this.result.length;
        var leaf12=leaf5.leafs[1]; if(leaf12!=undefined) texto12=leaf12.weight+"/"+this.result.length;
        var leaf13=leaf6.leafs[0]; if(leaf13!=undefined) texto13=leaf13.weight+"/"+this.result.length;
        var leaf14=leaf6.leafs[1]; if(leaf14!=undefined) texto14=leaf14.weight+"/"+this.result.length;
        lineasStr.push(texto14+"\t"+texto13+"\t"+texto12+"\t"+texto11+"\t"+texto10+"\t"+texto9+"\t"+texto8+"\t"+texto7);

        /*Mandar a salida el array de las lineas*/
        for(let i = lineasStr.length-1; i>=0; i--){
            this.tablaSalida+=lineasStr[i];
        }
        /*Codigos resultantes*/ 
        this.tablaSalida+="\n\n";
        for (let codigo of Array.from(this.codes).reverse()) {
            this.tablaSalida+=(codigo[0]==' '?"' '":codigo[0])+":"+codigo[1]+"\t";
        }
    }


}