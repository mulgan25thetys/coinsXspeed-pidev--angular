import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path: 'auth/profile',component:ProfileComponent},
  { path: 'notification', data:{'title':'Notification'},loadChildren: () => import('./modules/notification/notification.module').then(m => m.NotificationModule) },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'management/account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) },
  { path: 'management/users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: 'management/financial-service', loadChildren: () => import('./modules/financial-service/financial-service.module').then(m => m.FinancialServiceModule) },
  { path: 'management/transaction', loadChildren: () => import('./modules/transaction/transaction.module').then(m => m.TransactionModule) },
  { path: 'management/payments', loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentModule) },
  { path: 'management/claim', loadChildren: () => import('./modules/claim/claim.module').then(m => m.ClaimModule) },
  { path: 'management/scoring', loadChildren: () => import('./modules/scoring/scoring.module').then(m => m.ScoringModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
