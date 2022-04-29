import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

 // title = this.activedRoute.snapshot.params.title;
  constructor(private activedRoute:ActivatedRoute) { }

  dashboardLink : string ="admin/dashboard";
  notificationAdminLink:string = "admin/notification";
  profileAdminLink:string ="admin/auth/profile";
  redirectingAdminLink:string="auth/login";
  
  hasSideBar : boolean = true;
  ngOnInit(): void {
  }

  getPageTitle() {
    return "";
  }
}
