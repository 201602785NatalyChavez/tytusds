import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrafosRecorridosComponent } from './grafos-recorridos.component';

const routes: Routes = [
    {
        path: '',
        component: GrafosRecorridosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrafosRecorridosRoutingModule {}
