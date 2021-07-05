import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared';
import { RouterModule, Routes } from '@angular/router';
import { GrafosRecorridosRoutingModule } from './grafos-recorridos-routing.module';
import { GrafosRecorridosComponent } from './grafos-recorridos.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [MatTableModule,MatToolbarModule,MatRadioModule,CommonModule, GrafosRecorridosRoutingModule, PageHeaderModule,FormsModule],
    declarations: [GrafosRecorridosComponent]
})
export class GrafosRecorridosModule {}
