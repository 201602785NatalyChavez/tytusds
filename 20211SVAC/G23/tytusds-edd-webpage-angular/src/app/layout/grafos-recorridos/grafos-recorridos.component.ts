import { Component, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { GrafoImpl } from './impl/grafo-impl';
import { graphviz,d3 }  from 'd3-graphviz';
import { JsonGrafo } from './impl/json-grafo';
import { AnimacionRecorrido } from './impl/animacion-recorrido';

@Component({
  selector: 'app-grafos-recorridos',
  templateUrl: './grafos-recorridos.component.html',
  styleUrls: ['./grafos-recorridos.component.css'],
  animations: [routerTransition()]
})
export class GrafosRecorridosComponent implements OnInit {
  paramsSubscription: Subscription;
  idTipoGrafo=0;
  tituloGrafo:string;
  strMessage:string;
  seleccionAlmacenamiento="Matriz";
  velocidadAnimacion="10";
  valorNodoVertice="";
  valorNodoAristas="";
  strGrafoJson="";
  strRecorrido="";
  valorPrimerNodo="";
  valorActualizar="";
  valorActualizarNuevo="";
  fileContent:string;
  strCarga:string;
  showMessage:boolean;
  grafoImpl:GrafoImpl;
  nodoEncontrado="";
  tipoGrafo="Grafo Dirigido";
  strAlmacenamiento="";
  recorrido;
  requestId;
  intervalId;
  animacionRecorrido:AnimacionRecorrido;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.idTipoGrafo = +params['idTipoRecorrido'];
      if(this.idTipoGrafo==1) this.tituloGrafo="Recorrido y búsqueda por anchura";
      else this.tituloGrafo="Recorrido y búsqueda por profundidad";
      this.inicializarVariables();
    });
  }
  inicializarVariables(){
    this.seleccionAlmacenamiento="Matriz";
    this.velocidadAnimacion="10";
    this.valorNodoVertice="";
    this.valorNodoAristas="";
    this.strGrafoJson="";
    this.showMessage=false;
    this.strMessage="";
    this.valorPrimerNodo="";
    this.valorActualizar="";
    this.valorActualizarNuevo="";
    this.grafoImpl=new GrafoImpl([],[]);
    this.nodoEncontrado="";
    this.recorrido="";
    this.fileContent="";
    this.strAlmacenamiento="";
    graphviz('#graph').renderDot('digraph { }');
  }
  actualizarJsonSalida(){
    let valoresVertice=new Array();
    for(let i =0;i<this.grafoImpl.vertices.length;i++){
      let valoresAristas=new Array();
      if(this.grafoImpl.aristas!=undefined){
        for(let j = 0; j< this.grafoImpl.aristas.length ; j++){
          if(this.grafoImpl.aristas[j][0]==this.grafoImpl.vertices[i].name){
            valoresAristas.push({arista:this.grafoImpl.aristas[j][1],distancia:this.grafoImpl.aristas[j][2]})
          }
        }
      }
      valoresVertice.push( {vertice:this.grafoImpl.vertices[i].name,aristas:valoresAristas} );
    }
    let jsonGrafo=new JsonGrafo("Estructura No Lineal",this.tipoGrafo,this.seleccionAlmacenamiento,
      +this.velocidadAnimacion,valoresVertice);
    this.strGrafoJson = JSON.stringify(jsonGrafo,undefined,4);
    if(this.seleccionAlmacenamiento=="Matriz") {
      this.strAlmacenamiento=this.grafoImpl.obtenerMatrizAdyacenciaStr();
    }else{
      this.strAlmacenamiento="";
      for(let i = 0; i< jsonGrafo.valores.length; i++){
        this.strAlmacenamiento+=jsonGrafo.valores[i].vertice+" --> ";
        for(let j = 0 ; j<jsonGrafo.valores[i].aristas.length;j++){
          this.strAlmacenamiento+=jsonGrafo.valores[i].aristas[j].arista+(j<jsonGrafo.valores[i].aristas.length?",":"");
        }
        this.strAlmacenamiento+="\n";
      }
    }
  }
  handleChangeAlmacenamiento(evt){
    this.actualizarJsonSalida();
  }
  actualizarRecorrido(){
    this.strRecorrido="";
    let nuevoRecorrido=[];
    for(let i = 0; i<this.recorrido.length; i++){
      if(!nuevoRecorrido.includes(this.recorrido[i]))
        nuevoRecorrido.push(this.recorrido[i]);
    }
    for(let i = 0; i<nuevoRecorrido.length; i++){
      this.strRecorrido+=nuevoRecorrido[i].name+"\n";
    }
  }
  dibujarGrafo(){
    if(this.grafoImpl.aristas!=undefined){
        let strGraphviz='digraph G{ \n';
        for(let i = 0 ; i < this.grafoImpl.vertices.length;i++){
          strGraphviz+=this.grafoImpl.vertices[i].name+" [label=\""+this.grafoImpl.vertices[i].name+"\" "+(this.nodoEncontrado==this.grafoImpl.vertices[i].name?",color=blue":"")+"]\n"
        }
        for(let i = 0 ; i < this.grafoImpl.aristas.length;i++){
          strGraphviz+=this.grafoImpl.aristas[i][0]+'->'+this.grafoImpl.aristas[i][1]+'[label="'+this.grafoImpl.aristas[i][2]+'"]'+(i==this.grafoImpl.aristas.length-1?"":";");
        }
        strGraphviz+='}';
        graphviz('#graph').renderDot(strGraphviz);
    }
  }
  clickAgregarNodo(){
    //vertice
    if(this.valorNodoVertice!=undefined&&this.valorNodoVertice!=null&&this.valorNodoVertice.length>0){
      this.grafoImpl.vertices.push( {name:this.valorNodoVertice,distance:null,predecessor:null} );
      this.valorNodoVertice="";
      this.dibujarGrafo();
      this.actualizarJsonSalida();
    }
    if(this.valorNodoAristas!=undefined&&this.valorNodoAristas!=null&&this.valorNodoAristas.length>0){
      let splitAristas=this.valorNodoAristas.split(',');
      if(splitAristas.length==3){
        this.grafoImpl.aristas.push( [splitAristas[0].trim(),splitAristas[1].trim(),splitAristas[2].trim()]  );
        this.valorNodoAristas="";
        this.dibujarGrafo();
        this.actualizarJsonSalida();
      }else{
        this.mostrarMensaje("Error: el formato para insertar arista debe ser Inicio,Fin,Distancia");
      }
    }
    
  }
  clickBorrarNodo(){
    if(this.valorNodoVertice!=undefined){
      this.grafoImpl.borrarNodo(this.valorNodoVertice);
      this.valorNodoVertice="";
      this.dibujarGrafo();
    }
  }
  clickBuscarNodo(){
    if(this.valorNodoVertice!=undefined){
      this.showMessage=true;
      if(this.grafoImpl.buscarNodo(this.valorNodoVertice,this.grafoImpl.vertices)!=undefined ){
        this.strMessage="Nodo "+this.valorNodoVertice+" encontrado";
        this.nodoEncontrado=this.valorNodoVertice;
      }else{
        this.strMessage="Nodo "+this.valorNodoVertice+" NO encontrado";
      }
      this.dibujarGrafo();
      setTimeout(function() {
        this.showMessage = false;
      }.bind(this), 5000);
      this.valorNodoVertice="";
    }
  }
  mostrarMensaje(mensaje:string){
    this.showMessage=true;
    this.strMessage=mensaje;
    setTimeout(function() {
      this.showMessage = false;
    }.bind(this), 5000);
  }
  clickActualizarNodo(){
    if(this.valorActualizar!=undefined&&this.valorActualizarNuevo!=undefined){
      this.grafoImpl.actualizarNodo(this.valorActualizar, this.valorActualizarNuevo);
      this.valorActualizar="";
      this.valorActualizarNuevo="";
      this.dibujarGrafo();  
    }
  }
  clickRecorrerNodo(){
    if(this.valorPrimerNodo==undefined){
      this.valorPrimerNodo = this.grafoImpl.vertices[0].name;
    }
    //Por anchura
    if(this.idTipoGrafo==1){
      this.recorrido=this.grafoImpl.bfs(this.grafoImpl.vertices[0]);
      //console.log(this.recorrido);
    }else{
      this.recorrido=this.grafoImpl.dfs(this.grafoImpl.vertices[0]);
      //console.log(this.recorrido);
    }
    this.actualizarRecorrido();
    this.iniciaAnimacion();
  }
  iniciaAnimacion(){
    if (this.intervalId != undefined) clearInterval(this.intervalId);
    if (this.requestId!=undefined) cancelAnimationFrame(this.requestId);
    let nuevoRecorrido:any[];
    nuevoRecorrido=[];
    for(let i = 0; i<this.recorrido.length; i++){
      if(!nuevoRecorrido.includes(this.recorrido[i]))
        nuevoRecorrido.push(this.recorrido[i]);
    }
    this.animacionRecorrido=new AnimacionRecorrido(nuevoRecorrido,this.grafoImpl);
    this.intervalId = setInterval(() => {
      this.tick();      
    }, this.obtenerConversionVelocidad());
  }
  obtenerConversionVelocidad(){
    if(this.velocidadAnimacion=="10"){
      return 50;
    } else {
      return (11-+this.velocidadAnimacion)*100;
    }
  }
  tick(){ 
    var strGrafo=this.animacionRecorrido.animar();
    if(strGrafo!=undefined&&strGrafo!=null&&strGrafo.length>0)
      graphviz('#graph').renderDot(strGrafo);
    if(this.animacionRecorrido.bndAnimacionTerminada){
      clearInterval(this.intervalId);
      setTimeout(function() {
        this.dibujarGrafo();
      }.bind(this), this.obtenerConversionVelocidad());
    }
  }
  downloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'GrafoRecorrido'+(this.idTipoGrafo==1?"Anchura":"Profundidad")+'.json',
        text: res
      });
    });
  }
  reset(element) {
    element.value = "";
  }
  fakeValidateUserData() {
    return of(this.strGrafoJson);
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
    if(strIntoObj.animacion!=undefined) this.velocidadAnimacion = strIntoObj.animacion;
    if(strIntoObj.almacenamiento!=undefined) this.seleccionAlmacenamiento = strIntoObj.almacenamiento;
    if(strIntoObj.valores!=undefined){
      let vertices=[]; 
      let aristas=[];
      for(let i = 0; i< strIntoObj.valores.length; i++){
        vertices.push({name:strIntoObj.valores[i].vertice.toString()} );
        for(let j = 0; j< strIntoObj.valores[i].aristas.length;j++){
          aristas.push( [strIntoObj.valores[i].vertice.toString(),strIntoObj.valores[i].aristas[j].arista.toString(),strIntoObj.valores[i].aristas[j].distancia.toString()]  );
        }
      }
      console.log(vertices);
      console.log(aristas);
      this.grafoImpl=new GrafoImpl(vertices,aristas);
      this.valorPrimerNodo=vertices[0].name;
      //Por anchura
      if(this.idTipoGrafo==1){
        this.recorrido=this.grafoImpl.bfs(vertices[0]);
        console.log(this.recorrido);
      }else{
        this.recorrido=this.grafoImpl.dfs(this.grafoImpl.vertices[0]);
        console.log(this.recorrido);
      }
      this.actualizarRecorrido();
      this.dibujarGrafo();
     
    }
    this.actualizarJsonSalida();
    
  }
}
