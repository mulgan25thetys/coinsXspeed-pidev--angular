import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { AdminLayoutModule } from '../../admin-layout.module';
import { ListAllComponent } from './list-all/list-all.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { AddComponent } from './add/add.component';

// import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    TransactionComponent,
    ListAllComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    AdminLayoutModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    NgChartsModule
  ]
})
export class TransactionModule { }
