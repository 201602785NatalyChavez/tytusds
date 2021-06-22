class NodoBPlus{
    constructor(valor = null, padre = null){
        if(valor != null){
            this.primero = new Llave(valor, this);  //Al crear un nodo se crea una llave.
            this.size = 1;  //tamaño de uno por la llave
            this.padre = padre; //llave padre del nodo.
            this.tieneHijo = false;
            this.siguienteNodo = null;
        }else{
            this.primero = null;  //Al crear un nodo se crea una llave.
            this.size = 0;  //tamaño de uno por la llave
            this.padre = padre; //llave padre del nodo.
            this.tieneHijo = false;
            this.siguienteNodo = null;
        }
    }

    agregar(dato){  //metodo para agregar llave a un nodo
        let agregado = false;
        let actual = this.primero;

        if(this.primero == null){
            this.primero = new Llave(dato, this);
        }else{
            while(!agregado){
                if(actual.valor < dato){
                    if(actual.siguiente != null){ //dato es mayor y siguiente no es nulo
                        actual = actual.siguiente;
                    }else{  //dato nuevo es mayor al actual y sig es nulo
                        let nuevo = new Llave(dato, this);
                        actual.siguiente = nuevo;
                        nuevo.anterior = actual;
                        agregado = true;
                    }
                }else{  //dato nuevo es menor o igual
                    if(actual != this.primero){ //nodo actual no es el primero
                        let nuevo = new Llave(dato, this);
                        actual.anterior = actual.anterior.siguiente = nuevo;
                        nuevo.anterior = actual.anterior;
                        nuevo.siguiente = actual;
                        agregado = true;
                    }else{  //nodo actual es el primero
                        let nuevo = new Llave(dato, this);
                        actual.anterior = nuevo;
                        nuevo.siguiente = actual;
                        agregado = true;
                    }
                }
            }
        }

        this.size++;
    }

    agregarLlave(llave){
        let agregado = false;
        let actual = this.primero;

        if(this.primero == null){
            this.primero = new Llave(llave.valor, this);
            this.primero.nodo = this;
            this.primero
        }else{
            while(!agregado){
                if(actual.valor < llave.valor){
                    if(actual.siguiente != null){ //dato es mayor y siguiente no es nulo
                        actual = actual.siguiente;
                    }else{  //dato nuevo es mayor al actual y sig es nulo
                        let nuevo = new Llave(llave.valor, this);
                        actual.siguiente = nuevo;
                        nuevo.anterior = actual;
                        agregado = true;
                    }
                }else{  //dato nuevo es menor o igual
                    if(actual != this.primero){ //nodo actual no es el primero
                        let nuevo = new Llave(llave.valor, this);
                        actual.anterior = actual.anterior.siguiente = nuevo;
                        nuevo.anterior = actual.anterior;
                        nuevo.siguiente = actual;
                        agregado = true;
                    }else{  //nodo actual es el primero
                        let nuevo = new Llave(llave.valor, this);
                        actual.anterior = nuevo;
                        nuevo.siguiente = actual;
                        agregado = true;
                    }
                }
            }
        }
        
        this.size++;
    }

    llaveMid(pos){
        let i = 1;
        let actual = this.primero;

        while(i < pos){
            actual = actual.siguiente;
            i++;
        }
        return actual;
    }

    llave(valor){
        let actual = this.primero;
        let encontrado = false;

        while(actual != null && !encontrado){
            if(actual.valor == valor){
                encontrado = true;
            }else{
                actual = actual.siguiente;
            }
        }
        if(encontrado){
            return actual;
        }else{
            return null;
        }
    }
}

class Llave{
    constructor(dato, nodo){
        this.valor = dato;      //valor guardado
        this.derecha = null;    //nodo hijo R
        this.izquierda = null;  //nodo hijo L
        this.siguiente = null;  //llave sig
        this.anterior = null;   //llave ant
        this.nodo = nodo;       //nodo padre
    }
}

class ArbolBPlus{
    constructor(orden){
        this.root = null;
        this.orden = orden;
        this.size = 0;
    }

