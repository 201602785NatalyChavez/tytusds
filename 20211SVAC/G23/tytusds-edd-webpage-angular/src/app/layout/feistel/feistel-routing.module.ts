import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeistelComponent } from './feistel.component';

const routes: Routes = [
    {
        path: '',
        component: FeistelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeistelRoutingModule {}
