export class Node{
    id:any
    keys:any []
    childs:any []
    parent:any 
    siguiente:any
    constructor(padre, id){
        this.id = id
        this.keys = []
        this.childs = []
        this.parent = padre
        this.siguiente = null
    }
    
    //Agrega valores al nodo
    agregar(value){
        this.keys.push(value)
        if(this.keys.length > 1){
            this.keys = this.ordenar(this.keys)
        }
    }
    ordenar(arreglo){
        var aux = 0;
        for(var i=0; i< arreglo.length-1; i++){
            for(var j=i+1; j<arreglo.length; j++){
                if(arreglo[i] > arreglo[j]){
                    aux = arreglo[i];
                    arreglo[i] = arreglo[j];
                    arreglo[j] = aux;
                }
            }
        }
        return arreglo;
    }
}