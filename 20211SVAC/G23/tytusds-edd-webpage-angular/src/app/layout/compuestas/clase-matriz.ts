import Nodo from './clase-nodo'
import Lista from './clase-lista'

class Matriz{

    public lista_H:any
    public lista_V:any

    constructor(){
        this.lista_H = new Lista()
        this.lista_V = new Lista()
    }

    insertar(valor,x,y){
        let nodox = this.lista_H.busqueda(x)
        let nodoy = this.lista_V.busqueda(y)

        if(nodox == null && nodoy == null){
            this.caso1(valor,x,y)
        }else if(nodox == null && nodoy != null){
            this.caso2(valor,x,y)
        }else if(nodox != null && nodoy == null){
            this.caso3(valor,x,y)
        }else{
            this.caso4(valor,x,y)
        }
    }

    caso1(valor,x,y){
        this.lista_H.insertar(x)
        this.lista_V.insertar(y)

        let nodox = this.lista_H.busqueda(x)
        let nodoy = this.lista_V.busqueda(y)

        let nuevo = new Nodo(valor,x,y)
        nodox.abajo = nuevo
        nuevo.arriba = nodox

        nodoy.derecha = nuevo
        nuevo.izquierda = nodoy
    }

    caso2(valor,x,y){
        this.lista_H.insertar(x)

        let nodox = this.lista_H.busqueda(x)
        let nodoy = this.lista_V.busqueda(y)

        let bandera = false

        let nuevo = new Nodo(valor,x,y)
        let aux = nodoy.derecha
        let cabecera = 0

        while(aux != null){
            cabecera = aux.x
            if(cabecera < x){
                aux = aux.derecha
            }else{
                nuevo.derecha = aux
                nuevo.izquierda = aux.izquierda
                aux.izquierda.derecha = nuevo
                aux.izquierda = nuevo
                bandera = true
                break
            }
        }
        if(bandera == false){
            aux = nodoy.derecha
            while(aux.derecha != null){
                aux = aux.derecha
            }
            nuevo.izquierda = aux
            aux.derecha = nuevo
        }

        nodox.abajo = nuevo
        nuevo.arriba = nodox

    }
    caso3(valor,x,y){
        this.lista_V.insertar(y)

        let nodox = this.lista_H.busqueda(x)
        let nodoy = this.lista_V.busqueda(y)

        let bandera = false

        let nuevo = new Nodo(valor,x,y)
        let aux = nodox.abajo
        let cabecera = 0

        while(aux != null){
            cabecera = aux.y
            if(cabecera < y){
                aux = aux.abajo
            }else{
                nuevo.abajo = aux
                nuevo.arriba = aux.arriba
                aux.arriba.abajo = nuevo
                aux.arriba = nuevo
                bandera = true
                break
            }
        }
        if(bandera == false){
            aux = nodox.abajo
            while(aux.abajo != null){
                aux = aux.abajo
            }
            aux.abajo = nuevo
            nuevo.arriba = aux
        }

        nodoy.derecha = nuevo
        nuevo.izquierda = nodoy 

    }
    caso4(valor,x,y){
        let nodox = this.lista_H.busqueda(x)
        let nodoy = this.lista_V.busqueda(y)

        let bandera = false

        let nuevo = new Nodo(valor,x,y)
        let aux = nodoy.derecha
        let cabecera = 0

        while(aux != null){
            cabecera = aux.x
            if(cabecera < x){
                aux = aux.derecha
            }else{
                nuevo.derecha = aux
                nuevo.izquierda = aux.izquierda
                aux.izquierda.derecha = nuevo
                aux.izquierda = nuevo
                bandera = true
                break
            }
        }
        if(bandera == false){
            aux = nodoy.derecha
            while(aux.derecha != null){
                aux = aux.derecha
            }
            nuevo.izquierda = aux
            aux.derecha = nuevo
        }

        bandera = false
        aux = nodox.abajo
        cabecera = 0

        while(aux != null){
            cabecera = aux.y
            if(cabecera < y){
                aux = aux.abajo
            }else{
                nuevo.abajo = aux
                nuevo.arriba = aux.arriba
                aux.arriba.abajo = nuevo
                aux.arriba = nuevo
                bandera = true
                break
            }
        }
        if(bandera == false){
            aux = nodox.abajo
            while(aux.abajo != null){
                aux = aux.abajo
            }
            aux.abajo = nuevo
            nuevo.arriba = aux
        }
    }

    imprimirV(){
        let cabecera = this.lista_V.primero
        let aux
        while(cabecera != null){
            aux = cabecera.derecha
            while(aux != null){
                console.log("valor:",aux.valor,"X:",aux.x,"Y:",aux.y)
                aux = aux.derecha
            }
            cabecera = cabecera.siguiente
        }
    }

    imprimirH(){
        let cabecera = this.lista_H.primero
        let aux
        while(cabecera != null){
            aux = cabecera.abajo
            while(aux != null){
                console.log("valor:",aux.valor,"X:",aux.x,"Y:",aux.y)
                aux = aux.abajo
            }
            cabecera = cabecera.siguiente
        }
    }
}

/*let matriz = new Matriz()
matriz.insertar(0,0,0)
matriz.insertar(1,1,0)
matriz.insertar(2,1,1)
matriz.insertar(3,2,1)
matriz.insertar(4,2,2)
matriz.insertar(5,2,3)
matriz.insertar(6,2,4)
matriz.insertar(7,2,5)
matriz.insertar(8,3,1)
matriz.insertar(9,5,3)
matriz.insertar(10,5,5)

matriz.imprimirH()
console.log("---------------------------")
matriz.imprimirV()*/