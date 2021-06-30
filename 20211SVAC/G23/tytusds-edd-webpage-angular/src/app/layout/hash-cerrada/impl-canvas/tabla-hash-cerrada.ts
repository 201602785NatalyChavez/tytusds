
export class TablaHashCerrada{
    tamanioActual:number;
    valores=[];
    k=0.5;

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
        //2=division, 1=simple, 3=multiplicacion
        if(this.metodo==2)
            return +valorClave % this.tamanioMaximo;
        else if(this.metodo==1){
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
        if(this.metodo==1)
            return valorClave+" % "+this.tamanioMaximo.toString()+" = "+this.funcionHash(valorClave).toString();
            else if(this.metodo==1){
                this.k = +valorClave/ this.tamanioMaximo;
                this.k = parseInt( this.k.toString() );
                return this.k.toString() +" * "+this.tamanioMaximo.toString();
            }else{ 
                this.k = +valorClave/ this.tamanioMaximo;
                return (this.tamanioMaximo.toString()+" * ("+valorClave+" * "+this.k.toString+" % 1)");
            }
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