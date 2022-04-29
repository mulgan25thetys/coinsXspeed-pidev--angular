import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimRoutingModule } from './claim-routing.module';
import { ClaimComponent } from './claim.component';
import { AdminLayoutModule } from '../../admin-layout.module';
import { AddComponent } from './add/add.component';
import { ListAllComponent } from './list-all/list-all.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ClaimComponent,
    AddComponent,
    ListAllComponent
  ],
  imports: [
    CommonModule,
    ClaimRoutingModule,
    AdminLayoutModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ClaimModule { }
