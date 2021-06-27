
export class TablaHashCerrada{
    tamanioActual:number;
    valores=[];

    constructor( private tamanioMaximo:number, private metodo) { 
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
        if(this.metodo==1)
            return +valorClave % this.tamanioMaximo;
    }

    isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

    funcionHashStr(key:string){
        let valorClave="";
        if(this.isNumber(key)){
            valorClave=key;
        }else{
            valorClave=key.toString().length.toString();
        }
        if(this.metodo==1)
            return valorClave+" % "+this.tamanioMaximo.toString()+" = "+this.funcionHash(valorClave).toString();
    }

    agregar(key, value) {
        const hash = this.funcionHash(key);
        if (!this.valores.hasOwnProperty(hash)) {
           this.valores[hash] = {};
        }
        if (!this.valores[hash].hasOwnProperty(key)) {
           this.tamanioActual++;
        }
        this.valores[hash][key] = value;
        //this.valores[hash] = value;
      }

    buscar(key) {
        const hash = this.funcionHash(key);
        if (this.valores.hasOwnProperty(hash) && this.valores[hash].hasOwnProperty(key)) {
          return true;
        } else {
          return false;
        }
     }

     modificar(key, value) {
        const hash = this.funcionHash(key);
        if (this.valores.hasOwnProperty(hash) && this.valores[hash].hasOwnProperty(key)) {
            this.valores[hash][key] = value;
            return true;
        } else {
            return false;
        }
     }

     borrar(key){
        const hash = this.funcionHash(key);
        if (this.valores.hasOwnProperty(hash) && this.valores[hash].hasOwnProperty(key)) {
            this.valores.splice(hash, 1);
            this.tamanioActual--;
            return true;
        } else {
          return false;
        }
        

     }

    
}