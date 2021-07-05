import { NodoHashCerrada } from "./nodo-hash-cerrada";

export class TablaHashCerrada{
    tamanioActual:number;
    valores=[];
    k=0.5;
    loadFactor=0.75;
    mensajeColision="";


    constructor( public tamanioMaximo:number, private metodo:string,
                private minRehashing, private maxRehashing,
                private pruebaHash) { 
        this.valores = [];
        this.tamanioActual =  0;
    }

    funcionHash(key:string){
        let valorClave="";
        if(this.isNumber(key)){
            valorClave=key;
        }else{
            valorClave=key.toString().length.toString();
        }
        //2=division, 1=simple, 3=multiplicacion
        if(this.metodo=="Division")
            return +valorClave % this.tamanioMaximo;
        else if(this.metodo=="Simple"){
            this.k = +valorClave/ this.tamanioMaximo;
            return parseInt( (this.k * this.tamanioMaximo).toString() );
        }else{ 
            this.k = +valorClave/ this.tamanioMaximo;
            return Math.floor (this.tamanioMaximo * (+valorClave * this.k % 1));
        }
    }

    isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

    funcionHashStr(key:string){
        let valorClave="";
        if(this.isNumber(key)){
            valorClave=key;
        }else{
            valorClave=key.toString().length.toString();
        }
        if(this.metodo=="Division")
            return valorClave+" % "+this.tamanioMaximo.toString()+" = "+this.funcionHash(valorClave).toString();
        else if(this.metodo=="Simple"){ 
            this.k = +valorClave/ this.tamanioMaximo;
            this.k= parseFloat(this.k.toString());
            return (this.k +" * "+this.tamanioMaximo).toString()+" = "+this.funcionHash(valorClave).toString()  ;
        }else{ 
            this.k = +valorClave/ this.tamanioMaximo;
            this.k=parseFloat(this.k.toString());
            return (this.tamanioMaximo.toString()+" * ("+valorClave+" * "+this.k+" % 1)")+" = "+this.funcionHash(valorClave).toString()  ;
        }
    }

    agregar(key, value, metodo:string,pruebaHash:string) {
        this.mensajeColision="";
        let colisionDetectada=false;
        let rehashingHecho=false;
        this.metodo=metodo;
        this.pruebaHash=pruebaHash;

        let hash = this.funcionHash(key);
        let i = 0;

        if(this.pruebaHash=="Lineal"){
            while(this.valores[hash]!=undefined){
                hash++;
                if(hash==this.tamanioMaximo) hash=0;
                if(i==this.tamanioMaximo) break;
                i++;
                colisionDetectada=true;
            }
        }else if(this.pruebaHash="Cuadratica"){
            while(this.valores[hash]!=undefined){
                hash=hash*hash;
                if(i==this.tamanioMaximo) break;
                i++;
                colisionDetectada=true;
            }
        }//doble hash
        else{
            while(this.valores[hash]!=undefined){
                hash=this.funcionHash(hash.toString());
                if(i==this.tamanioMaximo) break;
                i++;
                colisionDetectada=true;
            }
        }
        let nuevoNodo = new NodoHashCerrada(hash,value);
        this.valores[hash] = nuevoNodo;
        this.tamanioActual++;

        //rehashing        
        if(this.minRehashing!=undefined&&this.maxRehashing!=undefined){
            if( this.tamanioActual*100/this.tamanioMaximo >= this.maxRehashing ){
                this.rehash( this.tamanioActual*100 / this.minRehashing );
                rehashingHecho=true;
            }
        }else{
            // Load factor calculated
            let loadFactor = (1.0 * this.tamanioActual) / this.tamanioMaximo;
            console.log("Load factor = " + loadFactor);
            // If the load factor is > 0.75, rehashing is done
            if (loadFactor > this.loadFactor) {
                rehashingHecho=true;
                // Rehash
                this.rehash(this.tamanioMaximo*2);
            }
        }
        return {hash:hash,colisionDetectada:colisionDetectada,rehaShingHecho:rehashingHecho};
      }

    buscar(key, value) {
        const hash = this.funcionHash(key);
        let posicion=-1; let i=0;
        while(i<this.tamanioMaximo){
            if(this.valores[i]!=undefined&&this.valores[i].getData()==value){
                posicion=i;
                return posicion;
            }
            i++;
        }
        return posicion;
     }

     modificar(key, value, valorNuevo) {
        let busca=this.buscar(key,value);
        if(busca>=0){
            this.valores[busca].setData(valorNuevo);
        }else return busca;
     }

     borrar(key,value){
        let busca=this.buscar(key,value);
        if(busca>=0){
            this.valores[busca]=null;
        }else return busca;
     }

    rehash(newSize)
    {
        var tamanioAnterior=this.tamanioMaximo;
        this.tamanioMaximo=newSize;
        //TODO rehashing de los indices

    }
    
}