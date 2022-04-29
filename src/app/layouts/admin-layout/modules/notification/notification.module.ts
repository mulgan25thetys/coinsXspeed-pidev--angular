import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { ListAllComponent } from './list-all/list-all.component';
import { AdminLayoutModule } from '../../admin-layout.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    NotificationComponent,
    ListAllComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    AdminLayoutModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    AdminLayoutModule,
    NgChartsModule
  ]
})
export class NotificationModule { }
