import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, Renderer2, ComponentFactoryResolver} from '@angular/core';
import { of, Subscription } from 'rxjs';
declare var vis:any
import { Merkle } from './clase-arbol'



@Component({
  selector: 'app-merkle',
  templateUrl: './merkle.component.html',
  styleUrls: ['./merkle.component.css']
})
export class MerkleComponent implements OnInit {
  @ViewChild("siteConfigNetwork") networkContainer: ElementRef;
  bst = new Merkle()
  x:string
  public network:any
  valores:number = 0
  public showMessage=false;
  strMessageBuscar:string;
  showMessageBuscar:boolean;

  strCarga:string
  velocidadAnimacion:number
  opcionRepeticiones:string
  opcionOperar:string
  listaEnlJSon:string
  valoresinsertados: any;
  esCarga: boolean;
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
      this.bst.add(parseInt(this.x));
      this.valores += 1
    } else{ 
      this.bst.string = true
      this.bst.add(this.x)
      this.bst.string = false
      this.valores += 1
    }
    
    
   
    this.x = ''
    
    console.log("----------------------")
   
    this.x = '' 
    this.visit()
    console.log("TOPHASH",this.bst.tophash)
  
    this.listaEnlJSon = JSON.stringify(this.bst);
  }

  visit(){
    if((this.valores % 2) == 0){
      this.drawSvgNetwork()
      var treeData = this.getTreeData()
      this.loadVisTree(treeData)
    }
  }

  loadVisTree(treedata) {
    var options = {
      nodes: {
          widthConstraint: 80,
      },        
      layout: {
          hierarchical: {
              parentCentralization: true,
              direction: 'DU',        
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

    
    this.bst.auth()
    this.bst.dot = '{node [shape=box];'
    this.bst.dotgen(this.bst.tophash)
    this.bst.dot += '}'
    var DOTstring = this.bst.dot
    var parsedData = vis.parseDOTNetwork(DOTstring);
  

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
                widthConstraint: 80,
            },        
            layout: {
                hierarchical: {
                    parentCentralization: true,
                    direction: 'DU',      
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
  Insertarcarga() {
    if(this.x.charCodeAt(0)==8) { 
      console.log("No hay nada")
    } else if(this.x.charCodeAt(0)>=48 && this.x.charCodeAt(0)<=57) { 
      this.bst.add(parseInt(this.x));
    } else{ 
      this.bst.string = true
      this.bst.add(this.x)
      this.bst.string = false
    }
  
    console.log("RAIZ",this.bst.root)
    
    this.listaEnlJSon = JSON.stringify(this.bst);
    this.x = ''
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

  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }

  downloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'Merkle.json',
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