    minHijos(){ //metodo para el num minimo de hijos en cada nodo, tambien para pos de llave media
        return Math.ceil(this.orden / 2);
    }

    minLlaves(){//min de llaves en un nodo
        return this.minHijos - 1;
    }

    maxLlaves(){//max llaves en un nodo
        return this.orden - 1;
    }

    maxHijos(){
        return this.orden;
    }

    agregar(dato){
        this.root = this.insertar(dato);
    }

    insertar(dato, nodo = this.root, isDerecha = null){
        if(nodo == null){
            console.log('a');
            this.size++;
            return new NodoBPlus(dato);
        }else{
            if(nodo.tieneHijo){//si nodo tiene hijo, busca hasta encontrar un nodo hijo
                let encontrado = false; //Si el nodo tiene hijo, busca donde agregarlo
                let actual = nodo.primero;
                while(!encontrado){
                    if(actual.valor < dato){
                        console.log('c');
                        if(actual.siguiente != null){
                            actual = actual.siguiente;
                        }else{  //inserta un dato en el nodo hijo a la derecha
                            console.log('d');
                            actual.derecha = this.insertar(dato, actual.derecha, true);
                            encontrado = true;
                        }
                    }else{  //cuando valor de actual es mayor al dato nuevo
                        if(actual != nodo.primero){ //insertando en el nodo hijo de un llave que no es primero
                            console.log('e');
                            actual.izquierda = actual.anterior.derecha = this.insertar(dato, actual.izquierda, false);
                            encontrado = true;
                        }else{  //insertando a la izquierda de la primera llave
                            console.log('f');
                            actual.izquierda = this.insertar(dato, actual.izquierda, false);
                            encontrado = true;
                        }
                    }
                }
            }else{
                console.log('b');
                nodo.agregar(dato); //si el nodo no tiene hijos, agrega dato al nodo.
                this.size++;
            }
        }
        if(isDerecha != null){
            console.log('isd');
            nodo = this.update(nodo,isDerecha);
        }else{
            console.log('asd');
            nodo = this.update(nodo);
        }
        return nodo;
    }

