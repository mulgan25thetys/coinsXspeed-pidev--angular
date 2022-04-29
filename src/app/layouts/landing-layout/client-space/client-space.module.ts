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
import { FinancialServiceComponent } from './pages/financial-service/financial-service.component';
import { PayementComponent } from './pages/payement/payement.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { PayModalComponent } from './components/pay-modal/pay-modal.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { ClaimComponent } from './pages/claim/claim.component';


@NgModule({
  declarations: [
    ClientSpaceComponent,
    AccountComponent,
    ProfileComponent,
    MenuComponent,
    HeaderComponent,
    FinancialServiceComponent,
    PayementComponent,
    PayModalComponent,
    NotificationComponent,
    TransactionComponent,
    ClaimComponent
  ],
  imports: [
    CommonModule,
    ClientSpaceRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    NgChartsModule ,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ]
})
export class ClientSpaceModule { }
