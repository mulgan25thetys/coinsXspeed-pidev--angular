import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoringRoutingModule } from './scoring-routing.module';
import { ScoringComponent } from './scoring.component';
import { AdminLayoutModule } from '../../admin-layout.module';
import { ListAllComponent } from './list-all/list-all.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgChartsModule } from 'ng2-charts';

// import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    ScoringComponent,
    ListAllComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    ScoringRoutingModule,
    AdminLayoutModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgChartsModule
  ]
})
export class ScoringModule { }
