import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared';
import { RouterModule, Routes } from '@angular/router';
import { FeistelRoutingModule } from './feistel-routing.module';
import { FeistelComponent } from './feistel.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatRadioModule,CommonModule, FeistelRoutingModule, PageHeaderModule,FormsModule],
    declarations: [FeistelComponent]
})
export class FeistelModule {}