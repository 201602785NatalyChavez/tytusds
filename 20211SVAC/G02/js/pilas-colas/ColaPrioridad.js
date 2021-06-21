var arrayNodes = [];
var edges = [];
var cargaVal = [];
var cargaPriori = [];
var network = null;
var clickedNode;
var clickedNodoValue;
var fileInput = document.querySelector('input[type="file"]');

class Nodo {
    constructor(dato, prioridad) {
        this.dato = dato;
        this.priori = prioridad;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ColaPrioridad {
    constructor() {
        this.primero = null;
        this.ultimo = null;
        this.size = 0;
    }

    encolar(dato, prioridad){
        let nodo = new Nodo(dato, prioridad);
        let actual = this.primero;

        nodo.anterior = nodo.siguiente = null;

        if (!this.isVacia()) {
            if (actual. priori> prioridad){
                this.primero.anterior = nodo;
                nodo.siguiente = this.primero;
                this.primero = nodo;
            }else{
                while (actual.siguiente != null && actual.siguiente.priori <= prioridad)
                {
                    actual = actual.siguiente;
                }
                this.primero.anterior = actual;
                nodo.siguiente = actual.siguiente;
                actual.siguiente = nodo;

                this.size++;
            }
        }else{
            this.primero = nodo;
            this.ultimo = this.primero;
            this.size++;
        }


    }

    desencolar(){
        if (this.isVacia()){
            return 'Cola Vacia'
        }else{
            var actual = this.primero;
            this.primero = this.primero.siguiente;
            this.size--;
        }
    }

    imprimir(){
        let actual = this.primero;
        let i = 0;
        //this.ordenarp();
        if (!this.isVacia())
        {
            while (actual)
            {
                if (i != 0)
                {
                    arrayNodes.push({id: i, label: actual.dato+", "+actual.priori, shape: "box"});
                    edges.push({from: i - 1, to: i});
                }else{
                    arrayNodes.push({id: i, label: actual.dato+", "+actual.priori, shape: "box"});
                }
                i++;
                actual = actual.siguiente
            }
        }
    }

    isVacia(){
        return this.primero == null;
    }

    actualizar (viejo, nuevo) {
        var generado, priori;
        generado= viejo.split(',');
        viejo = generado[0];
        priori = generado[1]
        if (this.buscar(viejo))
        {
            this.remplazar(viejo, nuevo, priori);
        }
    }

    buscar (valor) {
        let actual = this.primero
        let encontrado = false;
        if (!this.isVacia())
        {
            while (actual)
            {
                if(valor === actual.dato)
                {
                    encontrado = true;
                    return true;
                }
                actual = actual.siguiente;
            }
            if (encontrado === false)
            {
                alert("El dato ingreso no se encuentra en la Cola de prioridad");
                return false;
            }
        }else{
            alert('Ingrese datos a la Cola de prioridad para buscarlos');
        }
    }

    buscarNodo (valor) {
        let actual = this.primero;
        var encontrado = false;
        var id = 0;

        if (!this.isVacia())
        {
            while (actual)
            {
                if(valor === actual.dato)
                {
                    encontrado = true;
                    return id;
                }
                actual = actual.siguiente;
                id++;
            }
            if (encontrado === false)
            {
                alert("El dato ingreso no se encuentra en la Cola de prioridad");
            }
        }else{
            alert('Ingrese datos a la Cola de prioridad para buscarlos');
        }

    }

    remplazar (viejo, nuevo, prioridad) {
        let actual = this.primero;
        while (actual)
        {
            if (viejo === actual.dato)
            {
                actual.dato = nuevo ;
                actual.priori =prioridad;
                break;
            }
            actual = actual.siguiente;
        }
    }
}

let colaPrioridad = new ColaPrioridad();

function actualizarT() {
    colaPrioridad.imprimir();

    var nodes = new vis.DataSet(arrayNodes);
    var container = document.getElementById("mynetwork");
    var data = {
        nodes: arrayNodes,
        edges: edges,
    };
    var options = {
        physics: false,
        layout: {
            hierarchical: {
                direction: 'DU',
                levelSeparation: 25

            }
        },
        interaction: {
            zoomView: true,
            zoomSpeed: 0.001,
            navigationButtons: true,
            keyboard: {
                enabled: true,
                speed: {
                    x: 15,
                    y: 15,
                    zoom: 0.1
                },
            }
        }
    };
    network = new vis.Network(container, data, options);
    network.on('click', function (properties) {
        var nodeID = properties.nodes[0];
        if (nodeID) {
            clickedNode = this.body.nodes[nodeID];
            clickedNode = clickedNode.options.id
            console.log('clicked node:', clickedNode);
            clickedNodoValue =  this.body.nodes[nodeID]
            clickedNodoValue = clickedNodoValue.options.label
            document.getElementById("valueNodo").value = clickedNodoValue;
        }
    });
    arrayNodes = []
    edges = []
}

function insertarNodo() {
    let valueNodo = document.getElementById('valueNodo').value;
    let valuePrioridad = document.getElementById("valuePrioridad").value;
    if (valuePrioridad === "") valuePrioridad = 5;
    colaPrioridad.encolar(valueNodo, valuePrioridad);
    actualizarT();
    document.getElementById("valueNodo").value="";
    document.getElementById("valuePrioridad").value="";
}

function insertarNodos(arrayVal, arrayP) {
    let temp = arrayVal;
    let temp1 = arrayP;
    console.log(temp, 'temp')
    console.log(temp1, 'temp1')
    for (let i = 0; i < temp.length; i++) {
        colaPrioridad.encolar(temp[i], temp1[i]);
    }
    actualizarT();
    document.getElementById("valueNodo").value="";
}

function readFile(callback) {

    arrayNodes = [];
    edges = [];
    cargaVal = [];
    cargaPriori = [];
    colaPrioridad = new ColaPrioridad();

    var file = fileInput.files.item(0);
    var reader = new FileReader();

    reader.readAsText(file);
    reader.onload = function (){
        var obj = JSON.parse(reader.result);
        let val = obj.valores;
        repetidos = obj.repeticion;


        switch (repetidos) {
            case false:
                for (var i = 0; i<val.length; i++)
                {
                    if (cargaVal.includes(val[i].valor) === false)
                    {
                        cargaVal.push(val[i].valor);
                        cargaPriori.push(val[i].prioridad)
                    }
                }
                insertarNodos(cargaVal, cargaPriori);
                break;

            case true:
                for (var i = 0; i<val.length; i++)
                {
                    carga.push(val[i].toString());
                }
                insertarNodos(carga);
                break;
            default:
                console.log('Falta indicador de repitencia')
        }
    }
}

function focus() {
    var valueNodo = document.getElementById('valueNodo').value
    let nodeId = colaPrioridad.buscarNodo(valueNodo);
    console.log(nodeId)
    var options = {
        // position: {x:positionx,y:positiony}, // this is not relevant when focusing on nodes
        scale: 5.0,
        offset: {x:0,y:0},
        animation: {
            duration: 2500,
            easingFunction: "easeOutQuint"
        }
    }
    network.focus(nodeId, options);
}

function actualizarNodo(){
    var valueNodo = document.getElementById('valueNodo').value
    colaPrioridad.actualizar(clickedNodoValue, valueNodo);
    actualizarT();
    document.getElementById("valueNodo").value="";
}

function desencolarNodo(){
    colaPrioridad.desencolar();
    actualizarT();
    document.getElementById("valueNodo").value="";
    document.getElementById("valuePrioridad").value="";
}

function buscarNodo(){
    focus()
    document.getElementById("valueNodo").value="";
}
