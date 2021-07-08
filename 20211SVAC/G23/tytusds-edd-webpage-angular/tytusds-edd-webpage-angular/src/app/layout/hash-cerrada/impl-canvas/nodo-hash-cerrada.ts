export class NodoHashCerrada{
    constructor(private key, private data){
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
}