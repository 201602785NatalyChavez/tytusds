export default class  SelectionSortImpl{

    datosIniciales:any[];
    datosOrdenados:any[];
    bndDatosOrdenados:boolean;
    constructor(datos: any[]) {
        this.datosIniciales=datos;
        this.datosOrdenados=datos;
        this.bndDatosOrdenados=true;
        this.ordenarPorSeleccion();
    }
    getDatosOrdenados(){
        return this.datosOrdenados;
    }
    ordenarPorSeleccion() {    
        let arr=   this.datosOrdenados;
        for(let i = 0; i < arr.length; i++) {
            let min=i;
            for(let x = i + 1; x < arr.length; x++) {            
                if (arr[min] > arr[x]) {              
                    min = x;
                }            
            }
            console.log(arr.toString());
            [arr[min],arr[i]] = [arr[i],arr[min]] 
        }
        return arr;
    }
}