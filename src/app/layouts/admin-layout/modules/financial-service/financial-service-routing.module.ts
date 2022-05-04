import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FinancialServiceComponent } from './financial-service.component';
import { ListAllComponent } from './list-all/list-all.component';

const routes: Routes = [
  { path: '', redirectTo :'list-all' },
  { path : 'list-all', component:ListAllComponent},
  {path: 'account/:id/list-all',component:ListAllComponent},
  {path: 'edit/:id',component:EditComponent}
  //{path: '',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialServiceRoutingModule { }
