import { query } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, Renderer2, ComponentFactoryResolver} from '@angular/core';
import { of, Subscription } from 'rxjs';

import {Matriz} from '../clase-matriz'

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css']
})
export class MatricesComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  matriz = new Matriz()
  canvaswidth:number = 100
  canvasheight:number = 100
  ctx : CanvasRenderingContext2D
  ctxfont : CanvasRenderingContext2D
  antizquierda : number
  antiarriba : number
  sigabajo : number
  sigderecha : number
  flechah = []
  flechav = []
  valor:any
  coordenadax:number
  coordenaday:number
  yaingresadosx = []
  yaingresadosy = []
  strCarga:string
  velocidadAnimacion:string
  opcionRepeticiones:string
  valorStrNodo:any
  valoresinsertados:any

  constructor() { }

  ngOnInit(): void {
  }

  Insertar(){
    //if(this.coordenadax || this.coordenaday )
    if(this.coordenaday == null || this.coordenadax == null){
      alert("No ha ingresado alguna de las 2 coordenadas")
    }else{
      console.log(this.coordenadax)
      console.log(this.coordenaday)
      this.ctx = this.canvas.nativeElement.getContext('2d')
      this.ctx.fillStyle = "whitesmoke";
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.beginPath();
      
      this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.ctx.font= "bold italic 10px Times New Roman"
      this.matriz.insertar(this.valor,this.coordenadax,this.coordenaday)
      this.matriz.imprimirH(this.ctx)
      this.matriz.imprimirV(this.ctx)
      console.log("------------------------")
    }
  }
  Insertar2(){
    this.ctx.fillStyle = "whitesmoke";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.beginPath();
    this.ctx = this.canvas.nativeElement.getContext('2d')
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.ctx.font= "bold italic 10px Times New Roman"
    this.matriz.insertar(this.valor,this.coordenadax,this.coordenaday)
    this.matriz.imprimirH(this.ctx)
    this.matriz.imprimirV(this.ctx)
    console.log("------------------------")
  }
  
  Eliminar(){
    if(this.coordenaday == null || this.coordenadax == null){
      alert("No ha ingresado alguna de las 2 coordenadas")
    }else{
      this.ctx = this.canvas.nativeElement.getContext('2d')
      this.ctx.fillStyle = "whitesmoke";
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.beginPath();
      this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.ctx.font= "bold italic 10px Times New Roman"
      this.matriz.eliminar(this.coordenadax,this.coordenaday)
      this.matriz.imprimirH(this.ctx)
      this.matriz.imprimirV(this.ctx)
      console.log("------------------------")
    }
    
  }
  
  Actualizar(){
    if(this.coordenaday == null || this.coordenadax == null){
      alert("No ha ingresado alguna de las 2 coordenadas")
    }else{
      this.ctx = this.canvas.nativeElement.getContext('2d')
      this.ctx.fillStyle = "whitesmoke";
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.beginPath();
      this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.ctx.font= "bold italic 10px Times New Roman"
      this.matriz.actualizar(this.valor,this.coordenadax,this.coordenaday)
      this.matriz.imprimirH(this.ctx)
      this.matriz.imprimirV(this.ctx)
      console.log("------------------------")
    }
  }

  Buscar(){
    if(this.coordenaday == null || this.coordenadax == null){
      alert("No ha ingresado alguna de las 2 coordenadas")
    }else{
      this.ctx.fillStyle = "whitesmoke";
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.ctx.beginPath();
      this.ctx = this.canvas.nativeElement.getContext('2d')
      this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.ctx.font= "bold italic 10px Times New Roman"
      //this.ctx.fillStyle ="green"
      this.matriz.buscar(this.coordenadax,this.coordenaday)
      this.matriz.imprimirH(this.ctx)
      this.matriz.imprimirV(this.ctx)
    }
    
  }
  
  drawCanvas(){
    //this.ctx = this.canvas.nativeElement.getContext('2d');

   /* this.matriz.insertar(0,0,0)
    
    
    this.matriz.insertar(0,0,0)
    
    this.matriz.insertar(0,0,0)
    
    this.matriz.insertar(1,1,0)
    this.matriz.insertar(2,1,1)
    this.matriz.insertar(3,2,1)
    this.matriz.insertar(4,2,2)
    //this.matriz.insertar(5,2,3)
    this.matriz.insertar(6,2,4)
    this.matriz.insertar(7,2,5)
    this.matriz.insertar(8,3,1)
    this.matriz.insertar(9,5,3)
    this.matriz.insertar(10,5,5)
    this.matriz.insertar(100,0,5)
    this.matriz.insertar(200,1,8)
    this.matriz.insertar(200,0,1)
    this.matriz.insertar(200,0,2)
    this.matriz.insertar(10,2,0)
    this.matriz.insertar(100,5,0)
    this.matriz.insertar(111,8,0)*/
   // if(this.matriz.estaVaciaH() != false) tamH = this.matriz.obtenerTamH()

    //if(this.matriz.estaVaciaV() != false) tamV = this.matriz.obtenerTamV()

    //let tamH = this.bst.obtenerTamH()
    //this.canvaswidth = 
    //let tamV = this.bst.obtenerTamV()
    //let query = document.querySelector('#mynetwork')
    let c = document.getElementById('mycanvas')
    this.ctx = this.canvas.nativeElement.getContext('2d')
    
    //this.ctxfont = this.canvas.nativeElement.getContext('2d')
    this.matriz.imprimirH(this.ctx)
    this.matriz.imprimirV(this.ctx)
    
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
    this.matriz = new Matriz()    
    for (let valorStrNodo of strIntoObj.valores) {
      //console.log(valorStrNodo)
      //console.log("VALOR",valorStrNodo.valor,"x",valorStrNodo.indices[0],"Y",valorStrNodo.indices[1])
      
      this.matriz.insertar(valorStrNodo.valor,valorStrNodo.indices[0],valorStrNodo.indices[1])
      valorStrNodo=valorStrNodo.toString();
      this.ctx = this.canvas.nativeElement.getContext('2d')
      //this.valoresinsertados.push(valorStrNodo)
    }
    this.matriz.imprimirH(this.ctx)
    this.matriz.imprimirV(this.ctx)
  }



}
