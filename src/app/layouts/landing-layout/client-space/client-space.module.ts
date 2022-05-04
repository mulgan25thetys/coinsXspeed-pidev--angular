import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClientSpaceRoutingModule } from './client-space-routing.module';
import { ClientSpaceComponent } from './client-space.component';
import { AccountComponent } from './pages/account/account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";  
import { NgChartsModule } from 'ng2-charts';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ClientSpaceComponent,
    AccountComponent,
    ProfileComponent,
    MenuComponent,
    HeaderComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    ClientSpaceRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgChartsModule,
    NgxPaginationModule
  ]
})
export class ClientSpaceModule { }
