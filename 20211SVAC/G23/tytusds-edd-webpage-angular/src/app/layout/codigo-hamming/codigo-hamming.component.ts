import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { of } from 'rxjs';
import { CodigoHammingImpl } from './impl/codigo-hamming-impl';

@Component({
  selector: 'app-codigo-hamming',
  templateUrl: './codigo-hamming.component.html',
  styleUrls: ['./codigo-hamming.component.css'],
  animations: [routerTransition()]
})
export class CodigoHammingComponent implements OnInit {
  strMessage:string;
  strCodigoHammingJson:string;
  fileContent:string;
  strCarga:string;
  velocidadAnimacion=10;
  cadenaEntrada:string;
  codigoHammingImpl:CodigoHammingImpl;
  constructor() { }

  ngOnInit(): void {
  }


  actualizarJsonSalida(){
    let valoresTabla=new Array();
    //let jsonNodoArray= new JsonNodoHashCerrada("Hash cerrada","Hash cerrada",this.velocidadAnimacion.toString(),valoresTabla);
    //this.strCodigoHammingJson = JSON.stringify(jsonNodoArray,undefined,4);
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
    return of(this.strCodigoHammingJson);
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
      this.actualizarJsonSalida();
    }
    if(strIntoObj.animacion!=undefined) this.velocidadAnimacion = strIntoObj.animacion;
    if(strIntoObj.cadenaEntrada!=undefined) {
      this.cadenaEntrada = strIntoObj.cadenaEntrada;
      this.codigoHammingImpl=new CodigoHammingImpl(this.cadenaEntrada);
      this.strCodigoHammingJson=this.codigoHammingImpl.strSalida;
    }

  }

}
