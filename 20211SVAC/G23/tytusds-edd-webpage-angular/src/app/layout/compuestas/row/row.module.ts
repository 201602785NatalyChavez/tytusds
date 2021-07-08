import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { RouterModule, Routes } from '@angular/router';
import { RowRoutingModule } from './row-routing.module';
import { RowComponent } from './row.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatRadioModule,CommonModule, RowRoutingModule, PageHeaderModule,FormsModule],
    declarations: [RowComponent]
})
export class RowModule {}
