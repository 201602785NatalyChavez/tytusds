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
  strMessageBuscar:string;
  showMessageBuscar:boolean;
  valorNodoInsertar:string;
  public showMessage=false;
  esCarga:boolean;
  
  bst = new BST()
  valoresinsertados = []
  x:string
  public network:any

  strCarga:string
  velocidadAnimacion:number
  opcionRepeticiones:string
  opcionOperar:string
  listaEnlJSon:string
  listaEnlazada: any;
  dynamicDownload: any;
  idTipoLista: number;
  

  constructor() { }

  ngOnInit(): void {
    this.listaEnlJSon = ""
    this.opcionRepeticiones = "true"
    this.opcionOperar='Inicio';
    this.esCarga=false;
    
    
  }
 

  Iniciar(){
      this.listaEnlJSon='';
      this.showMessage=false;
      this.opcionRepeticiones="true";
    
  }
  
  Insertar(){
    
    if(this.x.charCodeAt(0)==8) { 
      console.log("No hay nada")
    } else if(this.x.charCodeAt(0)>=48 && this.x.charCodeAt(0)<=57) { 
      this.bst.insert(parseInt(this.x));
    } else{ 
      this.bst.string = true
      this.bst.insert(this.x)
      this.bst.string = false
    }
  
    console.log("RAIZ",this.bst.root)
    
    this.x = ''
    
    console.log("----------------------")
    
    this.x = '' 
    this.visit()
    this.listaEnlJSon = JSON.stringify(this.bst);
  }
  clickAgregarNodo() {
    if(this.valorNodoInsertar!=null && this.valorNodoInsertar!=''){
      this.agregarNodo(this.valorNodoInsertar, false);
    }
  }
  agregarNodo(valorInsertar:string, esCarga:boolean) {
    let insertaValor=true;
    this.showMessage=false;
   
    if(this.idTipoLista>=1&&this.idTipoLista<=4){
      if(this.opcionRepeticiones=="false"){
        if(this.listaEnlazada.search(valorInsertar)){
          this.showMessage=true;
          insertaValor=false;         }       }
      if(insertaValor){ 
        if(this.opcionOperar=='Inicio'){
          this.listaEnlazada.agregarAlInicio(valorInsertar);
        }
        else{
          this.listaEnlazada.agregarAlFinal(valorInsertar);
        }
      }
    } 
    else if(this.idTipoLista==5){
      if(this.opcionRepeticiones=="false"){
        if(this.listaEnlazada.search(valorInsertar)){
          this.showMessage=true;
          insertaValor=false;         }       }
        if(insertaValor) this.listaEnlazada.push(valorInsertar);
    }
  
  }
  Eliminar(){
    console.log("IMPRIMIENDO EL ELIMINAR")
    if(this.x.charCodeAt(0)==8) { 
      console.log("No hay nada")
    } else if(this.x.charCodeAt(0)>=48 && this.x.charCodeAt(0)<=57) { 
      this.bst.eliminar(parseInt(this.x));
    } else{ 
      this.bst.string = true
      this.bst.eliminar(this.x)
      this.bst.string = false
    }
  
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
              direction: 'UD',        
              sortMethod: 'directed',  
              shakeTowards: 'roots'                        
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
   
    
    var nodes =[
        {id: 1, label: 'Node 1', title: 'I am node 1!'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'},
        {id: 6, label: 'Node 6'}
    ];

   
    this.bst.dot = '{'
    this.bst.dotgen(this.bst.root)
    this.bst.dot += '}'
    var DOTstring = this.bst.dot
    var parsedData = vis.parseDOTNetwork(DOTstring);
 
    this.bst.dot = ''
  

    var edges = [
        {from: 1, to: 2},
        {from: 1, to: 3},
        {from: 2, to: 4},
        {from: 2, to: 5},
        {from: 5, to: 6}
    ];
 
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

     
           this.bst.datagraph = [];

       
           this.bst.edgegraph = [];

        
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
                    direction: 'UD',        
                    sortMethod: 'directed', 
                    shakeTowards: 'roots'                        
            },
            },                        
        };
           window.vis = require('vis-network/standalone');
         
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
      valorStrNodo=valorStrNodo.toString();
      this.valoresinsertados.push(valorStrNodo)
      if(this.valoresinsertados.includes(valorStrNodo) && this.opcionRepeticiones == 'false'){
        console.log("El valor",valorStrNodo,"está repetido")
      }else{
        this.x = valorStrNodo
        this.Insertarcarga()
        this.esCarga=true;

      
      }
    }
    this.visit()
    this.valoresinsertados = []
    
  }
  Insertarcarga(){
   
    if(this.x.charCodeAt(0)==8) { 
      console.log("No hay nada")
    } else if(this.x.charCodeAt(0)>=48 && this.x.charCodeAt(0)<=57) { 
      this.bst.insert(parseInt(this.x));
    } else{ 
      this.bst.string = true
      this.bst.insert(this.x)
      this.bst.string = false
    }
  
    console.log("RAIZ",this.bst.root)
    
    this.listaEnlJSon = JSON.stringify(this.bst);
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
  clickBuscarNodo(){
    this.showMessageBuscar= false;
    if(this.x!=null && this.x!=''){
      if(this.listaEnlJSon.search(this.x)){
        this.strMessageBuscar="Si se encontro el dato";        } 
        else  this.strMessageBuscar="No se encontro el dato"; 
        this.showMessageBuscar= true;
      this.x=''; 
    }
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
