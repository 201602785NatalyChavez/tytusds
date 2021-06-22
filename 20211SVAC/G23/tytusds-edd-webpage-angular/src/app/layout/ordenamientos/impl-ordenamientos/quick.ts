export default class QuickSortImpl{
    datosIniciales:any[];
    datosOrdenados:any[];
    bndDatosOrdenados:boolean;
    constructor(datos: any[]) {
        this.datosIniciales=datos;
        this.datosOrdenados=datos;
        this.bndDatosOrdenados=true;
        this.ordenarPorQuickSort(this.datosOrdenados,0,this.datosOrdenados.length-1)
    }
    getDatosOrdenados(){
        return this.datosOrdenados;
    }
    
 swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
 partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], 
        i       = left, 
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            this.swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

ordenarPorQuickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = this.partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            this.ordenarPorQuickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            this.ordenarPorQuickSort(items, index, right);
        }
    }
    return items;
}
}