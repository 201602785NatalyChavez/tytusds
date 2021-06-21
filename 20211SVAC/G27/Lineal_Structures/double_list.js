
class Nodo{
  constructor(valor){
      this.valor = valor;
      this.siguiente = null;
      this.anterior = null;
  }

  getValor(){
      return this.valor;
  }
} 

class double_list{
  constructor(){
      this.primero = null;
      this.ultimo = null;
      this.tamano = 0;

  }

  insert(valor){
      let nuevoValor = new Nodo(valor);
      if(this.primero == null){
          this.primero = nuevoValor;
          this.ultimo = nuevoValor;
          this.tamano++;
      }else{
          this.ultimo.siguiente = nuevoValor;
          nuevoValor.anterior = this.ultimo;
          this.ultimo = nuevoValor;
      }

  }

  sacarValor(){
      var actualNode = this.primero;
      actualNode.siguiente.anterior = null;
      this.primero = actualNode.siguiente;
      actualNode.siguiente = null;
  }

  delete(valor){
      var actualNode = this.find(valor);
      if(actualNode === this.primero){
          actualNode.siguiente.anterior = null;
          this.primero = actualNode.siguiente;
          actualNode.siguiente = null;
      }else if(actualNode === this.ultimo){
          actualNode.anterior.siguiente = null;
          this.ultimo = actualNode.anterior;
          actualNode.anterior = null;
      }
      else if(!(actualNode.siguiente === null)){
          actualNode.anterior.siguiente = actualNode.siguiente;
          actualNode.siguiente.anterior = actualNode.anterior;
          actualNode.siguiente = null;
          actualNode.anterior = null;
      }
  }

  find(valor){
      var actualNode = this.primero;
      while(actualNode.valor != valor){
          actualNode = actualNode.siguiente;
      }
      return actualNode;
  }

  find_valor(posicion){
    var actualNode = this.primero;
    for (let index = 0; index < posicion -1; index++) {
      actualNode = actualNode.siguiente;
    }
    return actualNode.valor;
  }

}

var lista = new double_list;

function agregarValor(){
  var x = document.getElementById("newValue").value;
  document.getElementById("newValue").value = "";
  lista.insert(x);
  document.getElementById("newValue").focus();
  graficar();
}

function sacarInicio(){
  lista.sacarValor();
  graficar();
}

function encontrar(){
  var x = document.getElementById("newValue").value;
  document.getElementById("newValue").value =lista.find_valor(x);
  document.getElementById("newValue").focus();
}

function eliminarValor(){
  var x = document.getElementById("newValue").value;
  document.getElementById("newValue").value ="";
  lista.delete(x);
  document.getElementById("newValue").focus();
  graficar();
}

function graficar(){


    var x_pos = -150;
    var y_pos = 0;
    var nodes = [];
    var contador = 0;
    var edges = [];       
    // creating an array with nodes
    var aux = lista.primero;

    nodes.push({id: "Cabeza", label: "Cabeza", x: -150, y: -100});
    nodes.push({id: "Cola", label: "Cola", x: -150, y: 100});
    while(aux != null){
      nodes.push({id: contador, label: "Valor: " + aux.valor, x: x_pos, y: y_pos});
      
      edges.push({
        from: contador,
        to: contador+1,
        arrows: "to",
        physics: false,
        smooth: {type: "cubicBezier"},
      });

      edges.push({
        from: contador+1,
        to: contador,
        arrows: "to",
        physics: false,
        smooth: {type: "cubicBezier"},
      });

      aux = aux.siguiente;
      x_pos = x_pos + 100;
      contador++;  
    }
    // create an array with edges


    
    edges.push({
      from: "Cabeza",
      to: 0,
      arrows: "to",
      physics: false,
      smooth: {type: "cubicBezier"},
    });
    
    edges.push({
      from: "Cola",
      to: contador-1,
      arrows: "to",
      physics: false,
      smooth: {type: "cubicBezier"},
    });

    // create a network
    var container = document.getElementById("miRed");
    var data = {
      nodes: nodes,
      edges: edges,
    };

    const options = {

      nodes: {
        shape: "box",
      },

      physics: {
        hierarchicalRepulsion: {
          nodeDistance: 110,
        },
      },
    };
    var network = new vis.Network(container, data, options);
  
}

//here I load a JSON Files
function AbrirArchivo(files){
  var file = files[0];
  var reader = new FileReader();
  reader.onload = function(event){
    var contents = event.target.result;
    var json = JSON.parse(contents);
    var count = Object.keys(json.valores).length;
    for (let index = 0; index < count; index++) {
      lista.insert(json.valores[index]); 
    }
    graficar();
  };
  reader.onerror = function(event) {
    console.error("File could not be read! Code " + event.target.error.code);
};
  reader.readAsText(file);
}