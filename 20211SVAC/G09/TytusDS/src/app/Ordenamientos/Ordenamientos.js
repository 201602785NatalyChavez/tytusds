function ordBurburja(arreglo) {
    for (var i = (arreglo.length); i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if(arreglo[j]> arreglo[j+1]){
                var temp = arreglo[j];
                arreglo[j] = arreglo[j+1]
                arreglo[j+1] = temp;
            }
        }
    }
    return arreglo;
}

function ordBurburjaString(arreglo) {
    for (var i = (arreglo.length); i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if(arreglo[j]> arreglo[j+1]){
                var temp = arreglo[j];
                arreglo[j] = arreglo[j+1]
                arreglo[j+1] = temp;
            }
        }
    }
    return arreglo;
}

function seleccion(array){
    let pMax,aux
    for (let i = 0; i < array.length; i++) {
        pMax=i
        for (let j = i+1; j < array.length; j++) {
            if (array[pMax]>array[j]) {
                pMax=j
            }
        }
        aux=array[pMax]
        array[pMax]=array[i]
        array[i]=aux    
    }
    return array
}

function insercion(array){
    let aux
    for (let x=0;x<array.length;x++){
        aux=array[x]
        for (let y=x; y>0; y--){
            if(array[y]<array[y-1]){
                aux=array[y]
                array[y]=array[y-1]
                array[y-1]= aux
            }
        }
    }
    return array
}

function quicksort(array,inicio,fin){
    let indice
    if(inicio<fin){
        indice=partir(array,inicio,fin)
        quicksort(array,inicio,indice-1)
        quicksort(array,indice+1,fin)
    }
    return array
}

function partir(array,inicio,fin){
    let pivote=array[fin], i=inicio,temp,indicePivote
    for(let j=inicio; j<fin;j++){
        if(array[j]<pivote){
            temp=array[i]
            array[i]=array[j]
            array[j]=temp
            i++
        }
    }
    indicePivote= i
    temp=array[indicePivote]
    array[indicePivote]=array[fin]
    array[fin]=temp
    return indicePivote
}

function ordRapido(array){
    return quicksort(array,0,array.length-1)
}
function ObtenerString(array){
    let listaString = []
    let listaSuma = []
    for (k in array){
        //console.log(array[k])
        let suma = 0;
        for (l in array[k]){
            
            //console.log(array[k][l])
            letra = array[k][l]
            //console.log(letra.charCodeAt(0))
            suma = suma + letra.charCodeAt(0)
            
        } 
        //console.log(suma)
        //listaString.push({'string':array[k],'suma1':suma})
        listaString.push(suma)

    }
    return listaString
}
function compararString(var1, var2){
    let contador = 1
    let popo = []
    for (k in var1){
        //console.log(var1[k])
        for (l in var2){
            //console.log(var2[l])
            let unicode = 0;
            for(u in var2[l]){
                unicode = unicode + var2[l][u].charCodeAt(0)
            }
            if(var1[k]==unicode){
                popo.push(var2[l])
                //console.log("el valor es: "+contador+" "+ unicode + " "+var2[l])
                contador=contador+1
            }
        }
    }
    return popo
}
//lista = ["juli","daniel","miguel","che",'la',"ferggie","o"];
//NombresAscci = ObtenerString(lista);
//NombresAscciOrdenados = ordBurburja(NombresAscci);
//accion = compararString(NombresAscciOrdenados,lista);
//console.log(accion)
/////////////////////ordenamiento burbuja
var categoriaBurbuja = "Ordenamientos";
var nombreBurbuja = 'Ordenamiento Burbuja';
var repeticionBurbuja = "True";
var animacionBurbuja = "0";
var ListaOrdenada = []
var ListaSinOrdenar = []
var chekString = false;
var NombresAscci;
var NombresAscciOrdenados;
var accion;
//variables seleccion
var categoriaSeleccion = "Ordenamientos";
var nombreBurbujaSeleccion = 'Ordenamiento por seleccion';
var repeticionBurbujaSeleccion = "True";
var animacionBurbujaSeleccion = "0";
var chekStringSeleccion = false;
var NombresAscciSeleccion;
var NombresAscciOrdenadosSeleccion;
var accionSeleccion;
var ListaSinOrdenarSeleccion= [];
var ListaOrdenadaSeleccion= [];//termina var seleccion

///variables insercion
var categoriaInsercion = "Ordenamientos";
var nombreInsercion = 'Ordenamiento por Insercion';
var repeticionInsercion = "True";
var animacionInsercion = "0";
var chekStringInsercion = false;
var NombresAscciInsercion;
var NombresAscciOrdenadosInsercion;
var accionInsercion;
var ListaSinOrdenarInsercion= [];
var ListaOrdenadaInsercion= []; //terminan insercion


function AbrirOrdenamientoBurbuja(event) {
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
            ListaSinOrdenar = [];
            ListaOrdenada = [];
           if(chekString == false){
                for (var k in doc[key]){
                    // console.log(doc[key][k])
                    ListaSinOrdenar.push(doc[key][k])
                }
                ListaOrdenada = ordBurburja(ListaSinOrdenar);
                console.log(ListaOrdenada);
            }
            if(chekString == true){
                console.log("check es true")
                for (var k in doc[key]){
                    // console.log(doc[key][k])
                    ListaSinOrdenar.push(doc[key][k])
                }
                //1ro  obtengo ascci desordenado 
                NombresAscci = ObtenerString(ListaSinOrdenar);
                //2do ordeno Ascci
                NombresAscciOrdenados = ordBurburja(NombresAscci);
                //3ro  ordeno las 2 listas
                accion = compararString(NombresAscciOrdenados,ListaSinOrdenar);
                console.log(accion)
            }
        }
     } 
     

    };

    reader.readAsText(file);
}//guardar archivo

