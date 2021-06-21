//Libreria para encriptado
const { sha256 } = require("js-sha256")

//Clase Nodo para lista temporal de carga de datos
class NodoListaTemporal{
    //Constructor
    constructor(datTemporal){
        this.datTemporal = datTemporal
        this.siguiente = null
        this.anterior = null
    }
}

//Clase Lista temporal para carga de datos
class ListaTemporal{
    //Constructor
    constructor(){
        this.cabeza = null
        this.cola = null
        this.size = 0
    }

    //Metodo Insertar en lista temporal
    insertLista(dato){
        let nodo = new NodoListaTemporal(dato);
        //Insercion de primer nodo
        if(this.cabeza == null){
            this.cabeza = nodo;
            this.cola = nodo;
            this.size++;
        }else if(this.cabeza != null){ // Insercion de nodo No Cabeza
            let aux = this.cabeza;
            while(aux != this.cola){
                aux = aux.siguiente;
            }
            aux.siguiente = nodo;
            nodo.anterior = aux
            this.cola = nodo;
            this.size++;
        }
    }

    //Metodo Eliminar par alista temporal
    eliminarLista(dato){
        let nodo = this.cabeza
        if(this.cabeza.datTemporal == dato && this.cabeza == this.cola){
            //Dato unico eliminado
            this.cabeza = null
            this.cola = null
            this.size = 0
            return
        }
        while(nodo.datTemporal != dato && nodo != this.cola){
            nodo = nodo.siguiente
        }
        if(nodo.datTemporal== dato && nodo.anterior == null && nodo.siguiente != null){
            //Dato Eliminado en el al inicio
            let tmp = nodo.siguiente
            this.cabeza = tmp
            tmp.anterior = null
            nodo.siguiente = null
            this.size--
            return
        }else if(nodo.datTemporal == dato && nodo.siguiente != null && nodo.anterior != null){
            //Dato Eliminado en el centro
            let tmp = nodo.siguiente
            tmp.anterior = nodo.anterior
            nodo.anterior.siguiente = tmp
            nodo.siguiente = null
            nodo.anterior = null
            this.size--
            return
        }else if(nodo.datTemporal == dato && nodo.siguiente == null && nodo.anterior != null){
            //Dato eliminado al final de la lista
            let tmp = nodo.anterior
            this.cola = tmp
            tmp.siguiente = null
            nodo.anterior = null
            this.size--
            return
        }
        if(nodo == null){
            //Dato no encontrado
            console.log("No se encontro el dato a eliminar")
            return
        }
    }
}

//arreglo para reestructuracion de datos
var recarga = []

//Clase Nodo para arbol merkle
class Nodo{
    //Constructor
    constructor(dato, izquierda, derecha, nodohijo){
        this.dato = dato
        this.hash = null
        this.nodohijo = nodohijo
        this.izquierda = izquierda
        this.derecha = derecha
    }
}

//Clase Arbol Merkle
class MerkleTree{
    //Constructor
    constructor(){
        this.raiz = null
    }

    //Metodo Insertar en arbol Merkle
    insertar(dato){
        let nodo = new Nodo(dato, null, null, true)
        //Insercion de primer nodo
        if(this.raiz == null){
            let listatmp = new ListaTemporal()
            listatmp.insertLista(nodo)
            listatmp.insertLista(new Nodo(-1, null, null, true))
            this.construirArbol(listatmp)           
        }else{  //Insercion de Nodo no primero
            let listatmp = this.ObtenerLista()
            listatmp.insertLista(nodo)
            this.construirArbol(listatmp)
        }
        //Hasheo de datos en sha256
        this.hashing()
    }

    //Metodo de Carga de datos en lista temporal para insercion de arbol
    ObtenerLista(){
        let listatmp = new ListaTemporal()
        this.obtenerlista(listatmp, this.raiz.izquierda)
        this.obtenerlista(listatmp, this.raiz.derecha)
        return listatmp
    }

    //Sub metodo de carga de datos en lista temporal para insercion de arbol
    obtenerlista(lista, nodo){
        if(nodo != null){
            this.obtenerlista(lista, nodo.izquierda)
            if(nodo != null && nodo.dato != -1){
                lista.insertLista(nodo)
            }
            this.obtenerlista(lista, nodo.derecha)
        }
    }

    //Metodo para armado base de arbol
    construirArbol(lista){
        let tamanio = new Float64Array(lista.size)
        let cant = 1
        let operacion = tamanio.length/2
        //Calculo de nodos actuales
        while (operacion > 1){
            cant++
            operacion = operacion/2
        }
        let vectorTotal = new Float64Array(cant)
        let totalnodos = Math.pow(2, vectorTotal.length)    //Calculo de nodos hijos para arbol merkle
        //Complemetacion de nodos hijo para arbol merkle final
        while(lista.size < Math.floor(totalnodos)){
            lista.insertLista(new Nodo(-1,null,null,true))
        }
        //Insercion de datos en arbol
        while(lista.size>1){
            let primero = lista.cabeza
            let segundo = primero.siguiente
            lista.eliminarLista(primero.datTemporal)
            lista.eliminarLista(segundo.datTemporal)
            let nodo1 = primero.datTemporal
            let nodo2 = segundo.datTemporal
            let suma = nodo1.dato + nodo2.dato
            let nuevo = new Nodo(suma, nodo1, nodo2,false)
            lista.insertLista(nuevo)
        }
        //Asignacion de raiz
        this.raiz = lista.cabeza.datTemporal
    }

    //Metodo Asignacion de Hash
    hashing(){
        if(this.raiz ==null){
            console.log("No existe arbol")
            return
        }
        this.subHashing(this.raiz)
    }

    //SubMetodo Asignacion de Hash
    subHashing(nodo){
        if(nodo != null){
            let hasheo = sha256.create()
            hasheo.update(String(nodo.dato))
            hasheo.hex()
            nodo.hash = hasheo
            this.subHashing(nodo.izquierda)
            this.subHashing(nodo.derecha)
        }
    }

    //Metodo Imprimir
    imprimiendo(){
        if(this.raiz ==null){
            console.log("No existe arbol")
            return
        }
        this.imprimir(this.raiz)
    }

    //SubMetodo Imprimir
    imprimir(nodo){
        if(nodo != null){
            console.log(nodo.dato + " Es el dato")
            console.log(nodo.hash + " Es el Hash")
            this.imprimir(nodo.izquierda)
            this.imprimir(nodo.derecha)
        }
    }

    //Metodo Buscar
    buscando(dato){
        if(this.raiz ==null){
            console.log("No existe arbol")
            return
        }
        let hasheo = sha256.create()
        hasheo.update(String(dato))
        hasheo.hex()
        let nodo = this.raiz
        this.buscar(hasheo, nodo)
    }

    //SubMetodo Buscar
    buscar(hasheo, nodo){
        if(nodo!= null){
            let noha = nodo.hash.hex()
            let has = hasheo.hex()
            if(has == noha && nodo.nodohijo == true){
                console.log(nodo.hash + " fue encontrado para "+nodo.dato)
                return
            }
            this.buscar(hasheo, nodo.izquierda)
            this.buscar(hasheo, nodo.derecha)
        }
    }


}