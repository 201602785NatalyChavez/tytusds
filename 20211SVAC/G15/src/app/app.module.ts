import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaDobleCircularComponent } from './components/listadobleCircular/listadobleCircular.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListaCircularSimpleComponent } from './components/lista-circular-simple/lista-circular-simple.component';
import { ColaComponent } from './components/cola/cola.component';
import { ColaPrioridadComponent } from './components/cola-prioridad/cola-prioridad.component';
import { ListaDobleComponent } from './components/lista-doble/lista-doble.component';
import { OrdenamientosComponent } from './components/ordenamientos/ordenamientos.component';
import { EstructuraslinealesComponent } from './components/estructuraslineales/estructuraslineales.component';
import { BurbujaComponent } from './components/burbuja/burbuja.component';
import { PilaComponent } from './components/pila/pila.component';
import { ListasimpleComponent } from './components/listasimple/listasimple.component'
import { BinaryTreeComponent } from './components/binary-tree/binary-tree.component';
import { EstructuraArboreaComponent } from './components/estructura-arborea/estructura-arborea.component'

import { InsertionSortComponent } from './components/insertion-sort/insertion-sort.component';
import { AVLComponent } from './components/avl/avl.component';
import { MetodorapidoComponent } from './components/metodorapido/metodorapido.component';
import { MetodoSeleccionComponent } from './components/metodo-seleccion/metodo-seleccion.component';
import { DispersaComponent } from './components/dispersa/dispersa.component';
import { CompuestasComponent } from './components/compuestas/compuestas.component';
import { MajorComponent } from './components/major/major.component';
import { CostoUniformeComponent } from './components/costo-uniforme/costo-uniforme.component';
import { CodigoHammingComponent } from './components/codigo-hamming/codigo-hamming.component';
import { GrafoDirigidoComponent } from './components/grafo-dirigido/grafo-dirigido.component';
import { GrafoNoDirigidoComponent } from './components/grafo-no-dirigido/grafo-no-dirigido.component';
import { RecubrimientoMinimoComponent } from './components/recubrimiento-minimo/recubrimiento-minimo.component';
import { EstructurasNoLinealesComponent } from './components/estructuras-no-lineales/estructuras-no-lineales.component';
import { AlgoritmoCodificacionComponent } from './components/algoritmo-codificacion/algoritmo-codificacion.component';
import { GrafosConexionComponent } from './components/grafos-conexion/grafos-conexion.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaDobleCircularComponent,
    ListaCircularSimpleComponent,

    ColaComponent,
    ColaPrioridadComponent,
    ListaDobleComponent,
    OrdenamientosComponent,
    EstructuraslinealesComponent,
    BurbujaComponent,
    PilaComponent,
    ListasimpleComponent,
    BinaryTreeComponent,
    EstructuraArboreaComponent,
    InsertionSortComponent,
    AVLComponent,
    MetodorapidoComponent,
    MetodoSeleccionComponent,
    DispersaComponent,
    CompuestasComponent,
    MajorComponent,
    CostoUniformeComponent,
    CodigoHammingComponent,
    GrafoDirigidoComponent,
    GrafoNoDirigidoComponent,
    RecubrimientoMinimoComponent,
    EstructurasNoLinealesComponent,
    AlgoritmoCodificacionComponent,
    GrafosConexionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
