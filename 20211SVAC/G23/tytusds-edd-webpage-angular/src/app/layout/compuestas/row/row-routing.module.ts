import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowComponent } from './row.component';

const routes: Routes = [
    {
        path: '',
        component: RowComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RowRoutingModule {}
