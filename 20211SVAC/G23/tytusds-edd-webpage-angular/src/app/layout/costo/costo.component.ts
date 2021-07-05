import { query } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, Renderer2, ComponentFactoryResolver} from '@angular/core';
import { of, Subscription } from 'rxjs';
declare var vis:any

import { Costo } from './claseCosto'

@Component({
  selector: 'app-costo',
  templateUrl: './costo.component.html',
  styleUrls: ['./costo.component.css']
})
export class CostoComponent implements OnInit {
  @ViewChild("siteConfigNetwork") networkContainer: ElementRef;
  public network:any
  valor:any
  hacia:any
  distancia:number
  valorbuscar:any
  haciabuscar:any
  fileContent:string = ''
  strCarga:string = ''
  velocidadAnimacion:string = ''

  costo = new Costo()
  
  constructor() { }

  ngOnInit(): void {

  }

  Insertar(){
    this.costo.Insertar('A','B',5)
    this.costo.Insertar('A','C',6)
    this.costo.Insertar('B','A',5)
    this.costo.Insertar('B','C',6)
    this.costo.Insertar('B','D',3)
    this.costo.Insertar('B','E',5)
    this.costo.Insertar('C','A',6)
    this.costo.Insertar('C','B',6)
    this.costo.Insertar('C','E',2)
    this.costo.Insertar('D','B',3)
    this.costo.Insertar('D','E',3)
    this.costo.Insertar('D','F',4)
    this.costo.Insertar('E','B',5)
    this.costo.Insertar('E','C',2)
    this.costo.Insertar('E','D',3)
    this.costo.Insertar('E','F',1)
    this.costo.Insertar('F','D',4)
    //this.costo.Insertar('F','E',1)

    if(this.valor == null || this.hacia == null || this.distancia == null){
      alert("No ha ingresado alguna de las 2 coordenadas, o el valor")
    }else{
      //console.log(this.coordenadax)
      //console.log(this.coordenaday)
      this.costo.Insertar(this.valor,this.hacia,this.distancia)
      //this.visit()
      console.log("------------------------")
    }
  }

  HacerGrafo(){
    if(this.valorbuscar == null || this.haciabuscar == null ){
      alert("No ha ingresado alguna de las 2 coordenadas, o el valor")
    }else{
      //console.log(this.coordenadax)
      //console.log(this.coordenaday)
      this.visit()
      console.log("------------------------")
    }

  }
  Eliminar(){
    if(this.valor == null || this.hacia == null || this.distancia == null){
      alert("No ha ingresado alguna de las 2 coordenadas, o el valor")
    }else{
      //console.log(this.coordenadax)
      //console.log(this.coordenaday)
      this.costo.Insertar(this.valor,this.hacia,this.distancia)
      //this.visit()
      console.log("------------------------")
    }

  }

  Actualizar(){
    if(this.valor == null || this.hacia == null || this.distancia == null){
      alert("No ha ingresado alguna de las 2 coordenadas, o el valor")
    }else{
      //console.log(this.coordenadax)
      //console.log(this.coordenaday)
      this.costo.Insertar(this.valor,this.hacia,this.distancia)
      //this.visit()
      console.log("------------------------")
    }
  }

  Buscar(){
    if(this.valor == null || this.hacia == null || this.distancia == null){
      alert("No ha ingresado alguna de las 2 coordenadas, o el valor")
    }else{
      //console.log(this.coordenadax)
      //console.log(this.coordenaday)
      this.costo.Insertar(this.valor,this.hacia,this.distancia)
      //this.visit()
      console.log("------------------------")
    }
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
    //this.costo.costo('Start','END')
    var DOTstring = this.costo.costo(this.valorbuscar,this.haciabuscar)
    //var DOTstring = this.costo.costo('A','F')
    var parsedData = vis.parseDOTNetwork(DOTstring)

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
  //console.log(this.strCarga);
  let strIntoObj = JSON.parse(this.strCarga);
  this.costo = new Costo()    
  if(strIntoObj.animacion!=undefined) this.velocidadAnimacion = strIntoObj.animacion;
  for (let valorStrNodo of strIntoObj.valores) {
    //console.log("VALOR STR NODO",valorStrNodo)
    console.log("-------------------------------",valorStrNodo)
    console.log("TAAÑO DE ARREGLO",valorStrNodo.aristas.length)
    if(valorStrNodo.aristas.length != 1){
      for(let i = 0 ; i < valorStrNodo.aristas.length ; i++){
        console.log("IF")
        console.log("VALOR",valorStrNodo.vertice,"Arista",valorStrNodo.aristas[i].arista,"DISTANCIA",valorStrNodo.aristas[i].distancia)
        this.costo.Insertar(valorStrNodo.vertice,valorStrNodo.aristas[i].arista,valorStrNodo.aristas[i].distancia)
      }
    }else{
      console.log("ELSE")
      console.log("VALOR",valorStrNodo.vertice,"Arista",valorStrNodo.aristas[0].arista,"DISTANCIA",valorStrNodo.aristas[0].distancia)
      this.costo.Insertar(valorStrNodo.vertice,valorStrNodo.aristas[0].arista,valorStrNodo.aristas[0].distancia)
    }
    //this.costo.Insertar(valorStrNodo.valor,valorStrNodo.indices[0],valorStrNodo.indices[1])
    console.log("TAAÑO DE ARREGLO AL FINAL",valorStrNodo.aristas.length)
    if(valorStrNodo.aristas.length == 0){
      console.log("EENTROoooooooooooooooooooooooooooooooooooooooooooOOOOOOOOOOOOOOOOOO")
      this.costo.Insertar(valorStrNodo.vertice,'!!!!' ,500000)
    }
    valorStrNodo=valorStrNodo.toString();
  }
  
  //this.actualizarJsonSalida()
}

}
