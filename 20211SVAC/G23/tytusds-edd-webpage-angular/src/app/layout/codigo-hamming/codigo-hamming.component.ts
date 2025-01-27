import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { of } from 'rxjs';
import { CodigoHammingImpl } from './impl/codigo-hamming-impl';
import { JsonHaming } from './impl/json-hamming';

@Component({
  selector: 'app-codigo-hamming',
  templateUrl: './codigo-hamming.component.html',
  styleUrls: ['./codigo-hamming.component.css'],
  animations: [routerTransition()]
})
export class CodigoHammingComponent implements OnInit {
  strMessage:string;
  strCodigoHammingJson:string;
  strCodigoHammingJsonSalida:string;
  fileContent:string;
  strCarga:string;
  velocidadAnimacion=10;
  cadenaEntrada:string;
  codigoHammingImpl:CodigoHammingImpl;
  showMessage=false;
  constructor() { }

  ngOnInit(): void {
  }


  actualizarJsonSalida(){
    let valoresTabla=new Array();
    let jsonNodoArray= new JsonHaming("Codigo Hamming",
                                      this.cadenaEntrada,
                                      this.codigoHammingImpl.m,
                                      this.codigoHammingImpl.r,
                                      this.codigoHammingImpl.strSalida);
    this.strCodigoHammingJsonSalida = JSON.stringify(jsonNodoArray,undefined,4);
  }
  downloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'CodigoHamming.json',
        text: res
      });
    });
  }
  fakeValidateUserData() {
    return of(this.strCodigoHammingJsonSalida);
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
      if(strIntoObj.valores!=undefined){
      }
      if(strIntoObj.animacion!=undefined) this.velocidadAnimacion = strIntoObj.animacion;
      if(strIntoObj.cadenaEntrada!=undefined) {
        this.cadenaEntrada = strIntoObj.cadenaEntrada;
        this.codigoHammingImpl=new CodigoHammingImpl(this.cadenaEntrada);
        this.strCodigoHammingJson=this.codigoHammingImpl.strSalida;
        this.actualizarJsonSalida();
      }

  }

}
