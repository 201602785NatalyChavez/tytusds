import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared';
import { RouterModule, Routes } from '@angular/router';
import { HashAbiertaRoutingModule } from './hash-abierta-routing.module';
import { HashAbiertaComponent } from './hash-abierta.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatRadioModule,CommonModule, HashAbiertaRoutingModule, PageHeaderModule,FormsModule],
    declarations: [HashAbiertaComponent]
})
export class HashAbiertaModule {}
