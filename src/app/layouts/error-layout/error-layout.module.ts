import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorLayoutRoutingModule } from './error-layout-routing.module';
import { ErrorLayoutComponent } from './error-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    ErrorLayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorLayoutRoutingModule
  ]
})
export class ErrorLayoutModule { }
