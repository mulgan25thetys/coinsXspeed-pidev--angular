import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { AdminLayoutModule } from '../../admin-layout.module';
import { ListAllComponent } from './list-all/list-all.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BlogComponent,
    ListAllComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    AdminLayoutModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    NgChartsModule
  ]
})
export class BlogModule { }
