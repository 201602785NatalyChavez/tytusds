import Nodo from './clase-nodo'
import Lista from './clase-lista'

export class Matriz{

    public lista_H:any
    public lista_V:any
    public dot:string
    public datagraph:any
    public edgegraph:any
    public RowOrder:Array<any>
    public ColOrder:Array<any>
    public maxparaCanvas:any
    public yaingresados:any

    constructor(){
        this.dot = ''
        this.datagraph = []
        this.edgegraph = []
        this.lista_H = new Lista()
        this.lista_V = new Lista()
        this.RowOrder = []
        this.ColOrder = []
        this.maxparaCanvas = 0
        this.yaingresados = []//[valor,x,y]
    }

    insertar(valor,x,y){
        //console.log("VALOR",valor,"X",x,"Y",y)
        let nodox = this.lista_H.busqueda(x)
        let nodoy = this.lista_V.busqueda(y)
        if(nodox == null && nodoy == null){
            this.caso1(valor,x,y)
        }else if(nodox == null && nodoy != null){
            this.caso2(valor,x,y)
        }else if(nodox != null && nodoy == null){
            this.caso3(valor,x,y)
        }else{
            this.caso4(valor,x,y)
        }
    }

    eliminar(x,y){
        let nodox = this.lista_H.busqueda(x)
        //let nodoy = this.lista_V.busqueda(y)
        
        while(nodox.valor != x){
         nodox = nodox.siguiente
        }
        if(nodox == null){
            return false
        } 
        
        else{
            let aux = nodox.abajo
            if(aux == null) return false
            else{
                while(aux.y != y){
                    aux = aux.abajo
                }
                if(aux == null) return false
                else{
                    if(aux.arriba != null) aux.arriba.abajo = aux.abajo
                    if(aux.izquierda != null) aux.izquierda.derecha = aux.derecha
                    
                    if(aux.derecha == null){
    
                    }else{
                        aux.derecha.izquierda = aux.izquierda
                    }if(aux.abajo == null){
    
                    }else{
                        aux.abajo.arriba = aux.arriba
                    }
                }

            }
        }
       /* let i = 0
        for ( i ; i < this.yaingresados.length ; i++){
            if(this.yaingresados[i][1] == x  &&  this.yaingresados[i][2] == y ){
                this.yaingresados.splice(i,1)
                break
            }
        }
        console.log("YA INGRESADOS EN ELIMINAR",this.yaingresados)*/
    }

    actualizar(valor,x,y){
        let nodox = this.lista_H.busqueda(x)

        while(nodox.valor != x){
            nodox = nodox.siguiente
           }
        let aux = nodox.abajo
        if(nodox == null) return false
        else{
            while(aux.y != y){
                aux = aux.abajo
            }
            if(aux == null) return false
            else aux.valor = valor                   
            
        }
    }

    buscar(x,y){
        let nodox = this.lista_H.busqueda(x)

        while(nodox.valor != x){
            nodox = nodox.siguiente
           }
           if(nodox == null){
               return false
            } 
            else{
            let aux = nodox.abajo
            if(aux != null){
                while(aux.y != y){
                    aux = aux.abajo
                }
                if(aux == null) return false
                else aux.buscado = true             
            }else return false
            
        }

    }
    
    repetidos(x,y){
        let nodox = this.lista_H.primero
        if(nodox == null) return
        while(nodox.valor != x){
            nodox = nodox.siguiente
           }
           if(nodox == null) return false
           else{
            let aux = nodox.abajo
            while(aux.y != y){
                aux = aux.abajo
            }
            if(aux == null) return false
            else return true
                       
            
        }


    }

    caso1(valor,x,y){
        this.lista_H.insertar(x)
        this.lista_V.insertar(y)

        let nodox = this.lista_H.busqueda(x)
        let nodoy = this.lista_V.busqueda(y)

        let nuevo = new Nodo(valor,x,y)
       // nuevo.buscado = true
        nodox.abajo = nuevo
        nuevo.arriba = nodox

        nodoy.derecha = nuevo
        nuevo.izquierda = nodoy
    }

