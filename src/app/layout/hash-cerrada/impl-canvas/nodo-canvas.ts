export class NodoTablaHash{
    public animacionFase1Terminada:boolean;
    public animacionFase2Terminada:boolean;
    public animacionTerminada:boolean;
    xInicial=10;yInicial=20;xFinal=0;yFinal=0;contadorFinal=0;
    constructor( private ctx: CanvasRenderingContext2D,
        private valor:string, 
        private valorCompleto:string,
        private colorFondo:string, private colorTexto:string,
        private coordXTablero:number, private coordYTablero:number,
        private anchoNodo:number, private altoNodo:number,
        private esBusqueda:boolean, private encontrada:boolean,
        private borrarNodo:boolean, private actualizarNodo:boolean,
        private valorNuevo:string) { 
        this.xFinal=ctx.canvas.width/2;
        this.yFinal=this.yInicial;
        this.animacionTerminada=false;
        this.animacionFase1Terminada=false;
        this.animacionFase2Terminada=false;
    }
    animar(){
        //Fase 1 es mover el valor hacia la mitad de la pantalla, al terminar se muestra el resultado
        //de la funcion hash
        if(!this.animacionFase1Terminada){
            //dibujar texto
            this.ctx.fillStyle=this.colorTexto;
            this.ctx.fillText(this.valor, this.xInicial,this.yInicial);
            //borrar texto previo
            this.ctx.fillStyle=this.colorFondo;
            this.ctx.fillText(this.valor, this.xInicial-5,this.yInicial);
            if(this.xInicial<this.xFinal)
                this.xInicial+=5;
            else{
                this.animacionFase1Terminada=true;
                this.ctx.fillStyle=this.colorFondo;
                this.ctx.fillText(this.valor, this.xInicial,this.yInicial);
                this.ctx.fillStyle=this.colorTexto;
                this.ctx.fillText(this.valorCompleto, this.xInicial+25,this.yInicial);
                if(this.esBusqueda){
                    var textoEncontrado="No encontrado";
                    if(this.encontrada) textoEncontrado="Encontrado";
                    this.ctx.fillText("Valor "+textoEncontrado, this.xInicial+150,this.yInicial);
                }
                return;
            }
        }
        //Fase 2 es marcar el valor a insertar en el tablero
        if(this.animacionFase1Terminada&&!this.animacionFase2Terminada){
            this.animacionFase2Terminada=true;
            if(this.esBusqueda&&!this.encontrada) return;
            if(this.esBusqueda&&this.encontrada&&this.borrarNodo)
                this.ctx.fillStyle = this.colorFondo;
            else if(!this.esBusqueda) 
                this.ctx.fillStyle = 'red';
            this.ctx.strokeStyle = 'red';
            this.ctx.moveTo(1+this.coordXTablero, this.coordYTablero+1);
            this.ctx.lineTo(1+this.coordXTablero+this.anchoNodo-2, this.coordYTablero+1);
            this.ctx.lineTo(1+this.coordXTablero+this.anchoNodo-2, this.coordYTablero+1+this.altoNodo-2);
            this.ctx.lineTo(1+this.coordXTablero    , this.coordYTablero+1+this.altoNodo-2);
            this.ctx.lineTo(1+this.coordXTablero, this.coordYTablero+1);
            if(!this.esBusqueda||(this.esBusqueda&&this.encontrada))
                this.ctx.fillText( this.valor, 21+this.coordXTablero+this.anchoNodo/2-2, this.coordYTablero+this.altoNodo/2);
            return;
        }
        if(this.animacionFase2Terminada){
            this.animacionTerminada=true;
            if(this.encontrada&&( this.borrarNodo||this.actualizarNodo ) ){
                this.ctx.fillStyle  = this.colorFondo;
                this.ctx.fillText( this.valor, 21+this.coordXTablero+this.anchoNodo/2-2, this.coordYTablero+this.altoNodo/2);
                if(this.actualizarNodo){
                    this.ctx.fillStyle  = 'red';
                    this.ctx.fillText( this.valorNuevo, 21+this.coordXTablero+this.anchoNodo/2-2, this.coordYTablero+this.altoNodo/2);
                }

            }
        }
    }

}