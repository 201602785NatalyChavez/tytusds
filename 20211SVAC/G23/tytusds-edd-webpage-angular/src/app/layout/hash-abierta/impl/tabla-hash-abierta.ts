import {NodoHashAbierta} from './nodo-hash-abierta';

export class TablaHashAbierta{
    tamanioActual:number;
    valores=[];
    k=0.5;
    mensajeColision="";

    constructor( private tamanioMaximo:number, private metodo:string) { 
        this.valores = new Array(tamanioMaximo);
        this.tamanioActual =  0;
        for (var i=0; i<this.tamanioMaximo; i++){
            this.valores[i]=null;
          }
    }
    estaVacia(){
        return this.tamanioActual==0;
    }
    obtenerTamanioActual(){
        return this.tamanioActual;
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

    agregar(key, value, metodo:string) {
        this.metodo=metodo;
        this.mensajeColision="";
        const hash = this.funcionHash(key);
        let nuevoNodo = new NodoHashAbierta(hash,value);
        if(this.valores[hash]==undefined||this.valores[hash]==null){
            this.valores[hash] = nuevoNodo;
        }else{
            let aux=this.valores[hash];
            while(aux.getSiguiente()!=null){
                aux=aux.getSiguiente();
            }
            aux.setSiguiente(nuevoNodo);
        }
        this.tamanioActual++;
      }

    buscar(key,value) {
        const hash = this.funcionHash(key);
        if (this.valores[hash]==undefined||this.valores[hash]==null) {
          return false;
        } else {
            let aux=this.valores[hash];
            if(aux.getData()==value) return true;
            while(aux.getSiguiente()!=null){
                aux=aux.getSiguiente();
                if(aux.getData()==value) return true;
            }
            return false;
        }
     }

     modificar(key, value, valorNuevo) {
        const hash = this.funcionHash(key);
        if (this.valores[hash]==undefined||this.valores[hash]==null) {
          return false;
        } else {
            let aux=this.valores[hash];
            if(aux.getData()==value) {
                if(aux.getSiguiente()!=null) this.valores[hash]=aux.getSiguiente();
                else this.valores[hash].setData(valorNuevo);
                return true;
            }
            while(aux.getSiguiente()!=null){
                aux=aux.getSiguiente();
                if(aux.getData()==value) {
                    aux.setData(valorNuevo);
                    return true;
                }
            }
            return false;
        }
     }

     borrar(key,value){
        const hash = this.funcionHash(key);
        if (this.valores[hash]==undefined||this.valores[hash]==null) {
          return false;
        } else {
            let aux=this.valores[hash];
            let anterior=aux;
            if(aux.getData()==value) {
                if(aux.getSiguiente()!=null) this.valores[hash]=aux.getSiguiente();
                else this.valores[hash]=null;
                return true;
            }
            while(aux.getSiguiente()!=null){
                anterior=aux;
                aux=aux.getSiguiente();
                if(aux.getData()==value) {
                    anterior.setSiguiente(null);
                    this.tamanioActual--;
                    return true;
                }
            }
            return false;
        }
     }

    
}