    caso2(valor,x,y){
        this.lista_H.insertar(x)

        let nodox = this.lista_H.busqueda(x)
        let nodoy = this.lista_V.busqueda(y)

        let bandera = false

        let nuevo = new Nodo(valor,x,y)
        //nuevo.buscado = true
        let aux = nodoy.derecha
        let cabecera = 0

        while(aux != null){
            cabecera = aux.x
            if(cabecera < x){
                aux = aux.derecha
            }else{
                nuevo.derecha = aux
                nuevo.izquierda = aux.izquierda
                aux.izquierda.derecha = nuevo
                aux.izquierda = nuevo
                bandera = true
                break
            }
        }
        if(bandera == false){
            aux = nodoy.derecha
            if(aux != null){
                while(aux.derecha != null){
                    aux = aux.derecha
                }
                nuevo.izquierda = aux
                aux.derecha = nuevo
            }else{
                nuevo.izquierda = aux
                nodoy.derecha = nuevo
            }
        }

        nodox.abajo = nuevo
        nuevo.arriba = nodox

    }
    caso3(valor,x,y){
        this.lista_V.insertar(y)

        let nodox = this.lista_H.busqueda(x)
        let nodoy = this.lista_V.busqueda(y)

        let bandera = false

        let nuevo = new Nodo(valor,x,y)
       // nuevo.buscado = true
        let aux = nodox.abajo
        let cabecera = 0

        while(aux != null){
            cabecera = aux.y
            if(cabecera < y){
                aux = aux.abajo
            }else{
                nuevo.abajo = aux
                nuevo.arriba = aux.arriba
                aux.arriba.abajo = nuevo
                aux.arriba = nuevo
                bandera = true
                break
            }
        }
        if(bandera == false){
            aux = nodox.abajo
            if(aux != null){
                while(aux.abajo != null){
                    aux = aux.abajo
                }
                aux.abajo = nuevo
                nuevo.arriba = aux
            }else{
                nuevo.arriba = aux
                nodox.abajo = nuevo
            }
        }

        nodoy.derecha = nuevo
        nuevo.izquierda = nodoy 

    }
    caso4(valor,x,y){
        let nodox = this.lista_H.busqueda(x)
        let nodoy = this.lista_V.busqueda(y)

        let bandera = false

        let nuevo = new Nodo(valor,x,y)
       // nuevo.buscado = true
        let aux = nodoy.derecha
        let cabecera = 0

        while(aux != null){
            cabecera = aux.x
            if(cabecera < x){
                aux = aux.derecha
            }else{
                nuevo.derecha = aux
                nuevo.izquierda = aux.izquierda
                aux.izquierda.derecha = nuevo
                aux.izquierda = nuevo
                bandera = true
                break
            }
        }
        //if(aux != null){
            if(bandera == false){
                //console.log("DENTRO DE BAndERA",aux)
                aux = nodoy.derecha
                if(aux != null){
                    while(aux.derecha != null){
                        aux = aux.derecha
                    }
                    nuevo.izquierda = aux
                    aux.derecha = nuevo
                }else{
                    nuevo.izquierda = nodoy
                    nodoy.derecho = nuevo
                }
            }
       // }else{
         //   nuevo.izquierda = nodoy
           // nodoy.derecha = nuevo        }

        bandera = false
        aux = nodox.abajo
        cabecera = 0

        while(aux != null){
            cabecera = aux.y
            if(cabecera < y){
                aux = aux.abajo
            }else{
                nuevo.abajo = aux
                nuevo.arriba = aux.arriba
                aux.arriba.abajo = nuevo
                aux.arriba = nuevo
                bandera = true
                break
            }
        }

       // if(aux != null){

            if(bandera == false){
                aux = nodox.abajo
                if(aux != null){
                    while(aux.abajo != null){
                        aux = aux.abajo
                    }
                    aux.abajo = nuevo
                    nuevo.arriba = aux

                }else{
                    nodox.abajo = nuevo
                    nuevo.arriba = nodox
                }
            }
       // }else{
         //   nuevo.arriba = nodox
           // nodox.abajo = nuevo
        //}
    }

