import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HallRoutingModule } from './hall-routing.module';
import { HallComponent } from './hall.component';


@NgModule({
  declarations: [
    HallComponent
  ],
  imports: [
    CommonModule,
    HallRoutingModule
  ]
})
export class HallModule { }
