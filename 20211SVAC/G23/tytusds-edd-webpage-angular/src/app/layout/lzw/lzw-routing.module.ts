import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LzwComponent } from './lzw.component';

const routes: Routes = [
    {
        path: '',
        component: LzwComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LzwRoutingModule {}
