import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared';
import { RouterModule, Routes } from '@angular/router';
import { HuffmanRoutingModule } from './huffman-routing.module';
import { HuffmanComponent } from './huffman.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatRadioModule,CommonModule, HuffmanRoutingModule, PageHeaderModule,FormsModule],
    declarations: [HuffmanComponent]
})
export class HuffmanModule {}
