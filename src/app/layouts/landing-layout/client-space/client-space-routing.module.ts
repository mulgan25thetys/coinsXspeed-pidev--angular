import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { FinancialServiceComponent } from './pages/financial-service/financial-service.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { PayementComponent } from './pages/payement/payement.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TransactionComponent } from './pages/transaction/transaction.component';

const routes: Routes = [
  { path :'',redirectTo:'my-profile'},
  { path: 'my-profile',component:ProfileComponent},
  { path: 'my-account',component: AccountComponent },
  { path: 'my-account/:id_fs',data: { form_type:'loan'},component: AccountComponent },
  { path: 'financial-services',component:FinancialServiceComponent},
  { path: 'payments',component:PayementComponent},
  { path: 'payments/loan/:id/show',component:PayementComponent},
  { path: 'notifications',component:NotificationComponent},
  { path: 'transactions',component:TransactionComponent},
  { path: 'claims',component:ClaimComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSpaceRoutingModule { }
