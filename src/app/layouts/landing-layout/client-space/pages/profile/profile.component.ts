import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import swal from 'sweetalert2'; 
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = new User();
  messages:string="";
  class:string="";
  constructor(private auth:AuthenticationService,private user_service:UserService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getThisUser();
  }

  getThisUser(){
    this.user = this.auth.currentUserValue;
  }

  onEditUser(){
    this.user_service.editUser(this.user).subscribe(
      res => {
        this.user = res;
        this.auth.updateCurrentUSerAccount(this.user);
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your profile has been up to date!',
          showConfirmButton: false,
          timer: 2500
        })
        this.ngOnInit();
      },
      () => {
        window.scrollTo(0, 0);
        this.messages = "An error has been occured!, Please retry or contact support!";
        this.class = "alert-danger";
      }
    )
  }
}
