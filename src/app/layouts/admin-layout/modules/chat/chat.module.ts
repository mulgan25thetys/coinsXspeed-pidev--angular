import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { AdminLayoutModule } from '../../admin-layout.module';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ListAllComponent } from './list-all/list-all.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ChatComponent,
    AddComponent,
    ListAllComponent
  ],
  imports: [
    CommonModule, 
    ChatRoutingModule,
    AdminLayoutModule,
    NgChartsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ChatModule { }
