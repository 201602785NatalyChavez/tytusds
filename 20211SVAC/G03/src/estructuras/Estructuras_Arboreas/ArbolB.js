//Clase Nodo
class Nodo{
    //Constructor
    constructor(dato){
        this.dato = dato
        this.anterior = null
        this.siguiente = null
        this.izquierdo = null
        this.derecho = null
    }
}

//String para graficacion
var salida = ""
//Arreglo de uso unico
var arr = []

//Clase Rama
class Rama{
    //Constructor
    constructor(){
        this.contador = 0
        this.hoja = true
        this.raiz = null
    }

    //Metodo Insertar en Rama
    insertar(nodo){
        //Insertar Primer Nodo
        if(this.raiz == null){
            this.raiz = nodo
            this.contador++
        }else{  //Insertar Nodo no Primero
            let tmp = this.raiz
            do{
                if(nodo.dato<=tmp.dato){    //Insercion de dato menor igual
                    this.contador++
                    //Insercion en nodo no vacio
                    if(tmp == this.raiz){
                        this.raiz.anterior = nodo
                        nodo.siguiente = this.raiz
                        this.raiz.izquierdo = nodo.derecho
                        this.raiz = nodo
                        break
                    }else{
                        //Insercion entre nodos
                        nodo.anterior = tmp.anterior
                        nodo.siguiente = tmp
                        tmp.anterior.siguiente = nodo
                        tmp.anterior.derecho = nodo.izquierdo
                        tmp.anterior= nodo
                        tmp.izquierdo = nodo.derecho
                        break
                    }
                //Insercion en nodos vacios
                }else if(tmp.siguiente == null){
                    this.contador++
                    tmp.siguiente = nodo
                    tmp.derecho =   nodo.izquierdo
                    nodo.anterior = tmp
                    nodo.siguiente = null
                    break
                }
                tmp = tmp.siguiente
            }while(tmp != null)
        }
    }

}

//Clase Arbol
class ArbolB{
    //Constructor
    constructor(orden){
        this.raiz = null
        this.orden = orden
    }

    //Metodo Insercion en arbol
    insertar(dato){
        let nodo = new Nodo(dato)
        //Insercion para arbol vacio
        if(this.raiz == null){
            this.raiz = new Rama()
            this.raiz.insertar(nodo)
            return
        }else{
            //Insercion para arbol no vacio
            let tmp = this.add(nodo, this.raiz)
            if(tmp instanceof Nodo){
                this.raiz = new Rama()
                this.raiz.insertar(tmp)
                this.raiz.hoja = false
            }
        }
    }

    //Metodo para agregar y verificar estado de las ramas
    add(nodo, rama){
        //Si es un nodo hijo
        if(rama.hoja){
            rama.insertar(nodo)
            if(rama.contador == this.orden){
                //Division de rama
                return this.divRam(rama)
            }else{
                //Retornar rama no llena
                return rama
            }
        //Si no es un nodo hijo
        }else{
            let tmp = rama.raiz 
            do{
                if(nodo.dato == tmp.dato){
                    //No inserta duplicados
                    return rama
                }else if(nodo.dato < tmp.dato){ //Insercion de nodo menor
                    let aux = this.add(nodo, tmp.izquierdo)
                    if( aux instanceof Nodo){
                        rama.insertar(aux)
                        if(rama.contador == this.orden){
                            return this.divRam(rama)
                        }
                    }
                    return rama
                }else if(tmp.siguiente == null){    //Insercion para nodo con un solo valor
                    let aux = this.add(nodo, tmp.derecho)
                    if(aux instanceof Nodo){
                        rama.insertar(aux)
                        if(rama.contador == this.orden){
                            return this.divRam(rama)
                        }
                    }
                    return rama
                }
                tmp = tmp.siguiente
            }while(tmp != null)
        }
        return rama
    }

