import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ClaimComponent } from './claim.component';
import { ListAllComponent } from './list-all/list-all.component';

const routes: Routes = [
  {path:'',redirectTo:'list-all'},
  {path:'list-all',component:ListAllComponent},
  { path: 'add', component: AddComponent },
  { path: 'user/:id/show', component: ListAllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimRoutingModule { }
