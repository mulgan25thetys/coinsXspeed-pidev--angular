import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './helpers/auth-guard.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ErrorLayoutComponent } from './layouts/error-layout/error-layout.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"home",
    pathMatch:'full'
  },
  {
    path:'',
    component:AuthLayoutComponent,
    children:[
      { path: 'auth', loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule) }
    ]
  },
  {
    path:'',
    component:AdminLayoutComponent,
    children:[
      { path: 'admin',canActivate: [AuthGuardGuard], data: { roles: ['ADMIN','AGENT'] }, loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) }
    ]
  },
  {
    path:'',
    component:ErrorLayoutComponent,
    children:[
      { path: '', loadChildren: () => import('./layouts/error-layout/error-layout.module').then(m => m.ErrorLayoutModule) }
    ]
  },
  {
    path:'',
    component:LandingLayoutComponent,
    children:[
      { path: '', loadChildren: () => import('./layouts/landing-layout/landing-layout.module').then(m => m.LandingLayoutModule) }
    ]
  },
  {
    path:'**',
    redirectTo:'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