    estaVaciaH(){
        if(this.lista_H.primero != null) return false
        return true
    }
    estaVaciaV(){
        if(this.lista_V.primero != null) return false
        return true
    }
    obtenerTamH(){
        let cabecera = this.lista_H.primero
        //console.log(cabecera.valor)
        let tamaño = 0
        while(cabecera != null ){
            tamaño += 1
            cabecera = cabecera.siguiente
        } 
        return tamaño
    }
    
    obtenerTamV(){
        let cabecera = this.lista_V.primero
        //console.log(cabecera.valor)
        let tamaño = 0
        while(cabecera != null ){
            tamaño += 1
            cabecera = cabecera.siguiente
        } 
        return tamaño
    }

    imprimirV(ctx){
        let cabecera = this.lista_V.primero
        let aux
        let x = 10
        let y = 10
        let xflecha = [70,30]
        //console.log("ESTAMOS EN v")
        while(cabecera != null){
            aux = cabecera.derecha
           // console.log("AUX -------------",aux.valor,aux.x,aux.y)
            if(cabecera.derecha != null){

                let por = cabecera.derecha.x
                let poy = cabecera.valor
                //console.log("PROBAnDO",aux.x)
                //console.log("PROBAnDO Y",aux.y)
                //console.log("PROBAnDO VALOR",aux.valor)
                xflecha[0] = 70+(80*por)
                //console.log("PROBAnDO Valor de Y",xflecha[1])
                
                while(aux != null){
                    if(aux.derecha != null){
                        let porcual = aux.derecha.x
                        if( ( porcual - aux.x) == 1 ){
                            ctx.moveTo(xflecha[0],xflecha[1])
                            ctx.lineTo(xflecha[0]+20,xflecha[1])
                            ctx.lineTo(xflecha[0]+15,xflecha[1]+10)
                            ctx.lineTo(xflecha[0]+20,xflecha[1])
                            ctx.lineTo(xflecha[0]+15,xflecha[1]-10)
                            ctx.lineTo(xflecha[0]+20,xflecha[1])
                            ctx.stroke()
                            xflecha[0] += 80
                            this.RowOrder.push(aux.valor,aux.x,aux.y)
                            
                        }else{
                            let diferencia = aux.derecha.x - aux.x
                            ctx.moveTo(xflecha[0],xflecha[1])
                            ctx.lineTo(xflecha[0]+(diferencia*80)-60,xflecha[1])
                            ctx.lineTo(xflecha[0]+(diferencia*80)-70,xflecha[1]+10)
                            ctx.lineTo(xflecha[0]+(diferencia*80)-60,xflecha[1])
                            ctx.lineTo(xflecha[0]+(diferencia*80)-70,xflecha[1]+-10)
                            ctx.lineTo(xflecha[0]+(diferencia*80)-60,xflecha[1])
                            ctx.stroke()
                            xflecha[0] += diferencia*80
                            this.RowOrder.push(aux.valor,aux.x,aux.y)
    
                        }
                    }
                    //console.log("valor:",aux.valor,"X:",aux.x,"Y:",aux.y)
                    aux.buscado = false
                    aux = aux.derecha
                }
                cabecera = cabecera.siguiente
                if(cabecera != null){
                    if(cabecera.derecha != null){
                        let porcual = cabecera.derecha.x
                        xflecha[0] = 70+(80*(porcual-1))
                        x = 10+(60*porcual)
                        //xflecha[1] += 60
                        
                    }else{
                        xflecha[1] += 60

                    }
                    if((cabecera.valor - cabecera.anterior.valor) == 1){
                        //xflecha[0] = 70
                        x += 80
                        xflecha[0] = 70  
                      //  xflecha[1] += 60  
                    }else{
                        let diferencia = cabecera.valor - cabecera.anterior.valor
                        y += diferencia*80
                        xflecha[1] +=(diferencia*60)-60  
                        xflecha[0] = 70  
                    }
                }
                xflecha[0] = 70
                xflecha[1] += 60
            }else{
                console.log("CAMBIO VALOR DE CABECERA",cabecera.valores,"A",cabecera.siguiente.valor)
                //let diferencia 
                xflecha[1] += 120
                xflecha[0] = 70
                cabecera = cabecera.siguiente
            }
        }
    }

