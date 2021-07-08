import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { RouterModule, Routes } from '@angular/router';
import { LowRoutingModule } from './low-routing.module';
import { LowComponent } from './low.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatRadioModule,CommonModule, LowRoutingModule, PageHeaderModule,FormsModule],
    declarations: [LowComponent]
})
export class LowModule {}
