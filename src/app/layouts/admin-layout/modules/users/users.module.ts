import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AdminLayoutModule } from '../../admin-layout.module';
import { ListAllComponent } from './list-all/list-all.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    UsersComponent,
    ListAllComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AdminLayoutModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    NgChartsModule
  ]
})
export class UsersModule { }
