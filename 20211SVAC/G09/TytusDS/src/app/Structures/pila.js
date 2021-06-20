class AnimationPila{
  constructor(id, x, y,disBtn,heightBtn){
    this.id = id
    this.x = x
    this.y = y
    this.disBtn = disBtn
    this.heightBtn = heightBtn
  }
}
class NodoPila {
    constructor(dato, siguiente, animate) {
      this.dato = dato;
      this.siguiente = siguiente;
      this.animate = animate
    }
}
  
class Pila{

    constructor() {
      this.primero = null;
      this.contId = 0
    }
    
    //Ingresar datos
    push(dato) {

      const divInsert=document.getElementById("divInsert1");
      const objeto=document.createElement("button"); //Creacion del botón
      const texto=document.createTextNode(dato);
      objeto.appendChild(texto);
      //Diseño del botón
      objeto.style.backgroundColor='rgb(30,144,255)'
      objeto.style.color='rgb(255,255,255)'
      objeto.style.fontSize='15px'
      objeto.style.borderRadius="5px"

      objeto.style.width="150px"

      objeto.id="btn"+(this.contId).toString()
      objeto.classList='animate__animated animate__rubberBand animate__slow'
      divInsert.appendChild(objeto)//Insertando el div en el Div principal
      const posicion=document.getElementById(objeto.id)
      posicion.style.position="absolute"
      const boton=document.getElementById("b1")
  
      const animacion = new AnimationPila((this.contId).toString(), null, null, objeto.offsetWidth, objeto.offsetHeight)

      //const nuevo = new NodoPila(dato, null, null);
      const nuevo = new NodoPila(dato, this.primero, animacion);

      nuevo.animate.x= (boton.offsetWidth/2) - (nuevo.animate.disBtn/2)
      nuevo.animate.y= 20
      posicion.style.left = (nuevo.animate.x).toString()+"px"
      posicion.style.top =(nuevo.animate.y).toString()+"px"

      this.contId++
      this.primero = nuevo;
      console.log("Se metio a reorganizar")
      this.reOrdenar(this.primero)
      console.log("Salió de reorganizar")
    }

    //Sacar el ultimo de la pila
    pop() {
      if (this.primero) {
        const boton=document.getElementById("b1")
        const selecBtn = document.getElementById("btn"+this.primero.animate.id)
        selecBtn.classList="animate__animated animate__hinge"
        const sClone = selecBtn.cloneNode(true)
        selecBtn.parentNode.replaceChild(sClone, selecBtn)
        const a1= setInterval(function(){
          //Eliminando el botón
          const padre = sClone.parentNode
          padre.removeChild(sClone)
          clearInterval(a1)
        },2000)

        if (this.primero.siguiente) {
          const nodoAux = this.primero.siguiente;
          this.primero = nodoAux;

          this.primero.animate.x= (boton.offsetWidth/2) - (nodoAux.animate.disBtn/2)
          this.primero.animate.y= 20

          const selecBtnNuevo = document.getElementById("btn"+this.primero.animate.id)
          selecBtnNuevo.classList="animate__animated animate__slideInUp"
          const sClone3 = selecBtnNuevo.cloneNode(true)
          selecBtnNuevo.parentNode.replaceChild(sClone3, selecBtnNuevo)
          sClone3.style.left =(this.primero.animate.x).toString()+"px"
          sClone3.style.top =(this.primero.animate.y).toString()+"px"

          this.reOrdenar(this.primero)
        } else {
          this.primero = null;
        }
      }
    }
    reOrdenar(aux){
      const boton=document.getElementById("b1")
      while(aux.siguiente != null){
        aux.siguiente.animate.x= (boton.offsetWidth/2) - (aux.animate.disBtn/2)
        
        aux.siguiente.animate.y=aux.animate.y + aux.animate.heightBtn
        
        const p = document.getElementById("btn"+(aux.siguiente.animate.id))
        const posicion = p.cloneNode(true)
        p.parentNode.replaceChild(posicion, p)
        posicion.style.left = (aux.siguiente.animate.x).toString()+"px" //El + 50 es para incluir a la misma flecha
        posicion.style.top =(aux.siguiente.animate.y).toString()+"px"
        posicion.classList="animate__animated animate__slideInDown"
        aux=aux.siguiente
      }
    }
    //Mostrar valores de la pila
    print(dato) {
      let mostrarNodo = this.primero;
      var lista = []
      var encontrar = false;
      while (mostrarNodo) {
       
        //console.log(mostrarNodo.dato);
        lista.push(mostrarNodo.dato)
        mostrarNodo = mostrarNodo.siguiente;
      }return lista
    } 

    //Buscar Pila
    buscar(dato) {
      let mostrarNodo = this.primero;
      var encontrar = false;
      while (mostrarNodo) {
        if(mostrarNodo.dato == dato){
          encontrar = true;
          return encontrar;
        }
        mostrarNodo = mostrarNodo.siguiente;
      }
      return encontrar
    } 
    
} 
const stack = new Pila();
var categoria = "Estructura Lineal";
var nombre = "pila";
var repeticion = "false";
var animacion = "0";

function addValuePila(data){
  stack.push(data);
  console.log("-------------Nueva Pila----------------");
  console.log(stack.print());
}
function getValuePilaDelet(){
  stack.pop();
  console.log("-------------Nueva Pila----------------");
  console.log(stack.print());//
}

function getValueBuscar(data){
  console.log("se ejecuto buscar:" + stack.buscar(data))
    
}

//console.log("Ingresando valores");
//stack.push(1);
//stack.push(2);
//stack.push(3);
//stack.print();
//console.log("Sacamos ultimo de la pila: ");
//stack.pop(); //Sacamos 3
//stack.print();
function AbrirArchivoPila(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    // El texto del archivo se mostrará por consola aquí
   // console.log(event.target.result)
    let doc = JSON.parse(event.target.result);
    //console.log(doc)

    for (var key in doc) {
      //console.log('name=' + key + ' value=' + doc[key]);
      if(key=='categoria'){
          categoria = doc[key]
          console.log(categoria)
      }
      if(key=='nombre'){
          nombre = doc[key]
          console.log(nombre)
      }
      if(key=='repeticion'){
          repeticion = doc[key]
          console.log(repeticion)
      }
      if(key=='animacion'){
          animacion = doc[key]
          console.log(animacion)
      }
      if(key=='valores'){
          //console.log(doc[key].length)
          for (var k in doc[key]){
              stack.push(doc[key][k])
          }
      }
      
    }

    console.log("--------nueva pila-------------")
    console.log(stack.print());
  

  };
  
  reader.readAsText(file);
}//guardar archivo
function downloadPila(filename, text) {
  
  lista = stack.print()

  var element = document.createElement('a');
  let doc = JSON.stringify({ "categoria": categoria, 'nombre': nombre, 'repeticion':repeticion, 'animacion':animacion, 'valores': lista });
  
  //console.log(listSimple.print())
  element.setAttribute('href', 'data:json,' + doc);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


