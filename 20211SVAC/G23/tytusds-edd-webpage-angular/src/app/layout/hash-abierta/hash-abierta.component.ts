import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { of } from 'rxjs';
import { routerTransition } from '../../router.animations';
import { TablaHashAbierta } from './impl/tabla-hash-abierta';
import { TableroAbierta } from './impl/tablero-abierta';
import { JsonNodoHashAbierta } from './impl/hash-cerrada-json';
import { NodoHashAbierta } from './impl/nodo-hash-abierta';
@Component({
  selector: 'app-hash-abierta',
  templateUrl: './hash-abierta.component.html',
  styleUrls: ['./hash-abierta.component.css'],
  animations: [routerTransition()]
})
export class HashAbiertaComponent implements OnInit {
  ctx: CanvasRenderingContext2D;
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  valorTamanio:string;
  valorNodoInsertar:string;
  valorActualizar:string;
  valorActualizarNuevo:string;
  opcionFuncionHash:string;
  opcionPruebaHash:string;
  valorMinRehashing:string;
  valorMaxRehashing:string;
  colorFondoCanvas='black';
  colorLineas='cyan';
  velocidadAnimacion=10;
  windowWidth:number = window.innerWidth;
  windowHeight:number = window.innerHeight;
  tablaHashAbierta:TablaHashAbierta;
  showMessage=false;
  strMessage="";
  nodos=[];
  requestId;
  intervalId;
  altoNodo=50;
  anchoNodo=100;
  tablero:TableroAbierta;
  strHashCerradaJson:string;
  fileContent:string;
  strCarga:string;
  esCarga:boolean;

  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.inicializarVariables();  
    this.borrarCanvas();
    this.valorTamanio="16";
    this.clickActualizarTamanio();
  }
  inicializarVariables(){
    //this.ctx.canvas.width=this.windowWidth-200;
    this.valorNodoInsertar="";
    this.valorActualizar="";
    this.valorActualizarNuevo="";
    this.opcionFuncionHash="Division";
    this.opcionPruebaHash="Lineal";
    this.velocidadAnimacion=10;   
    this.showMessage=false;
    this.strMessage="";
    this.nodos=[];
    this.valorTamanio="";
  }
  borrarCanvas(){
    this.ctx.fillStyle = this.colorFondoCanvas;
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawBorder()
  }
  borrarAreaSuperior(){
    this.ctx.fillStyle = this.colorFondoCanvas;
    this.ctx.fillRect(1, 1,this.ctx.canvas.width-2,78 );
  }
  drawBorder() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.ctx.canvas.width, 0);
    this.ctx.lineTo(this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.lineTo(0, this.ctx.canvas.height);
    this.ctx.lineTo(0, 0);
    this.ctx.strokeStyle= this.colorLineas;
  }
  clickActualizarTamanio(){
    if(this.valorTamanio!=null&&this.valorTamanio!=undefined){
      this.redibujarTablero();
      this.tablaHashAbierta=new TablaHashAbierta(+this.valorTamanio,this.opcionFuncionHash);
    }
  }
  redibujarTablero(){
    this.borrarCanvas();
    this.tablero = new TableroAbierta( this.ctx, +this.valorTamanio, this.anchoNodo, this.altoNodo, this.colorLineas, this.colorFondoCanvas );
  }
  clickAgregarNodo(){
    this.showMessage=false;
    if(this.valorTamanio!=null&&this.valorTamanio!=undefined&&this.valorTamanio!=""
     &&this.valorNodoInsertar!=null&&this.valorNodoInsertar!=undefined&&this.valorNodoInsertar!=""){
      this.borrarAreaSuperior();
      this.tablaHashAbierta.agregar(this.valorNodoInsertar,this.valorNodoInsertar,this.opcionFuncionHash);
      this.actualizarJsonSalida();
      this.iniciaAnimacion();
      this.tablero.mostrarMensajeHash(this.valorNodoInsertar, this.tablaHashAbierta.funcionHashStr(this.valorNodoInsertar));
      this.valorNodoInsertar="";
     }else{
      this.showMessage=true;
      this.strMessage="Error al agregar nodo: no se ha establecido el tamaño de la tabla hash";
    }
  }
  clickBorrarNodo(){
    this.showMessage=false;
    if(this.valorTamanio!=null&&this.valorTamanio!=undefined&&this.valorTamanio!=""
    &&this.valorNodoInsertar!=null&&this.valorNodoInsertar!=undefined&&this.valorNodoInsertar!=""){
      this.borrarAreaSuperior();
      const encontrada=this.tablaHashAbierta.borrar(this.valorNodoInsertar,this.valorNodoInsertar);
      this.actualizarJsonSalida();
      this.iniciaAnimacion();
      this.valorNodoInsertar="";
    }else{
      this.showMessage=true;
      this.strMessage="Error al agregar nodo: no se ha establecido el tamaño de la tabla hash";
    }
  }
  clickBuscarNodo(){
    this.showMessage=false;
    if(this.valorTamanio!=null&&this.valorTamanio!=undefined&&this.valorTamanio!=""
    &&this.valorNodoInsertar!=null&&this.valorNodoInsertar!=undefined&&this.valorNodoInsertar!=""){
      this.borrarAreaSuperior();
      const encontrada=this.tablaHashAbierta.buscar(this.valorNodoInsertar,this.valorNodoInsertar);
      this.tablero.mostrarMensajeHash(this.valorNodoInsertar, this.tablaHashAbierta.funcionHashStr(this.valorNodoInsertar));
      this.tablero.mostrarMensajeEncontrado(this.valorNodoInsertar, encontrada);
      this.valorNodoInsertar="";
    }else{
      this.showMessage=true;
      this.strMessage="Error al agregar nodo: no se ha establecido el tamaño de la tabla hash";
    }
  }
  clickActualizarNodo(){
    this.showMessage=false;
    this.valorNodoInsertar=this.valorActualizar;
    if(this.valorTamanio!=null&&this.valorTamanio!=undefined&&this.valorTamanio!=""
    &&this.valorNodoInsertar!=null&&this.valorNodoInsertar!=undefined&&this.valorNodoInsertar!=""){
      this.borrarAreaSuperior();
      const encontrada=this.tablaHashAbierta.modificar(this.valorNodoInsertar, this.valorNodoInsertar, this.valorActualizarNuevo);
      this.actualizarJsonSalida();
      this.iniciaAnimacion();
      this.valorNodoInsertar="";
      this.valorActualizar="";
      this.valorActualizarNuevo="";
    }else{
      this.showMessage=true;
      this.strMessage="Error al agregar nodo: no se ha establecido el tamaño de la tabla hash";
    }
  }
  iniciaAnimacion(){
    this.redibujarTablero();
    this.pintarTablaHash();
  }
  obtenerConversionVelocidad(){
    if(this.velocidadAnimacion==10){
      return 0;
    } else {
      return (11-this.velocidadAnimacion)*10;
    }
  }
  tick(){
    let bndTerminarAnimacion=true;
    this.ctx.beginPath();
    for(let i = 0; i<this.nodos.length; i++){
      this.nodos[i].animar();
      if(!this.nodos[i].animacionTerminada) bndTerminarAnimacion = false;
    }
    this.ctx.stroke();
    if(bndTerminarAnimacion){
      clearInterval(this.intervalId);
      if(this.esCarga) {
        this.borrarAreaSuperior();
        this.esCarga=false;
      }
    }
  }
  pintarTablaHash(){
    let nodo:NodoHashAbierta;
    for(let i =0;i<this.tablaHashAbierta.valores.length;i++){
      if(this.tablaHashAbierta.valores[i]!=undefined&&this.tablaHashAbierta.valores[i]!=null){
        nodo=this.tablaHashAbierta.valores[i];
        let j=0;
        while(nodo!=null){
          this.tablero.agregarNodo(nodo.getKey(),j,nodo.getData())
          nodo=nodo.getSiguiente();
          j++;
        }
      }
      
    }
  }
  actualizarJsonSalida(){
    let valoresTabla=new Array();
    for(let i =0;i<this.tablaHashAbierta.valores.length;i++){
      if(this.tablaHashAbierta.valores[i]!=undefined&&this.tablaHashAbierta.valores[i]!=null)
      valoresTabla.push(this.tablaHashAbierta.valores[i])
    }
    let jsonNodoArray= new JsonNodoHashAbierta("Hash abierta","Hash abierta",
    +this.valorTamanio, +this.valorMinRehashing, +this.valorMaxRehashing,
    this.opcionFuncionHash, this.opcionPruebaHash,
    this.velocidadAnimacion.toString(),valoresTabla);
    this.strHashCerradaJson = JSON.stringify(jsonNodoArray,undefined,4);
  }
  downloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'HashAbierta.json',
        text: res
      });
    });
  }
  fakeValidateUserData() {
    return of(this.strHashCerradaJson);
  }
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
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
    if(strIntoObj.m!=undefined) this.valorTamanio=strIntoObj.m;
    if(strIntoObj.minimo!=undefined) this.valorMinRehashing=strIntoObj.minimo;
    if(strIntoObj.maximo!=undefined) this.valorMaxRehashing=strIntoObj.maximo;
    if(strIntoObj.funcion!=undefined) this.opcionFuncionHash=strIntoObj.funcion;
    if(strIntoObj.prueba!=undefined) this.opcionPruebaHash=strIntoObj.prueba;
    if(strIntoObj.valores!=undefined){
      this.esCarga=true;
      this.tablaHashAbierta=new TablaHashAbierta(+this.valorTamanio,this.opcionFuncionHash);
      let labels:string[] = new Array(strIntoObj.valores.length);
      //this.valorTamanio=strIntoObj.valores.length;
      this.redibujarTablero();
      this.nodos=[];
      for(let i =0;i<strIntoObj.valores.length;i++){
        this.valorNodoInsertar=strIntoObj.valores[i];
        this.clickAgregarNodo();
      }
      this.actualizarJsonSalida();
    }
    if(strIntoObj.animacion!=undefined) this.velocidadAnimacion = strIntoObj.animacion;
  }
}
