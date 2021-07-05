import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
   
        {
            path: '',
            component: LayoutComponent,
            children: [
                { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
                {
                    path: 'dashboard',
                    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
                },
                {
                    path: 'listas-edd/:idTipoLista',
                    loadChildren: () => import('./estructuras-lineales/listas-edd.module').then((m) => m.ListasEddModule)
                }
                ,
                {
                    path: 'ordenamientos/:idOrdenamiento',
                    loadChildren: () => import('./ordenamientos/ordenamientos.module').then((m) => m.OrdenamientosModule)
                }
                ,
                {
                    path: 'seleccion',
                    loadChildren: () => import('./ordenamientos/seleccion/seleccion.module').then((m) => m.SeleccionModule)
                }
                ,
                {
                    path: 'insercion',
                    loadChildren: () => import('./ordenamientos/insercion/insercion.module').then((m) => m.InsercionModule)
                }
                ,
                {
                    path: 'quick',
                    loadChildren: () => import('./ordenamientos/quick/quick.module').then((m) => m.QuickModule)
                }
                ,
                {
                    path: 'Abb',
                    loadChildren: () => import('./estructuras-arboreas/abb/abb.module').then((m) => m.AbbModule)
                }
                ,
                {
                    path: 'Avl',
                    loadChildren: () => import('./estructuras-arboreas/avl/avl.module').then((m) => m.AvlModule)
                }
                ,
                {
                    path: 'B',
                    loadChildren: () => import('./estructuras-arboreas/b/b.module').then((m) => m.BModule)
                }
                ,
                {
                    path: 'BPlus',
                    loadChildren: () => import('./estructuras-arboreas/bplus/bplus.module').then((m) => m.BplusModule)
                }
                ,
                {
                    path: 'Merkle',
                    loadChildren: () => import('./estructuras-arboreas/merkle/merkle.module').then((m) => m.MerkleModule)
                }
                ,
                {
                    path: 'hash-cerrada',
                    loadChildren: () => import('./hash-cerrada/hash-cerrada.module').then((m) => m.HashCerradaModule)
                }
                ,
                {
                    path: 'hash-abierta',
                    loadChildren: () => import('./hash-abierta/hash-abierta.module').then((m) => m.HashAbiertaModule)
                }
                ,
                {
                    path: 'matriz',
                    loadChildren: () => import('./compuestas/matrices/matrices.module').then((m) => m.MatricesModule)
                }
                ,
                {
                    path: 'row',
                    loadChildren: () => import('./compuestas/row/row.module').then((m) => m.RowModule)
                }
                ,
                {
                    path: 'low',
                    loadChildren: () => import('./compuestas/low/low.module').then((m) => m.LowModule)
                }
                ,
                {
                    path: 'huffman',
                    loadChildren: () => import('.//huffman/huffman.module').then((m) => m.HuffmanModule)  
                }
                ,
                {
                    path: 'feistel',
                    loadChildren: () => import('./feistel/feistel.module').then((m) => m.FeistelModule)
                }
                ,
                {
                    path: 'lzw',
                    loadChildren: () => import('./lzw/lzw.module').then((m) => m.LzwModule)
                }
                ,
                {
                    path: 'grafos-recorridos/:idTipoRecorrido',
                    loadChildren: () => import('./grafos-recorridos/grafos-recorridos.module').then((m) => m.GrafosRecorridosModule)
                }
                ,
                {
                    path: 'codigo-hamming',
                    loadChildren: () => import('./codigo-hamming/codigo-hamming.module').then((m) => m.CodigoHammingModule)
                }
                
              
            ]
        }
    ];
    
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
