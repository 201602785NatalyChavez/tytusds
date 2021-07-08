import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodigoHammingComponent } from './codigo-hamming.component';

const routes: Routes = [
    {
        path: '',
        component: CodigoHammingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CodigoHammingRoutingModule {}
