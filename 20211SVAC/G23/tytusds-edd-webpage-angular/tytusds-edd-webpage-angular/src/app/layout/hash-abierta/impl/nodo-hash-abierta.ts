export class NodoHashAbierta{
    siguiente:NodoHashAbierta;
    constructor(private key, private data){
        this.siguiente = null;
    }
    getKey(){
        return this.key;
    }
    getData(){
        return this.data;
    }
    setData(data){
        this.data=data;
    }
    getSiguiente(){
        return this.siguiente;
    }
    setSiguiente(siguiente:NodoHashAbierta){
        this.siguiente=siguiente;
    }
}