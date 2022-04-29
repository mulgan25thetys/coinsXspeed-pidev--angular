import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListAllComponent } from './list-all/list-all.component';

const routes: Routes = [
  { path: '',redirectTo:'list-all'},
  { path: 'add',component:AddComponent},
  { path: 'edit/:id',component:EditComponent},
  { path: 'list-all', component: ListAllComponent,data :{'title':'list'}},
  { path: 'user/:id/show',component:ListAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
