import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingLayoutRoutingModule } from './landing-layout-routing.module';
import { LandingLayoutComponent } from './landing-layout.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AdminLayoutModule } from '../admin-layout/admin-layout.module';
import { CardComponent } from './components/card/card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LandingSidebarComponent } from './components/landing-sidebar/landing-sidebar.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgChartsModule } from 'ng2-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostComponent } from './components/post/post.component';
import { ForumComponent } from './forum/forum.component';
import { ForumCComponent } from './components/forum-c/forum-c.component';



@NgModule({
  declarations: [
    LandingLayoutComponent,
    HomeComponent,
    BlogComponent,
    CardComponent,
    CarrouselComponent, 
    PaginationComponent,
    LandingSidebarComponent,
    ContactComponent,
    AboutComponent,
    PostComponent,
    ForumComponent,
    ForumCComponent,
    
    
  ],
  imports: [
    CommonModule,
    LandingLayoutRoutingModule,
    AdminLayoutModule,
    FormsModule,
    NgChartsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
  ]
})
export class LandingLayoutModule { }
