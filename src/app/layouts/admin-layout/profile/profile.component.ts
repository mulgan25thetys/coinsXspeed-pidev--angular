import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { Claim } from 'src/app/models/claim';
import { Communication } from 'src/app/models/communication';
import { Notification } from 'src/app/models/notification';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  pageTitle = "Profile";

  profile_name:string="";
  profile_phone:string="";
  profile_email:string="";
  profile_role:string="";

  user = new User();
  account : Account;
  notifications : Notification[] = [];
  claims :Claim[] = [];
  communications :Communication[];
  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    
    this.user = this.auth.currentUserValue;
    this.profile_email = this.user.email;
    this.profile_name = this.user.userName;
    this.profile_phone = this.user.phone;
    this.profile_role = this.user.role;

    this.notifications = this.user.notifications;
    this.claims = this.user.claim;
    this.communications = this.user.communications;
    this.account = this.user.account;
    console.log(this.user);
  }

}