    imprimirH(ctx){
        let cabecera = this.lista_H.primero
        let aux
        let x = 10
        let y = 10
        let xflecha = [70,30]
        let yflecha = [35,50]
        while(cabecera != null){
            aux = cabecera.abajo
           // console.log("AUX---------------",aux.valor,aux.x,aux.y)
            if(cabecera.abajo != null){

                let por = cabecera.abajo.y
                yflecha[1] =50+(60*por)
                y = 10+(60*por)
                while(aux != null){
                    if(aux.buscado == true){
                        ctx.fillStyle ="green"
                    }else{
                        ctx.fillStyle = "black"
                    }
                    ctx.moveTo(x,y)
                    ctx.lineTo(x,y+40)
                    ctx.lineTo(x+60,y+40)
                    ctx.lineTo(x+60,y)
                    ctx.lineTo(x,y)
                    ctx.stroke()
                    ctx.fillText(aux.valor.toString(),x+2,y+10)
                    ctx.fillText(aux.x.toString()+","+ aux.y.toString(),x+15,y+30)
                    console.log("VALOR",aux.valor,"X",aux.x,"Y",aux.y)
                    this.yaingresados.push( [aux.valor,aux.x,aux.y] )
                    
                    if(aux.abajo != null){
                        //console.log(aux.abajo)
                        let porcual = aux.abajo.y
                        if((porcual - aux.y) == 1 ){
                            ctx.moveTo(yflecha[0],yflecha[1])
                            ctx.lineTo(yflecha[0],yflecha[1]+20)
                            ctx.lineTo(yflecha[0]+10,yflecha[1]+15)
                            ctx.lineTo(yflecha[0],yflecha[1]+20)
                            ctx.lineTo(yflecha[0]-10,yflecha[1]+15)
                            ctx.lineTo(yflecha[0],yflecha[1]+20)
                            ctx.stroke()
                            yflecha[1] += 60
                            y += 60
                            if(y > this.maxparaCanvas) this.maxparaCanvas = y
    
                        }else{
                            //console.log("DIFERENCiA",aux)
                            let diferencia = aux.abajo.y - aux.y
                            //console.log("DIFERENCIA",diferencia)
                            ctx.moveTo(yflecha[0],yflecha[1])
                            ctx.lineTo(yflecha[0],yflecha[1]+(diferencia*60)-40)
                            ctx.lineTo(yflecha[0]+10,yflecha[1]+(diferencia*60)-45)
                            ctx.lineTo(yflecha[0],yflecha[1]+(diferencia*60)-40)
                            ctx.lineTo(yflecha[0]-10,yflecha[1]+(diferencia*60)-45)
                            ctx.lineTo(yflecha[0],yflecha[1]+(diferencia*60)-40)
                            ctx.stroke()
                            yflecha[1] += diferencia*60
                            y += diferencia*60
                            if(y > this.maxparaCanvas) this.maxparaCanvas = y
                            //console.log("VALOR DENTRO DEL ELSE",aux.valor)
                        }
                    }                
                    this.ColOrder.push(aux.valor,aux.x,aux.y)
                    //console.log("valor:",aux.valor,"X:",aux.x,"Y:",aux.y)
                    aux.buscado = false
                    aux = aux.abajo
                }
                cabecera = cabecera.siguiente
                if(cabecera != null){
                    if(cabecera.abajo != null){
                        let porcual = cabecera.abajo.y
                        yflecha[1] = 50+(60*porcual)
                        y = 10+(60*porcual)
    
                    }
                    if((cabecera.valor - cabecera.anterior.valor) == 1){
                        x += 80
                    }else{
                        let diferencia = cabecera.valor - cabecera.anterior.valor
                        x += diferencia*80
                        yflecha[0] += diferencia*40
                    }
                }
                yflecha[1] += 60
                yflecha[0] += 80
            }else{
                yflecha[0] += 80
                x += 80
                y += 60
                cabecera = cabecera.siguiente
            }
        }
        console.log(this.yaingresados)

    }

