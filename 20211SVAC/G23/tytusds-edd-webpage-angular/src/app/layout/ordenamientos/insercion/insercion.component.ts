import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-insercion',
  templateUrl: './insercion.component.html',
  styleUrls: ['./insercion.component.css'],
  animations: [routerTransition()]
})
export class InsercionComponent implements OnInit {
  arreglo:any = []
  data:any 
  barChartType: string
  barChartLegend: boolean
  barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  }
  barChartLabels: string[] = ['1',
  '2',
  '3',
  '4',
  '5']
  barChartData:any [] = [
    { data: [85,
      25,
      55,
      40,
      15], label: 'Datos leídos' }
]
  
  
  constructor() { }
  
  ngOnInit(): void {
    this.arreglo.push(8)
    this.arreglo.push(16)
    this.arreglo.push(5)
    this.arreglo.push(11)
    this.arreglo.push(36)
    this.arreglo.push(1)
    this.arreglo.push(26)
    this.arreglo.push(10)
    this.arreglo.push(15)
    this.barChartType = 'bar'
    this.barChartLegend = true
    
    
    
  }
  // bar chart

  graficar(){

  }
  insercion(){
    let i,j,aux
    for(i = 1; i < this.arreglo.length(); i++){
        aux = this.arreglo[i]
        j = i-1
        while(j >= 0 && this.arreglo[j] > aux){
            this.arreglo[j+1] = this.arreglo[j]
            j = j-1
        }
        this.arreglo[j+1] = aux
    }
    console.log("ARREGLO ORDENADO POR INSERCION")

  }

}
