import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, Renderer2, ComponentFactoryResolver} from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { Flecha } from '../impl-canvas/flecha';
import { FlechaCompuesta } from '../impl-canvas/flecha-compuesta';
import { RectanguloNodo } from '../impl-canvas/rectangulo-nodo';
import { Network, DataSet } from 'vis';
import { of, Subscription } from 'rxjs';
declare var vis:any

import BST from './clase-arbol'
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-abb',
  templateUrl: './abb.component.html',
  styleUrls: ['./abb.component.css']
})
export class AbbComponent implements OnInit {
  @ViewChild("siteConfigNetwork") networkContainer: ElementRef;
  //@ViewChild("svgNetwork") svgNetworkContainer: ElementRef;
  
  bst = new BST()
  valoresinsertados = []
  x:string
  public network:any

  strCarga:string
  velocidadAnimacion:number
  opcionRepeticiones:string
  opcionOperar:string
  listaEnlJSon:string
  
 // nombre:string = "Maria"
  //apellido:string = "Perez"
  //alumno:any = {
    //nombre: "Carlos",
    //apellido:"Najera",
    //edad:26
  //}
  //inputNuevo:string = "Hola soy un nuevo input"
  //correo:string = ''
  //password:string = ''
  constructor() { }

  ngOnInit(): void {
    this.listaEnlJSon = ""
    this.opcionRepeticiones = "true"
    
  }

  Iniciar(){
    //console.log(this.correo)
    //console.log(this.password)
  }
  
  Insertar(){
    //console.log("IMPRIMIENDO EL INSERTAR")
    //if( typeof this.x)     
    //this.bst.put(y)
    if(this.x.charCodeAt(0)==8) { // backspace.
      console.log("No hay nada")
    } else if(this.x.charCodeAt(0)>=48 && this.x.charCodeAt(0)<=57) { // is a number.
      this.bst.insert(parseInt(this.x));
    } else{ // other keys.
      this.bst.string = true
      this.bst.insert(this.x)
      this.bst.string = false
    }
    //this.bst.insert(y)
    //console.log(this.x)
    console.log("RAIZ",this.bst.root)
    //console.log("X no vale NADA")
    this.x = ''
    //this.x = this.bst.inOrder(this.bst.root,this.x)
    //this.bst.inOrder(this.bst.root)
    console.log("----------------------")
    //console.log("IMPRIMIENDO EL RETORNO DE InOrder",this.x)
    this.x = '' 
    this.visit()
  }

  Eliminar(){
    console.log("IMPRIMIENDO EL ELIMINAR")
    if(this.x.charCodeAt(0)==8) { // backspace.
      console.log("No hay nada")
    } else if(this.x.charCodeAt(0)>=48 && this.x.charCodeAt(0)<=57) { // is a number.
      this.bst.eliminar(parseInt(this.x));
    } else{ // other keys.
      this.bst.string = true
      this.bst.eliminar(this.x)
      this.bst.string = false
    }
    //this.bst.eliminar(this.x)
    console.log(this.x)
    this.x = null
    this.visit()
  }

  visit(){
    this.drawSvgNetwork()
    var treeData = this.getTreeData()
    this.loadVisTree(treeData)
  }

  loadVisTree(treedata) {
    var options = {
      nodes: {
          widthConstraint: 100,
      },        
      layout: {
          hierarchical: {
              levelSeparation: 100,
              nodeSpacing: 100,
              parentCentralization: true,
              direction: 'UD',        // UD, DU, LR, RL
              sortMethod: 'directed',  // hubsize, directed
              shakeTowards: 'roots'  // roots, leaves                        
      },
      },                        
  };
    var container = this.networkContainer.nativeElement;
    this.network = new vis.Network(container, treedata, options);

    var that = this;
    this.network.on("hoverNode", function (params) {                  
      console.log('hoverNode Event:', params);
    });
    this.network.on("blurNode", function(params){
      console.log('blurNode event:', params);      
    });
  }


  getTreeData() {  
    //nodos.push(5)
    
    //nodos = this.bst.dotgenarray(this.bst.root)
    //this.bst.dotgenarray(this.bst.root)
    
    //nodos.push(this.bst.dotgenarray(this.bst.root,prueba))
    //nodos.push({id:10, label:'X10'})
    //console.log(nodos )
    
    var nodes =[
        {id: 1, label: 'Node 1', title: 'I am node 1!'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'},
        {id: 6, label: 'Node 6'}
    ];

    // create an array with edges
    this.bst.dot = '{'
    this.bst.dotgen(this.bst.root)
    this.bst.dot += '}'
    var DOTstring = this.bst.dot
    var parsedData = vis.parseDOTNetwork(DOTstring);
    //console.log("PARSED",parsedData)
    //console.log(this.bst.root)
    //console.log(this.bst.dot)
    this.bst.dot = ''
    //console.log("PARSED",parsedData)

    var edges = [
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 2, to: 4},
        {from: 2, to: 5},
        {from: 5, to: 6}
    ];
    //this.bst.inOrder(this.bst.root)
    //this.bst.dotgenarray(this.bst.root)
    //console.log("X",nodes)
    //console.log("Y",this.bst.datagraph)
    //console.log("X1",edges)
    //console.log("Y1",this.bst.edgegraph)
    var treeData = {
      nodes:  parsedData.nodes,
      edges: parsedData.edges
    };
    this.bst.datagraph = []
    this.bst.edgegraph = []
    return treeData;
  }

