import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, Renderer2, ComponentFactoryResolver} from '@angular/core';
import { of, Subscription } from 'rxjs';
declare var vis:any
import { AVL } from './clas-avl';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-avl',
  templateUrl: './avl.component.html',
  styleUrls: ['./avl.component.css']
  
  
})
export class AvlComponent implements OnInit {
  @ViewChild("siteConfigNetwork") networkContainer: ElementRef;
  bst = new AVL()
  x:string
  public network:any

  strCarga:string
  velocidadAnimacion:number
  opcionRepeticiones:string
  opcionOperar:string
  listaEnlJSon:string
  barChartLabels: string[];
  barChartData: any;
  esCarga:boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    
  }

  Insertar(){
    
    if(this.x.charCodeAt(0)==8) { 
      console.log("No hay nada")
    } else if(this.x.charCodeAt(0)>=48 && this.x.charCodeAt(0)<=57) { 
      this.bst.put(parseInt(this.x));
    } else{ 
      this.bst.string = true
      this.bst.put(this.x)
      this.bst.string = false
    }
    
    
    console.log("RAIZ",this.bst.root)
    
    this.x = ''
    
    console.log("----------------------")
    
    this.x = null
    this.visit()
    this.listaEnlJSon = JSON.stringify(this.bst);
  }

  Eliminar(){
    console.log("IMPRIMIENDO EL ELIMINAR")
    if(this.x.charCodeAt(0)==8) { 
      console.log("No hay nada")
    } else if(this.x.charCodeAt(0)>=48 && this.x.charCodeAt(0)<=57) {
      this.bst.delete(parseInt(this.x));
    } else{ 
      this.bst.string = true
      this.bst.delete(this.x)
      this.bst.string = false
    }
    
    console.log(this.x)
    this.x = ''
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
    
    console.log("RAIz",this.bst.root)
    console.log("DOT",this.bst.dot)
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
    
    return treeData;
  }

  drawSvgNetwork() {
    var nodes = null;
     var edges = null;
     var network = null;

     var DIR = 'img/refresh-cl/';
     var LENGTH_MAIN = 150;
     var LENGTH_SUB = 50;

     
          nodes = []
           
           edges = []
           
           var data = {
               nodes: nodes,
               edges: edges
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
    let strIntoObj = JSON.parse(this.strCarga);
    
    for(let i =0;i<strIntoObj.valores.length;i++){
      this.x= strIntoObj.valores[i].toString();
      this.Insertar();
    }
   
  }
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }
  downloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'Avl.json',
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