    update(nodo, isDerecha = null){
        if(nodo.size > this.maxLlaves()){ //solo se actualiza si el tamaño es mayor al max
            let mid = nodo.llaveMid(this.minHijos());
            let premid = mid.anterior;
            let padre = null;
            let llaveP = null;
            let nodoL = null;
            let nodoR = null;
            let nueva = null;
            if(nodo.tieneHijo){//nodo no es hoja
                let postmid = mid.siguiente;
                if(nodo.padre == null){ //nodo no es hoja y no tiene padre
                    padre = new NodoBPlus();
                    padre.tieneHijo = true;

                    padre.agregarLlave(mid);
                    llaveP = padre.llave(mid.valor);

                    nodoL = new NodoBPlus(null,llaveP);
                    llaveP.izquierda = nodoL;

                    nodoR = new NodoBPlus(null, llaveP);
                    llaveP.derecha = nodoR;

                    llaveP.izquierda = nodoL;
                    llaveP.derecha = nodoR;

                    while(premid != null){
                        nodoL.agregarLlave(premid);
                        nueva = nodoL.llave(premid.valor);

                        nueva.izquierda = premid.izquierda;
                        nueva.derecha = premid.derecha;

                        premid = premid.anterior;
                    }

                    while(postmid != null){
                        nodoR.agregarLlave(postmid);
                        nueva = nodoR.llave(postmid.valor);

                        nueva.izquierda = postmid.izquierda;
                        nueva.derecha = postmid.derecha;

                        postmid = postmid.siguiente;
                    }

                    return padre;
                }else{  //nodo no es hoja y tiene un padre
                    padre = nodo.padre.nodo;
                    padre.agregarLlave(mid);
                    llaveP = padre.llave(mid.valor);

                    nodoL = new NodoBPlus(null,llaveP);
                    llaveP.izquierda = nodoL;
                    if(llaveP.anterior != null){
                        llaveP.anterior.derecha = nodoL;
                    }

                    nodoR = new NodoBPlus(null, llaveP);
                    llaveP.derecha = nodoR;
                    if(llaveP.siguiente != null){
                        llaveP.siguiente.izquierda = nodoR;
                    }

                    while(premid != null){
                        nodoL.agregarLlave(premid);
                        nueva = nodoL.llave(premid.valor);

                        nueva.izquierda = premid.izquierda;
                        nueva.derecha = premid.derecha;

                        premid = premid.anterior;
                    }

                    while(postmid != null){
                        nodoR.agregarLlave(postmid);
                        nueva = nodoR.llave(postmid.valor);

                        nueva.izquierda = postmid.izquierda;
                        nueva.derecha = postmid.derecha;

                        postmid = postmid.siguiente;
                    }

                    if(isDerecha){  //chequea si el padre que mando a llamar el metodo insertar tiene
                        return nodo.padre.derecha;  //a nodo como hijo derecha o izquierda y devuelve acorde.
                    }else{
                        return nodo.padre.izquierda;
                    }
                }
            }else{//nodo es hoja
                if(nodo.padre == null){ //nodo es hoja sin padre
                    console.log('hoja sin p')
                    padre = new NodoBPlus();
                    padre.tieneHijo = true;

                    padre.agregarLlave(mid);
                    llaveP = padre.llave(mid.valor);

                    nodoL = new NodoBPlus(null,llaveP);
                    llaveP.izquierda = nodoL;

                    nodoR = new NodoBPlus(null, llaveP);
                    llaveP.derecha = nodoR;

                    llaveP.izquierda = nodoL;
                    llaveP.derecha = nodoR;

                    nodoL.siguienteNodo = nodoR;

                    while(premid != null){
                        nodoL.agregarLlave(premid);
                        nueva = nodoL.llave(premid.valor);

                        premid = premid.anterior;
                    }

                    while(mid != null){
                        nodoR.agregarLlave(mid);
                        nueva = nodoR.llave(mid.valor);

                        mid = mid.siguiente;
                    }

                    return padre;
                }else{  //nodo hoja con padre
                    padre = nodo.padre.nodo;
                    padre.agregarLlave(mid);
                    llaveP = padre.llave(mid.valor);

                    nodoL = new NodoBPlus(null,llaveP);
                    llaveP.izquierda = nodoL;

                    nodoR = new NodoBPlus(null, llaveP);
                    llaveP.derecha = nodoR;

                    while(premid != null){
                        nodoL.agregarLlave(premid);
                        nueva = nodoL.llave(premid.valor);

                        premid = premid.anterior;
                    }

                    while(mid != null){
                        nodoR.agregarLlave(mid);
                        nueva = nodoR.llave(mid.valor);

                        mid = mid.siguiente;
                    }

                    if(llaveP.anterior != null){
                        llaveP.anterior.izquierda.siguienteNodo = nodoL
                        llaveP.anterior.derecha = nodoL;
                    }

                    if(llaveP.siguiente != null){
                        nodoR.siguienteNodo = llaveP.siguiente.derecha;
                        llaveP.siguiente.izquierda = nodoR;
                    }else{  //si el nodo siguiente es nulo, revisa si hay un nodo siguiente
                        let llaveR = nodoR.padre;    //Busca el nodo a la derecha con la posicion mas cercana a nodoR
                        let nodoAux = nodoR;
                        let encontrado = false;
                        while(!encontrado){
                            if(llaveR.derecha != nodoAux){  //revisa si el nodo derecho es nuevo
                                if(llaveR.siguiente != null){   //revisa si la llave siguiente existe
                                    if(llaveR.nodo.padre != null){  //revisa si no hay mas nodos padre
                                        llaveR = llaveR.nodo.padre;
                                        nodoAux = nodoAux.padre.nodo;
                                    }else{
                                        encontrado = true;
                                    }
                                }else{
                                    encontrado = true;
                                }
                            }else{
                                encontrado = true;
                            }
                        }
                        let nodoH = null

                        if(llaveR.derecha == nodoAux){ //al encontrar una llave que posee un nodo siguiente
                            if(llaveR.siguiente != null){   //si la llave siguiente no es nula, busca nodo mas izquierdo
                                nodoH = llaveR.siguiente.derecha;   //de lo contrario, no hay nodo siguiente
                                while(nodoH.primero.izquierda != null){
                                    nodoH = nodoH.primero.izquierda;
                                }
                            }
                        }else{  //si el nodo a la derecha es nuevo, busca el nodo mas a la izquierda de ese nodo
                            nodoH = llaveR.derecha;
                            while(nodoH.primero.izquierda != null){
                                nodoH = nodoH.primero.izquierda;
                            }
                        }
                        
                        nodoR.siguienteNodo = nodoH;    //finalmente asigna siguiente nodo a nodoR
                    }

                    nodoL.siguienteNodo = nodoR; //asignacion de nodos en la lista

                    if(isDerecha){  //chequea si el padre que mando a llamar el metodo insertar tiene
                        return nodo.padre.derecha;  //a nodo como hijo derecha o izquierda y devuelve acorde.
                    }else{
                        return nodo.padre.izquierda;
                    }
                }
            }
        }else{
            console.log('nada')
            return nodo;
        }
        
    }

