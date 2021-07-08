export class Nodo{

    public valor:any
    public aristas:any
    public siguiente:Nodo
    public anterior:Nodo

    constructor(valor,aristahacia,distancia){
        this.valor = valor
        this.aristas = [[aristahacia,distancia]]//[valor,ditancia]
        this.siguiente = null
        this.anterior = null
    }
}