import { Component, OnInit, Input, ViewChild, ElementRef,AfterViewInit, Renderer2, ComponentFactoryResolver} from '@angular/core';
import { ArrayDestructuringAssignment } from 'typescript';

@Component({
  selector: 'app-feistel',
  templateUrl: './feistel.component.html',
  styleUrls: ['./feistel.component.css']
})
export class FeistelComponent implements OnInit {
  ultimoright:string = ''
  ultimoleft:string = ''
  veces:number = 2
  paratabla = []
  flag = false
  ultimoultimo:string 
  primeroprimero:string
  

  constructor() { }

  ngOnInit(): void {
  }


  texto: string = '';

  public cargarArchivo(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.texto = fileReader.result.toString();
    }
    fileReader.readAsText(file);
    
  }

  clickCargar(){
    this.paratabla = []
    console.log("TEXTO",this.texto);
    //this.texto = "CF"
    console.log("VECES",this.veces);
    //this.fileContent = "PABLO PAPA DE PABLITO"
    let y = this.modulodosfunciona(this.texto)
    let keyp = this.mitadtexto(y.length)
    let lp = ''
    let rp = ''
    for(let i = 0 ; i < y.length ; i++){
      if(i < (y.length/2)) lp += y[i]
      else rp += y[i]
    } 
    let left = this.binary_encode(lp)
    let right = this.binary_encode(rp)
    this.primeroprimero = left+right
    let key = this.binary_encode(keyp)
    this.paratabla.push([left,right])
    let ultimatum = this.feistel(left,right,key,this.veces)
    //let ultimatum = this.feistel(left,right,'00110001',4)
    this.ultimoleft = ultimatum
    let mecago = this.ultimoright+ultimatum
    console.log("MECAGO",mecago)
    let query = document.querySelector('#mynetwork')
    let x = 0
    console.log(this.paratabla)
    this.ultimoultimo = mecago
    console.log(this.ultimoultimo)
    /*query.innerHTML = 
    `
    <table>
      <tr>
        <th><center>${this.paratabla[x][0]}</center></th> 
        <th><center>${this.paratabla[x][1]}</center></th> 
      </tr>
    `
    x += 1
    

    while(this.paratabla[x] != null){
      query.innerHTML += 
      `
      <tr>
        <th><center>${this.paratabla[x][0]}</center></th>
        <th><center>${this.paratabla[x][1]}</center></th>
      </tr>
      `
      x += 1
    }
    this.flag = true
    query.innerHTML += '</table>'
    let hexa =  parseInt(mecago,2).toString(16)
    console.log(hexa)*/
    this.flag = true
    console.log(this.paratabla.length)
  }

  binary_encode( s ){
    s = unescape( encodeURIComponent( s ) );
    var chr, i = 0, l = s.length, out = '';
    for( ; i < l; i ++ ){
        chr = s.charCodeAt( i ).toString( 2 );
        while( chr.length % 8 != 0 ){ chr = '0' + chr; }
        out += chr;
    }
    return out;
  }

  modulodosfunciona(cadena){
    if(cadena.length != 2){
        if( ( ( cadena.length / 2 ) % 2) == 0 ){
            return cadena
        }else{
            cadena += " "
            cadena = this.modulodosfunciona(cadena)
            
        return cadena
        }
    }else{
        return cadena
    }
  }
  
  mitadtexto(tamaño){
    let out = ''
    let EDD = "EDD"
    let x = 0
    for(let i = 0; i < (tamaño/2); i++){
        out += EDD[x]
        x += 1
        if(x >= 3) x = 0
    }
    return out
  }

  feistel(left,right,key,veces){
    let retorno = ''
    let espaciosblanco = ''
    for(let i = 0 ; i < left.length ; i++){
      if(right[i] == key[i]){
        retorno += '0'
        espaciosblanco += '..'
      }else{
        retorno += '1'
        espaciosblanco += '..'
      }
    }
    this.paratabla.push([espaciosblanco,key])
    this.paratabla.push([espaciosblanco,retorno])
    let retorno2 = ''
    for(let i = 0 ; i < left.length ; i++){
        if(retorno[i] == left[i]){
            retorno2 += '0'
        }else retorno2 += '1'
    }
    this.paratabla.push([espaciosblanco,left])
    let keys
    this.paratabla.push([right,retorno2])
    if(veces != 1){
        veces -= 1
        keys = key.split('')
        let x = keys[0]
        keys.shift()
        keys.push(x)
        keys = keys.join()
        let newkeys = ''
        for(let i = 0 ; i < keys.length ; i++){
            if (keys[i] != ',') newkeys += keys[i]            
        }
        retorno2 = this.feistel(right,retorno2,newkeys,veces)
    }else this.ultimoright = right
    return retorno2
  }
}
