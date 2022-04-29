import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialServiceRoutingModule } from './financial-service-routing.module';
import { FinancialServiceComponent } from './financial-service.component';
import { AdminLayoutModule } from '../../admin-layout.module';
import { ListAllComponent } from './list-all/list-all.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    FinancialServiceComponent,
    ListAllComponent
  ],
  imports: [
    CommonModule,
    FinancialServiceRoutingModule,
    AdminLayoutModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    NgChartsModule
  ]
})
export class FinancialServiceModule { }
