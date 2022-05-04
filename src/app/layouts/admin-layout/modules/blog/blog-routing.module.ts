import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ListAllComponent } from './list-all/list-all.component';

const routes: Routes = [
  { path :'',redirectTo:'list-all'},
  { path: 'list-all', component: ListAllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
