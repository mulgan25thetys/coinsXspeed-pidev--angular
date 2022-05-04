import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/helpers/auth-guard.guard';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'financial-service/:product',component:HomeComponent},
  { path: 'client-space',canActivate: [AuthGuardGuard], data: { roles: ['CLIENT','ADMIN','AGENT'] }, loadChildren: () => import('./client-space/client-space.module').then(m => m.ClientSpaceModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingLayoutRoutingModule { }
