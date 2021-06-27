import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashAbiertaComponent } from './hash-abierta.component';

const routes: Routes = [
    {
        path: '',
        component: HashAbiertaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HashAbiertaRoutingModule {}
