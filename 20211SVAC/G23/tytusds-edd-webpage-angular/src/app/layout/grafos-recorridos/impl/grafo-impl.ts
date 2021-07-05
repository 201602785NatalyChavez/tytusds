
export class GrafoImpl{
    public matrizAdyacencia=[];
    public listaAdyacencia=[];
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
        ['myhouse', 'momanddad',0],
        ['momanddad', 'niece1',0],
        ['momanddad', 'nephew',0],
        ['myhouse', 'inlaws',0],
        ['inlaws', 'kid2',0],
        ['inlaws', 'kid1',0]
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

   //profundidad
   dfs(nodoInicial){
    let descubiertos=[]
    // Create a Stack and add our initial node in it
    let s = new Array();
    let explored = new Set();
    s.push(nodoInicial);

    // Mark the first node as explored
    explored.add(nodoInicial);

    // We'll continue till our Stack gets empty
    while (s.length!=0) {
        let t = s.pop();

        // Log every element that comes out of the Stack
            descubiertos.push(t);
            console.log(t);

        // 1. In the edges object, we search for nodes this node is directly connected to.
        // 2. We filter out the nodes that have already been explored.
        // 3. Then we mark each unexplored node as explored and push it to the Stack.
        this.obtenerAristas(t,explored,s);
    }
    return descubiertos;
    }
    obtenerAristas(nodoNombre,explored,s){
        let aristasRetorno=[];
        for(let i = 0 ; i < this.aristas.length; i++){
            if(this.aristas[i][0]==nodoNombre.name)
                aristasRetorno.push(this.aristas[i])
        }
        for(let i = 0 ; i < aristasRetorno.length; i++){
            if( !explored.has( aristasRetorno[i][1] ) ){
                s.push(this.buscarNodo(aristasRetorno[i][1],this.vertices))
            }
        }
        return aristasRetorno;
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

    obtenerMatrizAdyacencia(){
        this.matrizAdyacencia=new Array();
        for(let i = 0 ; i < this.vertices.length; i ++){
            let valoresFila=[];
            for(let j = 0 ; j < this.vertices.length; j++){
                let encontrada=false;
                for(let k =0 ; k<this.aristas.length; k++){ 
                    if(this.aristas[k][0]==this.vertices[i].name
                        &&this.aristas[k][1]==this.vertices[j].name){
                            valoresFila.push(this.aristas[k][2]);
                            encontrada=true;
                    }
                }
                if(!encontrada) valoresFila.push("0");
            }
            this.matrizAdyacencia.push(valoresFila);
        }
    }
    obtenerMatrizAdyacenciaStr(){
        this.obtenerMatrizAdyacencia();
        let strMatriz="";
        for(let i = 0 ; i < this.matrizAdyacencia.length;i++){
            let filaMatriz=this.matrizAdyacencia[i];
            for(let j = 0 ; j < filaMatriz.length; j++){
                strMatriz+="\t"+filaMatriz[j];
            }
            strMatriz+="\n"
        }
        return strMatriz;
    }
    obtenerListaAdyacencia(){
        this.listaAdyacencia=new Array();
        
    }
    obtenerListaAdyacenciaStr(){
        this.obtenerListaAdyacencia();
        let strLista="";

        return strLista;
    }
   

   


}
   

   


