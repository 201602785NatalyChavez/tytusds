import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared';
import { RouterModule, Routes } from '@angular/router';
import { LzwRoutingModule } from './lzw-routing.module';
import { LzwComponent } from './lzw.component';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [MatRadioModule,CommonModule, LzwRoutingModule, PageHeaderModule,FormsModule],
    declarations: [LzwComponent]
})
export class LzwModule {}