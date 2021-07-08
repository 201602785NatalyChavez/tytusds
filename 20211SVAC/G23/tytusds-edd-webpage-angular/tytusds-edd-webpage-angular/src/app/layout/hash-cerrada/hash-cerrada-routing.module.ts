import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashCerradaComponent } from './hash-cerrada.component';

const routes: Routes = [
    {
        path: '',
        component: HashCerradaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HashCerradaRoutingModule {}
