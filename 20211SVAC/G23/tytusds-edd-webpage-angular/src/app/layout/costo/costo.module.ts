import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared';
import { RouterModule, Routes } from '@angular/router';
import { CostoRoutingModule } from './costo-routing.module';
import { CostoComponent } from './costo.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatRadioModule,CommonModule, CostoRoutingModule, PageHeaderModule,FormsModule],
    declarations: [CostoComponent]
})
export class CostoModule {}
