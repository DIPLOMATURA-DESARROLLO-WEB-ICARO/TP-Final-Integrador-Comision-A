import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendBoxRoutingModule } from './send-box-routing.module';
import { SendBoxComponent } from './components/send-box/send-box.component';


@NgModule({
  declarations: [
    SendBoxComponent
  ],
  imports: [
    CommonModule,
    SendBoxRoutingModule
  ]
})
export class SendBoxModule { }
