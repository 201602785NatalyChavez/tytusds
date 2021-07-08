import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostoComponent } from './costo.component';

const routes: Routes = [
    {
        path: '',
        component: CostoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CostoRoutingModule {}