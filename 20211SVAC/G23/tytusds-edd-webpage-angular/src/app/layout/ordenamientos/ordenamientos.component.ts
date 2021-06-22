import { routerTransition } from '../../router.animations';
import { Component, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import BurbujaImpl from './impl-ordenamientos/burbuja';
import { JsonNodoOrdenamiento } from './impl-ordenamientos/ordenamiento-json';
import SelectionSortImpl from './impl-ordenamientos/seleccion';
import InsercionSortImpl from './impl-ordenamientos/insercion';
import QuickSortImpl from './impl-ordenamientos/quick';
@Component({
  selector: 'app-ordenamientos',
  templateUrl: './ordenamientos.component.html',
  styleUrls: ['./ordenamientos.component.css'],
  animations: [routerTransition()]
})
export class OrdenamientosComponent implements OnInit {
  paramsSubscription: Subscription;
  public idOrdenamiento=0;
  tituloOrdenamiento:string;
  strCarga:string;
  strOrdenamientoJson:string;
  identificadorTempo: NodeJS.Timeout;
  array: any[];
  constructor(private route: ActivatedRoute) {}
  requestId;
  intervalId;
  velocidadAnimacion;
  valoresLetras=[];
  valoresLabelsLeidos=[];
  sonNumeros:boolean;
  

  ngOnInit(): void {
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.valoresLetras=[];
    this.sonNumeros=true;
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.idOrdenamiento = +params['idOrdenamiento'];
      switch(this.idOrdenamiento){
        case 1:this.tituloOrdenamiento="Burbuja"; 
          break; 
        case 2:this.tituloOrdenamiento="Seleccion"
        break;
        case 3:this.tituloOrdenamiento="Insercion"
        break;
        case 4:this.tituloOrdenamiento="Rapido"
        break; 
      }
    });
    
  }
 
  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };

  public barChartLabels: string[] = ['1',
                                      '2',
                                      '3',
                                      '4',
                                      '5'];
  public barChartType: string;
  public barChartLegend: boolean;

  public barChartData: any[] = [
      { data: [85,
        25,
        55,
        40,
        15], label: 'Datos leídos' }
  ];

  graficar(){
    console.log("GRAFICANDO")

    

  }
  temporizador(){
    console.log("BAR EN TEMPPO",this.barChartData[0].data)
    this.identificadorTempo = setTimeout(this.graficar,2500)
    console.log("BAR EN TEMPPO 2222",this.barChartData[0].data)

  }

  detenertemporizador(){
    clearTimeout(this.identificadorTempo)
  }

clickOrdenar(): void{
    
      this.iniciaAnimacionOrdenar();
    

  }
  iniciaAnimacionOrdenar(){
    if (this.intervalId != undefined) clearInterval(this.intervalId);
    if (this.requestId!=undefined) cancelAnimationFrame(this.requestId);
    this.intervalId = setInterval(() => {
      this.tick();      
    }, this.velocidadAnimacion);
  }
  tick(){
    console.log(this.barChartData[0].data);
    var a = this.barChartData[0].data;
    let datosOrdenados;
    let bndDatosOrdenados=false;
    if(this.idOrdenamiento==1) { 
      let burbujaImpl = new BurbujaImpl(a);
      datosOrdenados = burbujaImpl.getDatosOrdenados();  
      bndDatosOrdenados=burbujaImpl.bndDatosOrdenados;
    }else if(this.idOrdenamiento==2)   { 
      let seleccionImpl = new SelectionSortImpl(a);
      datosOrdenados = seleccionImpl.getDatosOrdenados();  
      bndDatosOrdenados=seleccionImpl.bndDatosOrdenados;
    }else if(this.idOrdenamiento==3)   { 
      let insercionImpl = new InsercionSortImpl(a);
      datosOrdenados = insercionImpl.getDatosOrdenados();  
    }else if(this.idOrdenamiento==4)   { 
      let quickSortImpl = new QuickSortImpl(a);
      datosOrdenados = quickSortImpl.getDatosOrdenados();  
    }
    let data = new Array(datosOrdenados.length);
    for(let i =0;i<datosOrdenados.length;i++){
      data[i]=datosOrdenados[i];
    }
    this.barChartData[0].data = data;
    const animacion = this.convertirVelocidadAnimacion().toString();
    let jsonNodoArray;
    if(this.sonNumeros){
      jsonNodoArray= new JsonNodoOrdenamiento("Ordenamiento",this.tituloOrdenamiento,animacion,data);
    }else{
      this.actualizarLabelsStrings();
      jsonNodoArray= new JsonNodoOrdenamiento("Ordenamiento",this.tituloOrdenamiento,animacion,this.barChartLabels);
    }
    this.strOrdenamientoJson = JSON.stringify(jsonNodoArray);
    if(bndDatosOrdenados){
      clearInterval(this.intervalId);
    }
  }
  obtenerEquivalenciaVelocidad(animacion:number){
    if(animacion!=undefined)
      this.velocidadAnimacion= (11-animacion)*300;
    else
      this.velocidadAnimacion= 1000;
    console.log('velocidad animacion:'+this.velocidadAnimacion);
  }
  convertirVelocidadAnimacion(){
    if(this.velocidadAnimacion!=undefined) return 11-this.velocidadAnimacion/300;
    else return 5;
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
    //console.log(strIntoObj);
    let labels:string[] = new Array(strIntoObj.valores.length);
    for(let i =0;i<strIntoObj.valores.length;i++){
      labels[i]=String(i+1);
    }
    if(strIntoObj.animacion!=undefined) this.obtenerEquivalenciaVelocidad(strIntoObj.animacion);
    this.sonNumeros=this.obtenerSonNumeros(strIntoObj.valores);
    if(this.sonNumeros){
      this.barChartLabels=labels;    
      this.barChartData[0].data = strIntoObj.valores;      
    }else{
      this.barChartLabels= strIntoObj.valores;
      this.barChartData[0].data = this.obtenerArrayValoresLetras(strIntoObj.valores);
    }
    console.log(this.barChartData[0].data);
  }
  obtenerSonNumeros(arrayValores:any[]){
    let sonNumeros=true;
    for(let i=0;i<arrayValores.length;i++){
      if(typeof arrayValores[i]=="string") {sonNumeros = false; break;}
    }
    return sonNumeros;
  }
  obtenerArrayValoresLetras(arrayValores:any[]){
    this.valoresLetras=[];
    this.valoresLabelsLeidos=[];
    this.valoresLabelsLeidos  = Object.assign([], arrayValores);
    const myClonedArray  = Object.assign([], arrayValores);
    let burb=new BurbujaImpl(myClonedArray);
    burb.ordenarDatosBurbujaSinBreak();
    for(let i = 0; i< arrayValores.length; i++){
      for(let j = 0 ; j < burb.getDatosOrdenados().length; j++){
        if(arrayValores[i]==burb.getDatosOrdenados()[j]){
          this.valoresLetras.push(j+1);
        }
      }
    }
    return this.valoresLetras;
  }
  actualizarLabelsStrings(){
    //this.barChartLabels
    for(let i = 0; i< this.barChartData[0].data.length; i++){
      for(let j = 0 ; j < this.valoresLetras.length; j++ ){
        if(this.barChartData[0].data[i]==this.valoresLetras[j]){
          this.barChartLabels[i]=this.valoresLabelsLeidos[j];
        }
      }
    }
  }
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }
  private colors = [
    {
      backgroundColor: [
        'rgba(47,79,79)',
        'rgba(0,128,128)',
        'rgba(32,178,170)',
        'rgba(102,205,170)',
        'rgba(46,139,87)',
        'rgba(60,179,113)',
        'rgba(32,178,170)',
        'rgba(70,130,180)',
        'rgba(95,158,160)',
        'rgba(100,149,237)',
        'rgba(176,224,230)',
        'rgba(224,255,255)',
        'rgba(47,79,79)',
        'rgba(0,128,128)',
        'rgba(32,178,170)',
        'rgba(102,205,170)',
        'rgba(46,139,87)',
        'rgba(60,179,113)',
        'rgba(32,178,170)',
        'rgba(70,130,180)',
        'rgba(95,158,160)',
        'rgba(100,149,237)',
        'rgba(176,224,230)',
        'rgba(224,255,255)',
        'rgba(47,79,79)',
        'rgba(0,128,128)',
        'rgba(32,178,170)',
        'rgba(102,205,170)',
        'rgba(46,139,87)',
        'rgba(60,179,113)',
        'rgba(32,178,170)',
        'rgba(70,130,180)',
        'rgba(95,158,160)',
        'rgba(100,149,237)',
        'rgba(176,224,230)',
        'rgba(224,255,255)',
        'rgba(47,79,79)',
        'rgba(0,128,128)',
        'rgba(32,178,170)',
        'rgba(102,205,170)',
        'rgba(46,139,87)',
        'rgba(60,179,113)',
        'rgba(32,178,170)',
        'rgba(70,130,180)',
        'rgba(95,158,160)',
        'rgba(100,149,237)',
        'rgba(176,224,230)',
        'rgba(224,255,255)',
        'rgba(47,79,79)',
        'rgba(0,128,128)',
        'rgba(32,178,170)',
        'rgba(102,205,170)',
        'rgba(46,139,87)',
        'rgba(60,179,113)',
        'rgba(32,178,170)',
        'rgba(70,130,180)',
        'rgba(95,158,160)',
        'rgba(100,149,237)',
        'rgba(176,224,230)',
        'rgba(224,255,255)',
      ]
    }];
  downloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: this.tituloOrdenamiento+'.json',
        text: res
      });
    });
  }
  fakeValidateUserData() {
    return of(this.strOrdenamientoJson);
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
