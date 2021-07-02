import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, Renderer2, ComponentFactoryResolver} from '@angular/core';
import { ArrayDestructuringAssignment } from 'typescript';


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
    console.log(this.fileContent);
    //this.fileContent = "PABLO PAPA DE PABLITO"
    for(let i = 0; i<this.fileContent.length;i++){
      if(this.diccionario.has(this.fileContent[i]) == false){
        this.diccionario.set(this.fileContent[i],this.contcode)
        this.contcode += 1
      }    
    }
    console.log("THIS:CODIGOS",this.codigos)
    while (this.fileContent[this.x] != null){
      this.wk = this.w+this.fileContent[this.x]
      if(this.diccionario.has(this.wk)){
        this.w = this.wk
        this.wk = this.w+this.fileContent[this.x]
      }else{
        this.diccionario.set(this.wk,this.contcode)
        this.contcode += 1
        //let q = this.diccionario.get(this.w)
        //console.log(this.diccionario.get(this.w))
        this.codigos.push(this.diccionario.get(this.w))
        this.w = this.fileContent[this.x]
      }
      if(this.fileContent[this.x+1] == null){
        this.codigos.push(this.diccionario.get(this.w))
          
  
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
    let query = document.querySelector('#mynetwork')
    query.innerHTML = 
    `
    <p style="color:red"><strong>TEXTO INGRESADO</strong></p>
    <p style="color:green"><strong>${this.fileContent}</strong></p>

    <p style="color:red"><strong>TEXTO CODIFCADO</strong></p>
    <p style="color:green"><strong>${q}</strong></p>

    <p style="color:red"><strong>TEXTO CODIFICADO SIN COMAS</strong></p>
    <p style="color:green"><strong>${sincomas}</strong></p>
    `
  }

}
