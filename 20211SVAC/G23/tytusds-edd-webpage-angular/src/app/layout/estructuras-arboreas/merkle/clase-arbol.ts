import { HashNode } from './hash';
import { DataNode } from './nodo-merkle';

export class Merkle {
  datagraph: any[];
  edgegraph: any[];
    insert(arg0: number) {
      throw new Error('Method not implemented.');
    }
    includes(valorStrNodo: any) {
      throw new Error('Method not implemented.')
    }
    push(valorStrNodo: any) {
      throw new Error('Method not implemented.')
    }
  
    public root:Node
    public tophash
    public datablock
    public dot:string
    public index:number
    public string:boolean

    constructor() {
      this.tophash = null
      this.root = null
      this.datablock = []    
      this.dot = ''
      this.index = 0
      this.string = false
    }
  
    add(value) {
      this.datablock.push(new DataNode(value))
    }
    search(node,founding){
      if(node === null) return null
      else if(founding < node.data) {
          return this.search(node.left,founding)
      }
      else if(founding > node.data) {
          return this.search(node.right,founding)
      }else  {
          console.log(node.data)
          return node
      }

  }
    eliminar(valor){
      this.root = this.eliminarN(this.root,valor)
      
  }

  eliminarN(nodo_aux,valor){
          if(this.string){
              let value = 0
          for(let q = 0 ; q < valor.length ; q++){
              value += valor.charCodeAt(0)
          }
          console.log("VALOR EN AscII: ",value)
      //console.log("Nodos")
      //console.log(node.data, value)
      //console.log("Nodos Padre")
          let nodedata = 0
          for(let q = 0 ; q < nodo_aux.data.length ; q++){
              nodedata += nodo_aux.data.charCodeAt(0)
          }

              console.log("ENTRO A ELIMINAR N.---- Y está eliminando : ",valor)
              if(nodo_aux == null) return null
              else if(valor < nodedata){
                  let iz = this.eliminarN(nodo_aux.left,valor)
                  nodo_aux.left = iz
              }else if( valor > nodedata){
                  let der = this.eliminarN(nodo_aux.right,valor)
                  nodo_aux.right = der
              }else{
                  let p = nodo_aux
                  if(p.right == null){
                      nodo_aux = p.left
                  }else if(p.left == null){
                      nodo_aux = p.right
                  }else{
                      p = this.cambiar(p)
                  }
                  p = null
              }
              return nodo_aux
          }else{
              console.log("ENTRO A ELIMINAR N.---- Y está eliminando : ",valor)
              if(nodo_aux == null) return null
              else if(valor < nodo_aux.data){
                  let iz = this.eliminarN(nodo_aux.left,valor)
                  nodo_aux.left = iz
              }else if( valor > nodo_aux.data){
                  let der = this.eliminarN(nodo_aux.right,valor)
                  nodo_aux.right = der
              }else{
                  let p = nodo_aux
                  if(p.right == null){
                      nodo_aux = p.left
                  }else if(p.left == null){
                      nodo_aux = p.right
                  }else{
                      p = this.cambiar(p)
                  }
                  p = null
              }
              return nodo_aux

          }
  }
  cambiar(p: any): any {
    throw new Error('Method not implemented.');
  }
    createTree(exp) {
      this.tophash = new HashNode(0)
      this._createTree(this.tophash, exp )
    }
  
    _createTree(tmp, exp) {
      if (exp > 0) {
        tmp.left = new HashNode(0)
        tmp.right = new HashNode(0)
        this._createTree(tmp.left, exp - 1)
        this._createTree(tmp.right, exp - 1)
      }
    }
  
    genHash(tmp, n) { 
      if (tmp != null) {
        this.genHash(tmp.left, n)
        this.genHash(tmp.right, n)
        
        if (tmp.left == null && tmp.right == null) {
          tmp.left = this.datablock[n-this.index--]
          var array = new Uint32Array(1);
          window.crypto.getRandomValues(array)

          tmp.hash = array[0]
        } else {
          tmp.hash = (parseInt(tmp.left.hash, 16)+parseInt(tmp.right.hash, 16)).toString(16)
        }      
      }
    }
  
    preorder(tmp) {
      if (tmp != null) {
        if (tmp instanceof DataNode) {
          
          console.log(tmp.value)
        } else {
          
          console.log(tmp.value)
        }
        this.preorder(tmp.left)
        this.preorder(tmp.right)
      }
    }
  
    auth() {
      var exp = 1
      while (Math.pow(2, exp) < this.datablock.length) {
        exp += 1
      }
      for (var i = this.datablock.length; i < Math.pow(2, exp); i++) {
        this.datablock.push(new DataNode(i*100))
      }
      this.index = Math.pow(2, exp)
      this.createTree(exp)
      this.genHash(this.tophash, Math.pow(2, exp))
      this.preorder(this.tophash)    
    }
  
    //show() {
      //this.datablock.forEach(element => document.getElementById("log").innerHTML+=element.value+' ');
    //}
  
    dotgen(tmp) {
      if (tmp != null) {
        if (tmp.left != null){
          if (tmp.left instanceof DataNode) {
            this.dot += '"'+tmp.left.value+'" [color=gray] -> "0x'+tmp.hash+'";'
          }
        }
        if (tmp.left instanceof HashNode) {
          if (tmp.left != null) this.dot += '"0x'+tmp.left.hash+'" -> "0x'+tmp.hash+'";'
          if (tmp.right != null) this.dot += '"0x'+tmp.right.hash+'" -> "0x'+tmp.hash+'";'
        }
        this.dotgen(tmp.left)
        this.dotgen(tmp.right)
      }
    }
  }
