import { obtenerCodigosDelTexto, codificar, decodificar, obtenerFrecuencia, obtenerFrecuenciaRelativa, getEntropyOfText, obtenerArbol } from './huffman';

export class HuffmanImpl{
    public codes: Map<string, string>;
    public result: string[];
    public frequency: any[];
    public relFreq: any[];
    public tablaSalida:string;

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
        this.tablaSalida+="\n\n";
        this.codes.forEach((value: string, key: string) => {
            
        });
        for (let codigo of Array.from(this.codes).reverse()) {
            this.tablaSalida+=(codigo[0]==' '?"' '":codigo[0])+" "+codigo[1]+"\t";
          }
    }


}