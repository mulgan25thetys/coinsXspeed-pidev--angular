import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ProfileComponent } from './profile/profile.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CrudButtonComponent } from './components/crud-button/crud-button.component';
import { TableComponent } from './components/table/table.component';
import { LandingMenuComponent } from './components/landing-menu/landing-menu.component';
import { AlertComponent } from './modules/components/alert/alert.component';
import { AccountStatsComponent } from './statistics/account-stats/account-stats.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PageHeaderComponent,
    ProfileComponent,
    PaginationComponent,
    CrudButtonComponent,
    TableComponent,
    LandingMenuComponent,
    AlertComponent,
    AccountStatsComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    NgChartsModule
  ],
  exports : [
    FooterComponent,HeaderComponent,PageHeaderComponent,SidebarComponent,PaginationComponent,
    CrudButtonComponent
  ]

})
export class AdminLayoutModule { }
