import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TransactionComponent } from './pages/transaction/transaction.component';

const routes: Routes = [
  { path :'',redirectTo:'my-profile'},
  { path: 'my-profile',component:ProfileComponent},
  { path: 'my-account',component: AccountComponent },
  { path: 'my-account/:id_fs',data: { form_type:'loan'},component: AccountComponent },
  {path: 'transactions',component:TransactionComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSpaceRoutingModule { }
