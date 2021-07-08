import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../../shared';
import { RouterModule, Routes } from '@angular/router';
import { MatricesRoutingModule } from './matrices-routing.module';
import { MatricesComponent } from './matrices.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatRadioModule,CommonModule, MatricesRoutingModule, PageHeaderModule,FormsModule],
    declarations: [MatricesComponent]
})
export class MatricesModule {}
