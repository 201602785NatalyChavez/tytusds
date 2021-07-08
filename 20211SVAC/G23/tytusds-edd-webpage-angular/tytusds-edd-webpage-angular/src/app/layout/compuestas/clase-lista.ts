import Nodo from './clase-nodo'

export default class Lista{

    public primero: Nodo 
    public ultimo: Nodo 

    constructor(){
        this.primero = null
        this.ultimo = null
    }
    ordenar(nodo){
        let aux = this.primero
        while(aux != null){
            if(aux.valor < nodo.valor){
                aux = aux.siguiente
            }else{
                if(aux == this.primero){
                    nodo.siguiente = aux
                    aux.anterior = nodo
                    this.primero = nodo
                    return 
                }else{
                    nodo.anterior = aux.anterior
                    aux.anterior.siguiente = nodo
                    nodo.siguiente = aux
                    aux.anterior = nodo
                    return
                }
            }
            
        }
        this.ultimo.siguiente = nodo
        nodo.anterior = this.ultimo
        this.ultimo = nodo
    }

    insertar(valor){
        let nodo = new Nodo(valor,null,null)
        if(this.primero == null){
            this.primero = this.ultimo = nodo
            return
        }
        this.ordenar(nodo)
    }

    busqueda(valor){
        let temp = this.primero
        while(temp != null){
            if(temp.valor == valor) return temp
            temp = temp.siguiente
        }
        return null
    }

    toarray() { 
        let arreglo= [ ]
        let temp = this.primero
        arreglo.push(temp)
        temp = temp.siguiente
        while(temp != null&&temp != this.primero){
            arreglo.push(temp)
            temp = temp.siguiente
        }
        return arreglo
    }
}
