import { Component, OnInit } from '@angular/core';
import { OrdenamientoSeleccion } from './ts/seleccion';
import { DocumentoService } from '../../services/documento.service';
import { Chart } from 'node_modules/chart.js';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  orden: OrdenamientoSeleccion;
  arreglo: any = [];
  iteraciones: any = [];
  tiempo = 3000;
  index = 0;

  constructor(private documentoService: DocumentoService) {
    this.orden = new OrdenamientoSeleccion();
  }

  ngOnInit(): void {}

  getOpciones(opciones: any): void {
    this.tiempo = opciones['velocidadOrdenamientos'];
  }

  graficar(): void {
    if (this.iteraciones[this.index] === undefined) {
      return;
    }
    let colores: string[] = [];
    this.iteraciones[this.index].forEach( ite => {
      colores.push(`rgba(${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)},${Math.floor(Math.random() * 250)}, 1)`);
    });
    var myChart = new Chart('myChart', {
      type: 'bar',
      data: {
          labels: this.iteraciones[this.index],
          datasets: [{
              label: 'Ordenamiento de Seleccion',
              data: this.iteraciones[this.index],
              backgroundColor: colores,
              borderColor: colores,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });
    this.index += 1;
    setTimeout(() => {
      this.graficar();
    }, this.tiempo);
    
  }

  getDocumento(documento: any): void {
    this.documentoService.getDocumento(documento).then( contenido => {
      this.arreglo = this.orden.ordenar(contenido['valores'], contenido['cuenta']);
      this.imprimirIteraciones();
    });
  }

  imprimirIteraciones(): void {
    this.arreglo.forEach( (arr: any) => {
      const nuevoArr = arr.split(',');
      let final: number[] = [];
      nuevoArr.forEach( (valor: string) => {
        final.push(parseInt(valor, 10));
      });
      this.iteraciones.push(final);
    });
    this.graficar();
  }

  guardar(): void {
    if (this.iteraciones.length === 0){
      return;
    }
    const contenido: any = {
      categoria: "Ordenamiento",
      nombre: "De seleccion",
      valores: this.iteraciones[this.iteraciones.length - 1]
    };
    let blob = new Blob([JSON.stringify(contenido)], {type: 'json;charset=utf-8'});
    saveAs(blob, 'ordenamiento-seleccion.json');
  }

}
