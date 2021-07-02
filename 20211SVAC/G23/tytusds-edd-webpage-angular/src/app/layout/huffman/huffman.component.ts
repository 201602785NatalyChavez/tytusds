import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { routerTransition } from '../../router.animations';
import { HuffmanImpl } from './impl/huffman-impl';
import { JsonHuffman } from './impl/json-huffman';

@Component({
  selector: 'app-huffman',
  templateUrl: './huffman.component.html',
  styleUrls: ['./huffman.component.css'],
  animations: [routerTransition()]
})
export class HuffmanComponent implements OnInit {
  strMessage:string;
  strHuffmanJson:string;
  strHuffmanJsonSalida:string;
  fileContent:string;
  strCarga:string;
  velocidadAnimacion=10;
  cadenaEntrada:string;
  huffmanImpl:HuffmanImpl;
  showMessage=false;

  constructor() { }

  ngOnInit(): void {
  }

  actualizarJsonSalida(){
    /*let valoresTabla=new Array();
    let jsonNodoArray= new JsonHuffman("Huffman",
                                      this.cadenaEntrada,
                                      this.huffmanImpl.m,
                                      this.huffmanImpl.r,
                                      this.huffmanImpl.strSalida);
    this.strHuffmanJsonSalida = JSON.stringify(jsonNodoArray,undefined,4);*/
    /*this.strHuffmanJsonSalida="";
    this.strHuffmanJsonSalida+='Longitud cadena: '+ this.huffmanImpl.result.length+"\n";
    this.strHuffmanJsonSalida+='Frecuencia caracteres: \n'+ this.huffmanImpl.frequency+"\n";
    this.strHuffmanJsonSalida+='Rel. frecuencia \n'+ this.huffmanImpl.relFreq+"\n";
    this.strHuffmanJsonSalida+='Arbol Huffman: \n'+ this.huffmanImpl.obtenerArbol()+"\n";
    this.strHuffmanJsonSalida+='Códigos alfabeto: \n'+ this.huffmanImpl.codes;*/
    this.strHuffmanJsonSalida=this.huffmanImpl.tablaSalida;
  }
  downloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'Huffman.json',
        text: res
      });
    });
  }
  fakeValidateUserData() {
    return of(this.strHuffmanJsonSalida);
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
      this.huffmanImpl=new HuffmanImpl(this.cadenaEntrada);
      console.log('Longitud cadena: ', this.huffmanImpl.result.length);
      console.log('Frecuencia caracteres: \n', this.huffmanImpl.frequency);
      console.log('Rel. frecuencia \n', this.huffmanImpl.relFreq);
      console.log('Arbol Huffman: \n', this.huffmanImpl.obtenerArbol());
      console.log('Códigos alfabeto: \n', this.huffmanImpl.codes);
      this.actualizarJsonSalida();
    }

  }

}
