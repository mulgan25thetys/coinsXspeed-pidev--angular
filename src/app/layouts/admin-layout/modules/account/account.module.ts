import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AdminLayoutModule } from '../../admin-layout.module';
import { ListAllComponent } from './list-all/list-all.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalComponent } from './modal/modal.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AccountComponent,
    ListAllComponent,
    AddComponent,
    EditComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AdminLayoutModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgChartsModule
  ]
})
export class AccountModule { }
