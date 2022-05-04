import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { AdminLayoutModule } from '../../admin-layout.module';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    AdminLayoutModule,
    NgChartsModule
  ]
})
export class ChatModule { }