    //Metodo de division de rama
    divRam(rama){
        let der = new Rama()
        let izq = new Rama()
        let mitad = null
        let tmp = rama.raiz
        let inicio = 1
        let medio = parseInt(this.orden/2) + 1
        let final = this.orden
        for(let i = 1; i < this.orden + 1;i++, tmp = tmp.siguiente){
            let nodo = new Nodo(tmp.dato)
            nodo.izquierdo = tmp.izquierdo
            nodo.derecho = tmp.derecho
            if(nodo.derecho != null && nodo.izquierdo != null){
                izq.hoja = false
                der.hoja = false
            }
            if(i >= inicio && i < medio){
                izq.insertar(nodo)
            }else if(i == medio){
                mitad = nodo
            }else if(i <= final && i > medio){
                der.insertar(nodo)
            }
        }
        mitad.izquierdo = izq
        mitad.derecho = der
        return mitad
    }

    //Metodo de impresion de Arbol
    printArbol(){
        if (this.raiz == null){
            console.log("no existe arbol")
            return 
        }
        this.subprint(this.raiz) 
    }

    //Sub metodo de impresion de arbol
    subprint(rama){
        if (rama.raiz == null){
            console.log("no hay nodos")
            return 
        }
        let aux = rama.raiz
        if(aux.izquierdo != null){
            this.subprint(aux.izquierdo)
        }
        if(aux.derecho!=null){
            this.subprint(aux.derecho)
        }
        if(aux.anterior == null && aux.siguiente == null){
            console.log(aux.dato)
            return
        }
        while(aux!= null){
            console.log(aux.dato)
            aux = aux.siguiente
            if(aux != null && aux.derecho!=null){
                this.subprint(aux.derecho)
            }
        }
    }

    guardar(){
        let arreglo = []
        if (this.raiz == null){
            console.log("no existe arbol")
            return 
        }
       return this.recorrido(this.raiz,arreglo) 
    }

    //Sub metodo de impresion de arbol
    recorrido(rama,arreglo){
        if (rama.raiz == null){
            console.log("no hay nodos")
            return 
        }
        let aux = rama.raiz
        if(aux.izquierdo != null){
            this.recorrido(aux.izquierdo,arreglo)
        }
        if(aux.derecho!=null){
            this.recorrido(aux.derecho,arreglo)
        }
        if(aux.anterior == null && aux.siguiente == null){
            arreglo.push(aux.dato)
            return
        }
        while(aux!= null){
            arreglo.push(aux.dato)
            aux = aux.siguiente
            if(aux != null && aux.derecho!=null){
                this.recorrido(aux.derecho,arreglo)
            }
        }

        return arreglo
    }

    //Metodo de busqueda
    buscarArbol(dato){
        if (this.raiz == null){
            console.log("no existe arbol")
            return 
        }
        this.buscando(this.raiz, dato) 
    }

    //Sub metodo de busqueda
    buscando(rama, dato){
        if (rama.raiz == null){
            console.log("no hay nodos")
            return 
        }
        let aux = rama.raiz
        if(aux.izquierdo != null){
            this.buscando(aux.izquierdo, dato)
        }
        if(aux.derecho!=null){
            this.buscando(aux.derecho, dato)
        }
        if(aux.siguiente == null){
            if(aux.dato == dato){
                console.log("Dato encontrado" + dato)
                return
            }
        }
        while(aux!= null){
            if(aux.dato == dato){
                console.log("Dato encontrado" + dato)
                return
            }
            aux = aux.siguiente
            if(aux != null && aux.derecho!=null){
                this.buscando(aux.derecho, dato)
            }
        }
    }



    //Metodo eliminar
    eliminar(dato){
        if (this.raiz == null){
            console.log("no existe arbol")
            return 
        }
        let aux = this.raiz
        let aux2 = aux.raiz
        while (aux2 != null){
            if(aux2.dato == dato && aux2.izquierdo == null && aux2.derecho == null){
                if(aux2.anterior == null && aux2.siguiente != null){
                    let tmp = aux2.siguiente
                    aux.raiz = tmp
                    aux2.siguiente = null
                    tmp.anterior = null
                    console.log("Nodo Raiz eliminado")
                    return
                }else if(aux2.anterior != null && aux2.siguiente != null){
                    let tmp = aux2.siguiente
                    aux2.anterior.siguiente = tmp
                    tmp.anterior = aux2.anterior
                    aux2.anterior = null
                    aux2.siguiente = null
                    console.log("Nodo medio eliminado")
                    return
                }else if(aux2.anterior != null && aux2.siguiente == null){
                    let tmp = aux2.anterior
                    tmp.siguiente = null
                    aux2.anterior = null
                    console.log("Nodo eliminado al final")
                    return
                }else if(aux2.anterior == null && aux2.siguiente == null){
                    if(aux2.izquierdo == null && aux2.derecho == null){
                        this.raiz = null
                        console.log("eliminado unico nodo")
                    }
                }
            }
            aux2 = aux2.siguiente
        }
        this.eliminando(this.raiz, dato) 
    }

