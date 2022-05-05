import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  showAlert:boolean =false;
  class : string ="alert-info";
  messageAlert:string="";
  user = new User();
  constructor(private service:UserService,private router:Router,private toatrs:ToastrService) { }

  ngOnInit(): void {
    this.user.account = {"id_account" : null,
    
      "type" : null,
      
      "account_number" : null,
      
      "capital" : null,
      
      "score": null,
      
      "isApproved": null,
      
      "state" : null,
      
      "updated_at": null,
      
      "created_at": null,
      
      "financialServices":null,
      
      "transactions": null,
  
      "user": null,
  
      "checked": null}
  }
 
  onRegister(form:NgForm){
    this.user.role = "CLIENT";
    this.user.status = "CONFIRME";
    this.user.egroup = "WRONG";
    this.service.registerUser(this.user).subscribe(
      () => {
        window.scrollTo(0,0);
        this.toatrs.info('Registration','You recieve an email!');
        
        form.reset();
        setTimeout(function() {window.location.href = "/auth/login";}, 2500);
        
      },
      () => {
        window.scrollTo(0,0);
        this.showAlert=true;
        this.messageAlert="Please retry! or contact support!";
        this.class = "alert-danger";
      }
    )
  }
}
