import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, Renderer2, ComponentFactoryResolver} from '@angular/core';
import { of } from 'rxjs';
import { ArrayDestructuringAssignment } from 'typescript';
import { threadId } from 'worker_threads';
import { Jsonlzw } from './lzw-json';


@Component({
  selector: 'app-lzw',
  templateUrl: './lzw.component.html',
  styleUrls: ['./lzw.component.css']
})
export class LzwComponent implements OnInit {

  //strCarga:string
  x:number = 0
  w:string = ''
  codigos: Array<string> = []
  diccionario = new Map()
  contcode:number = 0
  wk:string = ''
  parasegunda = []
  strHuffmanJsonSalida: any;
  cadenaEntrada: any;

  constructor() { }

  ngOnInit(): void {
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
    
  }

  clickCargar(){
    let query = document.querySelector('#mynetwork')
    this.fileContent = "PABLO PAPA DE PABLITO"
    query.innerHTML = 
    `<p style="color:red"><strong>TEXTO INGRESADO</strong></p>
    <p style="color:green"><strong>${this.fileContent}</strong></p>
    `
    console.log(this.fileContent);
    //this.fileContent = "PABLO PAPA DE PABLITO"
    query.innerHTML += `
    <style type="text/css">
    #mynetwork {
        width: 1000px;
        height: 500px;
        border: 1px solid lightgray;
        overflow:auto;
    }
    table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
    <center>
      <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 10%;">
        <thead style="border: 1px solid #dddddd;text-align: left;padding: 8px;">
          <tr id="mytr">
          </tr>
        </thead>
        <tbody style="border: 1px solid #dddddd;text-align: left;padding: 8px;">
          <tr id="mytr2">
          </tr>
        </tbody>
      </table>
    </center>`
    let mytr = document.querySelector('#mytr')
    for(let i = 0; i<this.fileContent.length;i++){
      if(this.diccionario.has(this.fileContent[i]) == false){
        mytr.innerHTML += 
        `
        <th style="border: 1px solid #dddddd;text-align: left;padding: 8px;">${this.fileContent[i]} </th>
        `
        this.diccionario.set(this.fileContent[i],this.contcode)
        this.parasegunda.push([this.fileContent[i],this.contcode])
        this.contcode += 1
      } 
    }

    let mytr2 = document.querySelector('#mytr2')
    for(let i = 0; i < this.parasegunda.length;i++){
      mytr2.innerHTML += 
        `
            <th style="border: 1px solid #dddddd;text-align: left;padding: 8px;"> ${this.parasegunda[i][1]} </th>
        `
       
    }
    
    /*for(let i = 0; i<this.fileContent.length;i++){
      if(this.diccionario.has(this.fileContent[i]) == false){
        this.diccionario.set(this.fileContent[i],this.contcode)
        this.contcode += 1
      }    
    }*/
    query.innerHTML += `
    <br>
    <center>
      <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 10%;">
        <thead style="border: 1px solid #dddddd;text-align: left;padding: 8px;" id="thead">
        </thead>
        <tbody style="border: 1px solid #dddddd;text-align: left;padding: 8px;" id="tbody">
        </tbody>
      </table>
    </center>`
    let thead = document.querySelector('#thead')
    let tbody = document.querySelector('#tbody')
    thead.innerHTML += `
    <tr>
      <th> w </th>
      <th> K </th>
      <th> wK </th>
      <th> Agregar a diccionario </th>
      <th> Salida </th>
    `
   /* tbody.innerHTML +=
    `
    <tr>
      <th> </th>
      <th> </th>
      <th> </th>
      <th> </th>

      <th> ${this.diccionario.get(this.w)} </th>

    `*/
    
    tbody.innerHTML +=
    `
    <tr>
      <th> ${this.w} </th>
      <th> ${this.fileContent[this.x]} </th>
      <th> ${this.fileContent[this.x]} </th>
      <th>  </th>
      <th>  </th>
    `
    console.log("THIS:CODIGOS",this.codigos)
    let espacio = "_"

    while (this.fileContent[this.x] != null){
      this.wk = this.w+this.fileContent[this.x]
      if(this.diccionario.has(this.wk)){
        this.w = this.wk
        this.wk = this.w+this.fileContent[this.x]
       /* tbody.innerHTML +=
        `
        <tr>
          <th> ${this.w} </th>
          <th> ${this.fileContent[this.x]} </th>
          <th> ${this.wk} </th>
          <th>  </th>
          <th>  </th>
        `*/
      }else{
        this.diccionario.set(this.wk,this.contcode)
        tbody.innerHTML +=
        `
        <tr>
          <th> ${this.w} </th>
          <th> ${this.fileContent[this.x]} </th>
          <th> ${this.wk} </th>
          <th> ${this.wk + this.contcode } </th>
          <th> ${this.diccionario.get(this.w)} </th>
        `
        this.contcode += 1
        //let q = this.diccionario.get(this.w)
        //console.log(this.diccionario.get(this.w))
        this.codigos.push(this.diccionario.get(this.w))
        this.w = this.fileContent[this.x]
      }
      if(this.fileContent[this.x+1] == null){
        this.codigos.push(this.diccionario.get(this.w))
        tbody.innerHTML +=
        `
        <tr>
          <th>${this.w} </th>
          <th> </th>
          <th> </th>
          <th> </th>

          <th> ${this.diccionario.get(this.w)} </th>
        `
          
  
      }
      this.x += 1
    }
    //console.log(this.diccionario)
    //console.log(this.codigos)
    let q = this.codigos.toString()
    //console.log(q)
    var sincomas = ''
    for(let i = 0 ; i < q.length ; i++){
        if(q[i] != ',') sincomas += q[i]
    }
    q.replace(","," ")
    //console.log(sincomas)
    //console.log(this.codigos)
    query.innerHTML += 
    `
    <p style="color:red"><strong>TEXTO CODIFCADO</strong></p>
    <p style="color:green"><strong>${q}</strong></p>

    <p style="color:red"><strong>TEXTO CODIFICADO SIN COMAS</strong></p>
    <p style="color:green"><strong>${sincomas}</strong></p>
    `
  }
  actualizarJsonSalida(){
    
   
  }
  downloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'Lzw.json',
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

}
