import { Nodo } from './claseNodo'
export class Costo{
    public id:number
    public primero:Nodo
    public valorexistentes:any

    constructor(){
        this.id = 1
        this.primero = null
        this.valorexistentes = []
    }
    Insertar(valor,aristahacia,distancia){
        var nuevo = new Nodo(valor,aristahacia,distancia)
        console.log("SIGUIENTES: ",this.primero)
        console.log("DENTRO DE INSERTAR",valor,aristahacia,distancia)
        if(this.primero == null){
            this.primero = nuevo
        }else{
            let temporal = this.primero
            while(temporal.siguiente != null){
                if(temporal.valor == valor){
                    break
                }
                temporal = temporal.siguiente
            }
            if(temporal.valor == valor){
                temporal.aristas.push( [aristahacia,distancia] )
            }else{
                temporal.siguiente = nuevo
                nuevo.anterior = temporal
            }
        }
    }

    eliminar(valor,aristahacia){
        let temporal = this.primero
        while(temporal.valor != valor && temporal != null){
            temporal = temporal.siguiente
        }
        if(temporal != null){
            if(temporal.valor == valor){
                let tamaño = temporal.aristas.length
                for( let i = 0 ; i < tamaño ; i++){
                    if(temporal.aristas[i][0] == aristahacia){
                        temporal.aristas.splice(i,1)
                    }
                }
            }else{
    
            }
        }else return false

    }

    sucesoresmio(n){
        let temporal = this.primero
        console.log("DENTRO DE SUCESORES",temporal)
        let perdido = true
        while(perdido){
            console.log("TEMPORAL VALOR",temporal.valor)
            if(temporal.valor == n[0]) break
            temporal = temporal.siguiente
        }
        let i = 0
        let nuevoarreglo = []
        for( i ; i < temporal.aristas.length ; i++){
            nuevoarreglo.push( [temporal.aristas[i][0] ,n[1]+temporal.aristas[i][1],this.inc() ] )
        }
        return nuevoarreglo
    }
    
    costo(start, end){
        var dot = '{'
        var list = [[start,0,this.inc()]];
        let string = list[0][2].toString()
        dot+=string+' [label="'+list[0][0]+'"];'
        while (list.length > 0){
            var current = list.shift();
            let stringcurrent = current[2].toString()
            if (current[0] == end) {			
                dot += '}'
                return dot
            }
            var temp = this.sucesoresmio(current);
            console.log("TEMP",temp)
            //console.log("TEMP",temp)
            //let string2 = temp[2].toString()
            //console.log("STRING 2",temp[2])
            //temp.reverse();
            temp.forEach(val => dot+=val[2]+' [label="'+val[0]+'"];'+current[2]+'--'+val[2]+' [label="'+val[1]+'"] ;')
            list = temp.concat(list);
            list = list.sort( function(a,b) { return a[1] - b[1] });
        }
        dot += '}'
        return dot
    }

    inc() {
        return this.id++
    }

}