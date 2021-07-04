//TODO salida json
//TODO por profundidad
export class GrafoImpl{
    constructor(vertices,aristas){
        this.vertices=vertices;
        this.aristas=aristas;
    }
    public vertices = [
        {name: 'myhouse', distance: null, predecessor: null},
        {name: 'momanddad', distance: null, predecessor: null},
        {name: 'inlaws', distance: null, predecessor: null},
        {name: 'niece1', distance: null, predecessor: null},
        {name: 'nephew', distance: null, predecessor: null},
        {name: 'kid1', distance: null, predecessor: null},
        {name: 'kid2', distance: null, predecessor: null}
        ]
    public aristas = [
        ['myhouse', 'momanddad'],
        ['momanddad', 'niece1'],
        ['momanddad', 'nephew'],
        ['myhouse', 'inlaws'],
        ['inlaws', 'kid2'],
        ['inlaws', 'kid1']
        ]
    //anchura
    bfs(nodoInicial){
        for(let i = 0 ; i < this.vertices.length; i++){
            this.vertices[i].distance=null;
            this.vertices[i].predecessor=null;
        }
        nodoInicial.distance = 0
        let pila = [nodoInicial]
        let descubiertos = [nodoInicial]
        
        while(pila.length != 0){
             let nodoActual = pila.shift()
             let nodosAdyacentes = this.encontrarAdyacente(nodoActual.name, this.vertices, this.aristas)
             //let nodosAdyacentes = this.encontrarAdyacente2(nodoActual.name)
             descubiertos = descubiertos.concat(nodosAdyacentes);
             this.explorado(nodoActual, nodosAdyacentes)
             pila = pila.concat(nodosAdyacentes)
        }
        return descubiertos
   }

   explorado(nodo, nodosAdyacentes){
    const actual = nodo
    nodosAdyacentes.forEach(node => {
         node.distance = actual.distance + 1
         node.predecessor = actual
    })
    return nodosAdyacentes
    }


   encontrarAdyacente(nodeName, vertices, aristas){
    return aristas.filter(edge => edge.includes(nodeName)).map(edge => edge.filter(node =>
    node != nodeName)[0]).map(name =>
         this.buscarNodo(name, vertices)).filter(node =>
             node.distance == null)
    }

    encontrarAdyacente2(nodeName){
        let adyacentes=[];
        for(let i = 0 ; i<this.aristas.length;i++){
            if(this.aristas[i][0]==nodeName) 
            adyacentes.push(this.buscarNodo(this.aristas[i][0],this.vertices));
        }
        return adyacentes;
    }

    buscarNodo(nodeName, vertices){
        return vertices.find(vertex=> vertex.name == nodeName)
    }

    borrarNodo(nombre){
        this.vertices = this.vertices.filter(function( obj ) {
            return obj.name != nombre;
        });
        this.aristas = this.aristas.filter(function( obj ) {
            return obj[0] != nombre&&obj[1] != nombre;
        });
    }

    actualizarNodo(nombre, nuevoNombre){
        for(let i = 0 ; i < this.vertices.length; i++){
            if(this.vertices[i].name==nombre){
                this.vertices[i].name=nuevoNombre;
            }
        }
        for(let i = 0 ; i < this.aristas.length; i++){
            if(this.aristas[i][0]==nombre){
                this.aristas[i][0]=nuevoNombre;
            }
            if(this.aristas[i][1]==nombre){
                this.aristas[i][1]=nuevoNombre;
            }
        }
    }

   

   


}