    //Sub metodo eliminar
    eliminando(rama, dato){
        if (rama.raiz == null){
            console.log("no hay nodos")
            return 
        }
        let aux = rama.raiz
        if(aux.izquierdo != null){
            this.eliminando(aux.izquierdo, dato)
        }
        if(aux.derecho!=null){
            this.eliminando(aux.derecho, dato)
        }
        if(aux.siguiente == null && aux.anterior == null){
            if(aux.dato == dato){
                console.log("Dato identificado" + dato)
                aux.dato = "papa"
                this.elimin(this.raiz)
                this.creando()
                return
            }
        }
        while(aux!= null){
            if(aux.anterior != null && aux.derecho != null){
                this.eliminando(aux.derecho, dato)
            }
            if(aux.dato == dato){
                console.log("Dato identificado" + dato)
                aux.dato = "papa"
                this.elimin(this.raiz)
                this.creando()
                return
            }
            aux = aux.siguiente
        }
    }

    //Metodo de reestructuracion de arbol
    creando(){
        this.raiz = null
        for(let i = 0; i<arr.length;i++){
            let dat = arr[i]
            this.insertar(dat)
        }
        console.log("Arbol Creado")
        arr = []
    }
    
    //Metodo para manejo de array de uso unico
    elimin(rama){
        if (rama.raiz == null){
            console.log("no hay nodos")
            return 
        }
        let aux = rama.raiz
        if(aux.izquierdo != null){
            this.elimin(aux.izquierdo)
        }
        if(aux.derecho!=null){
            this.elimin(aux.derecho)
        }
        if(aux.siguiente == null && aux.anterior == null){
            if(aux.dato != "papa"){
                arr.push(aux.dato)
                return
            }
        }
        while(aux!= null){
            if(aux.anterior != null && aux.derecho != null){
                this.elimin(aux.derecho)
            }
            if(aux.dato != "papa"){
                arr.push(aux.dato)
            }
            aux = aux.siguiente
        }
    }

    //Metodo modificar
    modificar(datelim, datins){
        this.eliminar(datelim)
        this.insertar(datins)
    }

    //Metodo Cargar
    cargar(arreglo) {
        arreglo.map(elemento => {
            this.insertar(elemento);
        })
    }

    //Metodo Graficar
    graficar(){
        salida = ""
        if(this.raiz == null){
            console.log("No hay nada aun")
            return
        }
        let rama = this.raiz
        salida+= "digraph G{\nnode[shape=record]\nedge[color=\"green\"]\n"
        this.graficando(rama)
        salida+= "}"
        console.log(salida)
        return salida
    }

