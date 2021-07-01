
export class TablaHashCerrada{
    tamanioActual:number;
    valores=[];
    k=0.5;

    constructor( private tamanioMaximo:number, private metodo:string) { 
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

    agregar(key, value, metodo:string) {
        this.metodo=metodo;
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