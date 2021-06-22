import {Node} from './nodo'
export class BPlus{
    grado:any
    middle:number
    root:Node
    string:boolean
    contador:number
    arrayNodes
    edges
    constructor(grado){
        this.grado = grado 
        if((grado % 2) == 0) this.middle = grado/2
        else this.middle = (grado-1)/2
        this.root = new Node(null,0)
        this.string = false
        this.contador = 2
        this.edges = []
        this.arrayNodes = []
    }
    add(value){
        this.root = this._agregar(value,this.root)
    }

    _agregar(valor, temp){
        if(temp.childs.length == 0){
            temp.agregar(valor)
        }else{
            var encontrar = false
            for(var i = 0; i<temp.keys.length; i++){
                if(valor < temp.keys[i]){
                    encontrar = true
                    temp.childs[i] = this._agregar(valor, temp.childs[i])
                    break;
                }
            }
            if(!encontrar){
                temp.childs[temp.keys.length] = this._agregar(valor, temp.childs[temp.keys.length])
            }
        }
        if(temp.keys.length == this.grado){
            if(temp.parent == null){
                this.contador++
                var c = temp;
                temp = new Node(null, this.contador)
                temp.agregar(c.keys[this.middle])
                this.contador++
                temp.childs.push(new Node(temp, this.contador))
                this.contador++
                temp.childs.push(new Node(temp, this.contador))
                for(var i = 0; i<this.middle; i++){
                    temp.childs[0].agregar(c.keys[i])
                    temp.childs[1].agregar(c.keys[i+this.middle+1])
                }
                if(c.childs.length > 0){
                    for(var i = 0; i<this.middle+1; i++){
                        temp.childs[0].childs[i] = c.childs[i]
                        temp.childs[0].childs[i].parent = temp.childs[0]
                        temp.childs[1].childs[i] = c.childs[i+this.middle+1]
                        temp.childs[1].childs[i].parent = temp.childs[1]
                    }
                    if(c.childs[0].childs.length>0){
                        temp.childs[0].childs[temp.childs[0].childs.length-1].siguiente = temp.childs[1].childs[0]
                    }
                }
                else{
                    temp.childs[0].siguiente = temp.childs[1]
                }
            }else{
                var claveMedia = temp.keys[this.middle]
                temp.parent.agregar(claveMedia)
                var index
                var tieneHijos = false
                if(temp.childs.length > 0){
                    tieneHijos = true
                }
                for(index = 0; index < temp.parent.keys.length; index++){
                    if(temp.parent.keys[index] == claveMedia){
                        break
                    }
                }
                for(let i = temp.parent.keys.length; i>index+1; i--){
                    temp.parent.childs[i] = temp.parent.childs[i-1]
                }
                var aux = temp
                this.contador++
                temp.parent.childs[index] = new Node(temp.parent, this.contador)
                this.contador ++
                temp.parent.childs[index+1] = new Node(temp.parent, this.contador)
                for(var i = 0; i<this.middle; i++){
                    console.log(aux.keys[i])
                    temp.parent.childs[index].agregar(aux.keys[i])
                    temp.parent.childs[index+1].agregar(aux.keys[i+this.middle+1])
                }
                temp = temp.parent.childs[index]

                if(tieneHijos){
                    for(var i = 0; i<this.middle+1; i++){
                        temp.parent.childs[index].childs[i] = aux.childs[i]
                        temp.parent.childs[index].childs[i].parent = temp.parent.childs[index]
                    }
                    for(var i = this.middle+1; i<this.grado+1; i++){
                        temp.parent.childs[index+1].childs[i-this.middle-1] = aux.childs[i]
                        temp.parent.childs[index+1].childs[i-this.middle-1].parent = temp.parent.childs[index+1]
                    } 
                    if(temp.parent.childs[0].childs.length>0){
                        if(index > 0){
                            temp.parent.childs[index-1].childs[temp.parent.childs[index-1].childs.length-1].siguiente = temp.parent.childs[index].childs[0]
                        }
                        temp.parent.childs[index].childs[temp.parent.childs[index].childs.length-1].siguiente = temp.parent.childs[index+1].childs[0]
                    }
                }else{
                    if(index > 0){
                        temp.parent.childs[index-1].siguiente = temp.parent.childs[index]
                    }
                    temp.parent.childs[index].siguiente = temp.parent.childs[index+1]
                    if(index< (temp.parent.childs.length-1)){
                        temp.parent.childs[index+1].siguiente = temp.parent.childs[index+2]
                    }
                }
            }
        }
        return temp
    }

    recorrerListaGraficar(temp){
        if(temp != null){
            if(temp.hijos.length == 0 && temp.siguiente!= null){
                this.recorrerLista(temp)
                return
            }else{
                if(temp.hijos.length>0){
                    this.recorrerListaGraficar(temp.hijos[0])
                }
                return
            }
        }
    }


    recorrerLista(temp){
        if(temp != null){
            if(temp.siguiente!= null){
                this.edges.push({from: temp.id, to: temp.siguiente.id, arrows: "to"})
                if(temp.siguiente.siguiente!= null){
                    this.recorrerLista(temp.siguiente)
                }
            }
        }
    }

    recorrerGraficar(temp){
        if(temp != null){
            var texto = ""
            var i
            for(let i = 0; i<temp.keys.length; i++){
                if(i == temp.keys.length-1){
                    texto = texto + temp.keys[i].toString();
                }else{
                    texto = texto + temp.keys[i].toString() + "|"
                }
            }
            this.arrayNodes.push({id: temp.id, label: texto, shape: "box"})
            texto = ""
            for(let i = 0; i<temp.hijos.length; i++){
                this.edges.push({from: temp.id, to: temp.hijos[i].id})
                this.recorrerGraficar(temp.hijos[i])
            }
        }
    }

}