    //SubMetodo Graficar
    graficando(rama){
        if (rama.raiz == null){
            console.log("no hay nodos")
            return 
        }
        let aux = rama.raiz
        if(aux.izquierdo != null){
            this.graficando(aux.izquierdo)
        }
        if(aux.derecho!=null){
            this.graficando(aux.derecho)
        }
        if(aux.siguiente == null){
            salida += "node"+aux.dato+" [label = \" iz| "+aux.dato+" |de \"]; \n"
            if(aux.derecho != null){
                salida+= "node"+aux.dato + " -> node" + aux.derecho.raiz.dato + "\n"
            }
            if(aux.izquierdo != null){
                salida+= "node"+aux.dato + " -> node" + aux.izquierdo.raiz.dato + "\n"
            }
        }
        if(aux.siguiente != null){
            if(aux.izquierdo==null && aux.derecho == null){
                salida += "node"+aux.dato+" [label = \" iz| "
                while(aux!=null){
                    salida += aux.dato+ " | "
                    aux = aux.siguiente
                }
                salida += "de \"]; \n"
            }else if(aux.izquierdo!=null && aux.derecho != null){
                salida += "node"+aux.dato+" [label = \" iz| "
                while(aux!=null){
                    salida += aux.dato+ " | "
                    aux = aux.siguiente
                }
                salida += "de \"]; \n"
                aux = rama.raiz
                if(aux.derecho != null){
                    salida+= "node"+rama.raiz.dato + " -> node" + rama.raiz.derecho.raiz.dato + "\n"
                }
                if(aux.izquierdo != null){
                    salida+= "node"+rama.raiz.dato + " -> node" + rama.raiz.izquierdo.raiz.dato + "\n"
                }
                aux = rama.raiz
                aux = aux.siguiente
                while(aux!=null){
                    salida += "node"+rama.raiz.dato + " -> node" + aux.derecho.raiz.dato + "\n"
                    aux = aux.siguiente
                }
            }
            aux = rama.raiz
            aux = aux.siguiente
            while(aux !=null){
                if(aux != null && aux.derecho!=null){
                    this.graficando(aux.derecho)
                }
                aux = aux.siguiente
            }
        }    
    }

    //Metodo Graficar
    graficar(){
        salida = ""
        if(this.raiz == null){
            console.log("No hay nada aun")
            return
        }
        let rama = this.raiz
        salida+= "digraph G{\nnode[shape=record]\nedge[color=\"green\"]\n"
        this.graficando(rama)
        salida+= "}"
        console.log(salida)
        return salida
    }

    //SubMetodo Graficar
    graficando(rama){
        if (rama.indice == null){
            console.log("no hay nodos")
            return 
        }
        let aux = rama.indice
        if(aux.rama_Izq != null){
            this.graficando(aux.rama_Izq)
        }
        if(aux.rama_Der!=null){
            this.graficando(aux.rama_Der)
        }
        if(aux.siguiente == null){
            salida += "node"+aux.valor+" [label = \" iz| "+aux.valor+" |de \"]; \n"
            if(aux.rama_Der != null){
                salida+= "node"+aux.valor + " -> node" + aux.rama_Der.indice.valor + "\n"
            }
            if(aux.rama_Izq != null){
                salida+= "node"+aux.valor + " -> node" + aux.rama_Izq.indice.valor + "\n"
            }
        }
        if(aux.siguiente != null){
            if(aux.rama_Izq==null && aux.rama_Der == null){
                salida += "node"+aux.valor+" [label = \" iz| "
                while(aux!=null){
                    salida += aux.valor+ " | "
                    aux = aux.siguiente
                }
                salida += "de \"]; \n"
            }else if(aux.rama_Izq!=null && aux.rama_Der != null){
                salida += "node"+aux.valor+" [label = \" iz| "
                while(aux!=null){
                    salida += aux.valor+ " | "
                    aux = aux.siguiente
                }
                salida += "de \"]; \n"
                aux = rama.indice
                if(aux.rama_Der != null){
                    salida+= "node"+rama.indice.valor + " -> node" + rama.indice.rama_Der.indice.valor + "\n"
                }
                if(aux.izquierdo != null){
                    salida+= "node"+rama.indice.valor + " -> node" + rama.indice.rama_Izq.indice.valor + "\n"
                }
                aux = rama.indice
                aux = aux.siguiente
                while(aux!=null){
                    salida += "node"+rama.indice.valor + " -> node" + aux.rama_Der.indice.valor + "\n"
                    aux = aux.siguiente
                }
            }
            aux = rama.indice
            aux = aux.siguiente
            while(aux !=null){
                if(aux != null && aux.rama_Der!=null){
                    this.graficando(aux.rama_Der)
                }
                aux = aux.siguiente
            }
        }    
        /*if(rama.hoja == true){
            if(rama.ramaContinua != null){
                salida += "node"+rama.indice.valor + " -> node" + rama.ramaContinua.indice.valor + "\n"
            }
        }*/
    }
    
}

export default ArbolB;