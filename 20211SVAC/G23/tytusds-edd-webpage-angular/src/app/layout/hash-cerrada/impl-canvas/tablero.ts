export class Tablero{
    terminoAnimacion:boolean=false;
    xInicial:number;
    yInicial:number;
    public listaCoordenadasX=[];
    public listaCoordenadasY=[];
    constructor(private ctx: CanvasRenderingContext2D,
        private totalNodos:number,
        private anchoNodo:number,
        private altoNodo:number,
        private colorLineas:string, private colorFondo:string) { 
            this.listaCoordenadasX=[];
            this.listaCoordenadasY=[];
            this.calcularCoords();
            this.dibujarTablero();
        }
    calcularCoords(){
        this.xInicial=20;
        this.yInicial=80;
    }
    dibujarTablero(){
        this.ctx.fillStyle = this.colorLineas;
        this.ctx.strokeStyle= this.colorLineas;
        this.ctx.textAlign = "center";
        let separacion=0,contadorColumnas=0;
        this.ctx.beginPath();
        for(let i = 0 ; i< this.totalNodos; i++){
            separacion=contadorColumnas*120;
            if(20+this.xInicial*contadorColumnas+this.anchoNodo+separacion>=this.ctx.canvas.width){
                contadorColumnas=0;
                this.yInicial=this.yInicial+20+this.altoNodo;
                separacion=contadorColumnas*120;
            }
            this.ctx.moveTo(20+this.xInicial*contadorColumnas+separacion, this.yInicial);
            this.listaCoordenadasX.push(20+this.xInicial*contadorColumnas+separacion);
            this.listaCoordenadasY.push(this.yInicial);
            this.ctx.lineTo(20+this.xInicial*contadorColumnas+this.anchoNodo+separacion, this.yInicial);
            this.ctx.lineTo(20+this.xInicial*contadorColumnas+this.anchoNodo+separacion, this.yInicial+this.altoNodo);
            this.ctx.lineTo(20+this.xInicial*contadorColumnas+separacion, this.yInicial+this.altoNodo);
            this.ctx.lineTo(20+this.xInicial*contadorColumnas+separacion, this.yInicial);
            this.ctx.fillText( (i).toString(), 20+this.xInicial*contadorColumnas+15+separacion, this.yInicial+this.altoNodo/2);
            contadorColumnas++;
        }
        this.ctx.stroke();
    }
    borrarSelecciones(){
        this.ctx.strokeStyle = this.colorFondo;
        this.ctx.beginPath();
        for(let i = 0; i<this.listaCoordenadasX.length; i++ ){
            this.ctx.moveTo(1+this.listaCoordenadasX[i], this.listaCoordenadasY[i]+1);
            this.ctx.lineTo(1+this.listaCoordenadasX[i]+this.anchoNodo-2, this.listaCoordenadasY[i]+1);
            this.ctx.lineTo(1+this.listaCoordenadasX[i]+this.anchoNodo-2, this.listaCoordenadasY[i]+1+this.altoNodo-2);
            this.ctx.lineTo(1+this.listaCoordenadasX[i]    , this.listaCoordenadasY[i]+1+this.altoNodo-2);
            this.ctx.lineTo(1+this.listaCoordenadasX[i], this.listaCoordenadasY[i]+1);
        }
        this.ctx.stroke();
    }
}