    ParaCol(ctx){
        let cabecera = this.lista_H.primero
        let aux
        let desdedonde = this.maxparaCanvas
        let max = this.maxparaCanvas + 70
        let x = 10
        ctx.fillStyle = "red"
        ctx.font= "bold italic 20px Times New Roman"
        ctx.fillText("Mostrando matriz en orden por columnas",x+2,max)
        ctx.font= "bold italic 10px Times New Roman"
        let y = this.maxparaCanvas+120
        while(cabecera != null){
            aux = cabecera.abajo
            if(cabecera.abajo != null){

                while(aux != null){
                    if( x > 1200){
                        x = 10
                        y += 80
                    }
                    ctx.moveTo(x,y)
                    ctx.lineTo(x,y+40)
                    ctx.lineTo(x+60,y+40)
                    ctx.lineTo(x+60,y)
                    ctx.lineTo(x,y)
                    ctx.stroke()
                    ctx.fillText(aux.valor.toString(),x+2,y+10)
                    ctx.fillText(aux.x.toString()+","+ aux.y.toString(),x+15,y+30)
                    console.log("valor:",aux.valor,"X:",aux.x,"Y:",aux.y)
                    aux = aux.abajo
                    x += 60
                }
            }else{
                
            }
            cabecera = cabecera.siguiente
        }
    }

    ParaRow(ctx){
        let cabecera = this.lista_V.primero
        let aux
        let desdedonde = this.maxparaCanvas
        let max = this.maxparaCanvas + 70
        let x = 10
        ctx.fillStyle = "red"
        ctx.font= "bold italic 20px Times New Roman"
        ctx.fillText("Mostrando matriz en orden por filas",x+2,max)
        ctx.font= "bold italic 10px Times New Roman"
        let y = this.maxparaCanvas+120
        //ctx.fillText(aux.x.toString()+","+ aux.y.toString(),x+15,this.maxparaCanvas+30)
        while(cabecera != null){
            aux = cabecera.derecha
            if(cabecera.derecha != null){
                while(aux != null){
                    if( x > 1200){
                        x = 10
                        y += 80
                    }
                    ctx.moveTo(x,y)
                    ctx.lineTo(x,y+40)
                    ctx.lineTo(x+60,y+40)
                    ctx.lineTo(x+60,y)
                    ctx.lineTo(x,y)
                    ctx.stroke()
                    ctx.fillText(aux.valor.toString(),x+2,y+10)
                    ctx.fillText(aux.x.toString()+","+ aux.y.toString(),x+15,y+30)
                    console.log("valor:",aux.valor,"X:",aux.x,"Y:",aux.y)
                    aux.buscado = false
                    aux = aux.derecha
                    x += 60
                }

            }else{

            }
            cabecera = cabecera.siguiente
        }
    }

}

/*let matriz = new Matriz()
matriz.insertar(0,0,0)
matriz.insertar(1,1,0)
matriz.insertar(2,1,1)
matriz.insertar(3,2,1)
matriz.insertar(4,2,2)
matriz.insertar(5,2,3)
matriz.insertar(6,2,4)
matriz.insertar(7,2,5)
matriz.insertar(8,3,1)
matriz.insertar(9,5,3)
matriz.insertar(10,5,5)

matriz.imprimirH()
console.log("---------------------------")
matriz.imprimirV()*/