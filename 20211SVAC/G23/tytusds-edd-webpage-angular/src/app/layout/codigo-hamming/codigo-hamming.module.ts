import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { RouterModule, Routes } from '@angular/router';
import { CodigoHammingRoutingModule } from './codigo-hamming-routing.module';
import { CodigoHammingComponent } from './codigo-hamming.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatRadioModule,CommonModule, CodigoHammingRoutingModule, PageHeaderModule,FormsModule],
    declarations: [CodigoHammingComponent]
})
export class CodigoHammingModule {}
