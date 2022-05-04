import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListAllComponent } from './list-all/list-all.component';
import { TransactionComponent } from './transaction.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-all' },
  { path:'list-all',component:ListAllComponent},
  {path:'add',component:AddComponent},
  { path:'account/:id/list-all',component:ListAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