  drawSvgNetwork() {
    var nodes = null;
     var edges = null;
     var network = null;

     var DIR = 'img/refresh-cl/';
     var LENGTH_MAIN = 150;
     var LENGTH_SUB = 50;

     /*var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="390" height="65">' +
         '<rect x="0" y="0" width="100%" height="100%" fill="#7890A7" stroke-width="20" stroke="#ffffff" ></rect>' +
         '<foreignObject x="15" y="10" width="100%" height="100%">' +
         '<div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial; font-size:30px">' +
         ' <em>I</em> am' +
         '<span style="color:white; text-shadow:0 0 20px #000000;">' +            
           ' HTML in SVG!</span>' +

         // * THIS IMAGE IS NOT RENDERING * 
         '<i style="background-image: url(https://openclipart.org/download/280615/July-4th-v2B.svg);"></i>' +

         '</div>' +
         '</foreignObject>' +
         '</svg>';


     var url = "data:image/svg+xml;charset=utf-8,"+ encodeURIComponent(svg);*/

// Create a data table with nodes.
           this.bst.datagraph = [];

           // Create a data table with links.
           this.bst.edgegraph = [];

           //nodes.push({id: 1, label: 'Get HTML', image: url, shape: 'image'});
           //nodes.push({id: 2, label: 'Using SVG', image: url, shape: 'image'});
           //edges.push({from: 1, to: 2, length: 300});

           // create a network
          // var container = this.svgNetworkContainer.nativeElement;            

           //var container = document.getElementById('mynetwork');
           var data = {
               nodes: this.bst.datagraph,
               edges: this.bst.edgegraph
           };
           var options = {
            nodes: {
                widthConstraint: 20,
            },        
            layout: {
                hierarchical: {
                    levelSeparation: 100,
                    nodeSpacing: 100,
                    parentCentralization: true,
                    direction: 'UD',        // UD, DU, LR, RL
                    sortMethod: 'directed',  // hubsize, directed
                    shakeTowards: 'roots'  // roots, leaves                        
            },
            },                        
        };
           window.vis = require('vis-network/standalone');
           //network = new vis.Network(container, data, options);
          // this.network = new vis.Network(container, data, options);
 } 

 fileContent: string = '';

  public cargarArchivo(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result.toString();
    }
    fileReader.readAsText(file);
    this.strCarga=self.fileContent;
  }

  clickCargar(){
    this.strCarga=this.fileContent;
    console.log(this.strCarga);
    let strIntoObj = JSON.parse(this.strCarga);
    console.log(strIntoObj);
    this.bst = new BST()
    if(strIntoObj.animacion!=undefined&&strIntoObj.animacion!=null){
      this.velocidadAnimacion=strIntoObj.animacion;
    }
    if(strIntoObj.repeticion!=undefined){
      this.opcionRepeticiones=strIntoObj.repeticion;
    }
    if(strIntoObj.posicion!=undefined){
      if(strIntoObj.posicion=='Inicio'||strIntoObj.posicion=='Fin')
        this.opcionOperar=strIntoObj.posicion;
    }
    for (let valorStrNodo of strIntoObj.valores) {
      this.valoresinsertados.push(valorStrNodo)
      if(this.valoresinsertados.includes(valorStrNodo) && this.opcionRepeticiones == 'false'){
        console.log("El valor",valorStrNodo,"está repetido")
      }else{
        this.x = valorStrNodo
        this.Insertarcarga()

      
      }
    }
    this.visit()
    this.valoresinsertados = []
    
  }
  Insertarcarga(){
    //console.log("IMPRIMIENDO EL INSERTAR")
    //if( typeof this.x)     
    //this.bst.put(y)
    if(this.x.charCodeAt(0)==8) { // backspace.
      console.log("No hay nada")
    } else if(this.x.charCodeAt(0)>=48 && this.x.charCodeAt(0)<=57) { // is a number.
      this.bst.insert(parseInt(this.x));
    } else{ // other keys.
      this.bst.string = true
      this.bst.insert(this.x)
      this.bst.string = false
    }
    //this.bst.insert(y)
    //console.log(this.x)
    console.log("RAIZ",this.bst.root)
    //console.log("X no vale NADA")
    this.x = ''
  }


  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }
  downloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'ABB.json',
        text: res
      });
    });
  }
  fakeValidateUserData() {
    return of(this.listaEnlJSon);
  }
  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
    }) {
      if (!this.setting.element.dynamicDownload) {
        this.setting.element.dynamicDownload = document.createElement('a');
      }
      const element = this.setting.element.dynamicDownload;
      const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
      element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
      element.setAttribute('download', arg.fileName);
      var event = new MouseEvent("click");
      element.dispatchEvent(event);
    }

}
