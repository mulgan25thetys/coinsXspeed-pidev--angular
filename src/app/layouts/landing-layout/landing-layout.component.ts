import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.css']
})
export class LandingLayoutComponent implements OnInit {

  hasSideBar : boolean = false;

  homeLink : string = "home";
  notificationLandingLink : string ="client-space/notifications";
  profileLandingLink:string="client-space/my-profile";
  redirectingLandingLink = "home";
  constructor() { }

  ngOnInit(): void {
  }

}
