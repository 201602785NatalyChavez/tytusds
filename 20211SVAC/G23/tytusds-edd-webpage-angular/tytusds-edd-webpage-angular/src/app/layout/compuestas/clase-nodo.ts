export default class Nodo {
    public valor:any
    public x:number
    public y:number
    public siguiente:Nodo
    public anterior:Nodo
    public arriba:Nodo
    public abajo:Nodo
    public izquierda:Nodo
    public derecha:Nodo
    public buscado:boolean
    constructor(valor,x,y){
        this.valor = valor
        this.x = x
        this.y = y
        this.siguiente = null
        this.anterior = null
        this.arriba = null
        this.abajo = null
        this.izquierda = null
        this.derecha = null
        this.buscado = false
    }
}