function downloadBurbuja(filename, text) {
    let ListaBurbuja;
    if(chekString == true){
        ListaBurbuja = accion;
    }
    if(chekString == false){
        ListaOrdenada = ordBurburja(ListaSinOrdenar)
        ListaBurbuja = ListaOrdenada;
    }
    
    var element = document.createElement('a');
    let doc = JSON.stringify({ "categoria": categoriaBurbuja, 'nombre': nombreBurbuja, 'repeticion':repeticionBurbuja, 'animacion':animacionBurbuja, 'valores': ListaBurbuja });
    
    //console.log(listSimple.print())
    element.setAttribute('href', 'data:json,' + doc);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function checkBox(){
    if(chekString == true){
        chekString = false;
        console.log("cambiando chek "+ chekString);
    }else{
        chekStringSeleccion = true;
        console.log("cambioando chek "+ chekString);
    }  
}
function checkBoxSeleccion(){
    if(chekStringSeleccion == true){
        chekStringSeleccion = false;
        console.log("cambiando chek "+ chekStringSeleccion);
    }else{
        chekStringSeleccion = true;
        console.log("cambioando chek "+ chekStringSeleccion);
    }  
}
function checkBoxInsercion(){
    if(chekStringInsercion == true){
        chekStringInsercion = false;
        console.log("cambiando chek "+ chekStringInsercion);
    }else{
        chekStringInsercion = true;
        console.log("cambioando chek "+ chekStringInsercion);
    }  
}
function AbrirSeleccion(event) {
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
            ListaSinOrdenarSeleccion = [];
            ListaOrdenadaSeleccion =[];
           if(chekStringSeleccion == false){
                for (var k in doc[key]){
                    // console.log(doc[key][k])
                    ListaSinOrdenarSeleccion.push(doc[key][k])
                }
                ListaOrdenadaSeleccion = seleccion(ListaSinOrdenarSeleccion);
                console.log(ListaOrdenadaSeleccion);
            }
            if(chekStringSeleccion == true){
                console.log("check es true")
                for (var k in doc[key]){
                        // console.log(doc[key][k])
                        ListaSinOrdenarSeleccion.push(doc[key][k]);
                        
                    }
                    //1ro  obtengo ascci desordenado 
                    NombresAscciSeleccion = ObtenerString(ListaSinOrdenarSeleccion);
                    //2do ordeno Ascci
                    NombresAscciOrdenadosSeleccion = seleccion(NombresAscciSeleccion);
                    //console.log(NombresAscciOrdenadosSeleccion)
                    //3ro  ordeno las 2 listas
                    accionSeleccion = compararString(NombresAscciOrdenadosSeleccion,ListaSinOrdenarSeleccion);
                    console.log(accionSeleccion)
                }
            }  
        }
      
     

    };

    reader.readAsText(file);
}//guardar archivo
function downloadSeleccion(filename, text) {
    let ListaSeleccion;
    if(chekString == true){
        ListaSeleccion = accionSeleccion;
    }
    if(chekString == false){
        ListaOrdenadaSeleccion = seleccion(ListaSinOrdenarSeleccion)
        ListaSeleccion = ListaOrdenadaSeleccion;
    }
    
    var element = document.createElement('a');
    let doc = JSON.stringify({ "categoria": categoriaSeleccion, 'nombre': nombreBurbujaSeleccion, 'repeticion':repeticionBurbujaSeleccion, 'animacion':animacionBurbujaSeleccion, 'valores': ListaSeleccion });
    
    //console.log(listSimple.print())
    element.setAttribute('href', 'data:json,' + doc);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function AbrirInsercion(event) {
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
            ListaSinOrdenarInsercion = [];
            ListaOrdenadaInsercion = [];
           if(chekStringInsercion == false){
                for (var k in doc[key]){
                    // console.log(doc[key][k])
                    ListaSinOrdenarInsercion.push(doc[key][k])
                }
                ListaOrdenadaInsercion = insercion(ListaSinOrdenarInsercion);
                console.log(ListaOrdenadaInsercion);
            }
            if(chekStringInsercion == true){
                console.log("check es true")
                for (var k in doc[key]){
                    // console.log(doc[key][k])
                    ListaSinOrdenarInsercion.push(doc[key][k])
                }
                //1ro  obtengo ascci desordenado 
                NombresAscciInsercion = ObtenerString(ListaSinOrdenarInsercion);
                //2do ordeno Ascci
                NombresAscciOrdenadosInsercion = insercion(NombresAscciInsercion);
                //3ro  ordeno las 2 listas
                accionInsercion = compararString(NombresAscciOrdenadosInsercion,ListaSinOrdenarInsercion);
                console.log(accionInsercion)
            }
        }
     } 
     

    };

    reader.readAsText(file);
}//guardar archivo
function downloadInsercion(filename, text) {
    let ListaBurbujaInsercion;
    if(chekStringInsercion == true){
        ListaBurbujaInsercion = accionInsercion;
    }
    if(chekStringInsercion == false){
        ListaOrdenadaInsercion = insercion(ListaSinOrdenarInsercion)
        ListaBurbujaInsercion = ListaOrdenadaInsercion;
    }
    
    var element = document.createElement('a');
    let doc = JSON.stringify({ "categoria": categoriaInsercion, 'nombre': nombreInsercion ,'repeticion':repeticionInsercion, 'animacion':animacionInsercion, 'valores': ListaBurbujaInsercion });
    
    //console.log(listSimple.print())
    element.setAttribute('href', 'data:json,' + doc);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

lista = [10,9,8,7,6,5,4,3,2,11,12,1];
console.log(insercion(lista))