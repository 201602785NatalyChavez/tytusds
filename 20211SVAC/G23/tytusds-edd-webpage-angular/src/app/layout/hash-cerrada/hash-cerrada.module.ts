import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared';
import { RouterModule, Routes } from '@angular/router';
import { HashCerradaRoutingModule } from './hash-cerrada-routing.module';
import { HashCerradaComponent } from './hash-cerrada.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatRadioModule,CommonModule, HashCerradaRoutingModule, PageHeaderModule,FormsModule],
    declarations: [HashCerradaComponent]
})
export class HashCerradaModule {}
