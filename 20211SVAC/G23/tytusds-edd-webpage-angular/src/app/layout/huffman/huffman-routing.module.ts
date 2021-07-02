import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuffmanComponent } from './huffman.component';

const routes: Routes = [
    {
        path: '',
        component: HuffmanComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HuffmanRoutingModule {}
