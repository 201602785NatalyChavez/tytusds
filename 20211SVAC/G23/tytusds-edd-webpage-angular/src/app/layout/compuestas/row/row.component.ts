import { query } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, Renderer2, ComponentFactoryResolver} from '@angular/core';
import { of, Subscription } from 'rxjs';

import { Matriz } from '../clase-matriz'
import { Jsonrow } from './row.json';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']

})
export class RowComponent implements OnInit {
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
  listaEnlJSon: string;

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
      this.actualizarJsonSalida()
      console.log("------------------------")
    }
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
      this.actualizarJsonSalida()
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
      this.actualizarJsonSalida()
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
    if(strIntoObj.animacion!=undefined) this.velocidadAnimacion = strIntoObj.animacion;   
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
    this.actualizarJsonSalida()
  }
  actualizarJsonSalida(){
    let arreglo= [ ]
        let temp = this.matriz.lista_H.primero
        arreglo.push(temp.valor)
        temp = temp.siguiente
        while(temp != null&&temp != this.matriz.lista_H.primero){
            arreglo.push(temp.valor)
            temp = temp.siguiente
        }
    let json= new Jsonrow("Estructura Compuesta","Row/Column Major",
    this.velocidadAnimacion.toString(), arreglo);
    this.listaEnlJSon = JSON.stringify(json,undefined,4);
  }
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }
  downloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'ColumnRowMajor.json',
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