    elementos(nodo = this.root){
        if(nodo == this.root){
            while(nodo.tieneHijo){
                nodo = nodo.primero.izquierda;
            }
            let a = []
            let llave = nodo.primero
            while(llave != null){
                a[a.length] = llave.valor;
                llave = llave.siguiente;
            }
            
            if(nodo.siguienteNodo != null){
                a = a.concat(this.elementos(nodo.siguienteNodo));
            }
            return a;
        }else{
            let llave = nodo.primero;
            let a = []
            while(llave != null){
                a[a.length] = llave.valor;
                llave = llave.siguiente;
            }
            
            if(nodo.siguienteNodo != null){
                a = a.concat(this.elementos(nodo.siguienteNodo));
            }
            return a;
        }
    }

    eliminar(dato){
        if(this.buscar(dato)){
            let elementos = this.elementos();
            this.root = null;
            let borrado = false;
            for(let i = 0; i < elementos.length; i++){
                if(!borrado){
                    if(elementos[i] != dato){
                        this.agregar(elementos[i]);
                    }else{
                        borrado = true;
                    }
                }else{
                    this.agregar(elementos[i]);
                }
            }
            this.size--;
        }else{
            console.log('El dato ingresado no existe en el arbol.')
        }
    }

    buscar(dato){
        let nodo = this.root;
        let llave = nodo.primero;
        let ultimo = false;
        let siguiente = false;

        while(!ultimo){
            llave = nodo.primero;
            siguiente = false;

            while(!siguiente){
                if(nodo.tieneHijo){//el valor no puede estar en un nodo interno
                    if(llave.valor < dato){
                        if(llave.siguiente != null){//pasa a siguiente llave
                            llave = llave.siguiente;
                        }else{//pasa a nodo hijo derecho
                            nodo = llave.derecha;
                            siguiente = true;
                        }
                    }else{  //llave es mayor a dato, pasa a nodo hijo
                        nodo = llave.izquierda;
                    }
                }else{  //el nodo debe estar en el nodo hoja alcanzado
                    if(llave.valor < dato){
                        if(llave.siguiente != null){
                            llave = llave.siguiente;
                        }else{  //alcanzo la ultima llave del nodo hoja, no existe
                            ultimo = true;
                            siguiente = true;
                        }
                    }else if(llave.valor > dato){   //alcanzo un llave mayor, por lo que el dato no existe en el arbol
                        ultimo = true;
                        siguiente = true;
                    }else{
                        return true;
                    }
                }
            }

            return false;
        }
    }

    actualizar(existente, nuevo){
        if(this.buscar(existente)){
            this.eliminar(existente);
            this.agregar(nuevo);
        }else{
            console.log('El dato ingresado no existe en el arbol.')
        }
    }

    cargar(){
        console.log('Leyendo json.')
    }

    guardar(){
        console.log('Guardando en json.')
    }


}

module.exports = ArbolBPlus;