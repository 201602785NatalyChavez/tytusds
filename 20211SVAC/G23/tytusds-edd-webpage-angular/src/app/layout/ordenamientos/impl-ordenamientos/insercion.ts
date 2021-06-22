export default class  InsercionSortImpl{

    datosIniciales:any[];
    datosOrdenados:any[];
    bndDatosOrdenados:boolean;
    constructor(datos: any[]) {
        this.datosIniciales=datos;
        this.datosOrdenados=datos;
        this.bndDatosOrdenados=true;
        this.ordenarPorInsercion();
    }
    getDatosOrdenados(){
        return this.datosOrdenados;
    }
    ordenarPorInsercion(){
        let i,j,aux
        let array = this.datosOrdenados
        console.log("ARRAY",array)
        for(i = 1; i < array.length; i++){
        aux = array[i]
        console.log("AUX",aux)
            j = i-1
            while(j >= 0 && array[j] > aux){
            array[j+1] = array[j]
                j = j-1
            }
            //console.log("array[j+1]",this.barChartData[0].data[j+1])
            array[j+1] = aux
            
        }
        console.log("ARREGLO ORDENADO POR INSERCION")
    }
}