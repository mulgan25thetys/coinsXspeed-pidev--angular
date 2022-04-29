import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { User } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account/account-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pageTitle ="Account > Edit";
  baseLink = "/admin/management/account/";

  account = new Account(); 
  id:any;

  client : User;
   
  listClients :User[];

  hasError = true;
  hasError_t = true;
  showAlert=false;
  messageAlert="";
  
  constructor(private account_service:AccountServiceService,private router:Router
    ,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllClientsName();
    this.account.user = new User();
    this.account_service.getAccount(this.activedRoute.snapshot.params.id).subscribe(
      res => {
        this.account = res;
        this.account_service.getUserByAccount(this.activedRoute.snapshot.params.id).subscribe(
          res => {this.client = res;}  
        )
      }
  );
  }

  getAllClientsName(){
    this.account_service.getAllCLients().subscribe(
      res => {
        this.listClients = res;
      },
      error => {
        console.log(error);
      }
    )
  }

  validateTopic(value:any){
    this.hasError = value == "default" ? true :false;
  }
  validateTopic_t(value:any){
    this.hasError_t = value == "default" ? true :false;
  }
  // async (params:type) => {
    
  // }

  onEditAccount(){
    this.account_service.updateAccount(this.activedRoute.snapshot.params.id,this.account).subscribe(
      res => {
        this.showAlert = true;
        this.messageAlert = "The account has been Edited successfully!";
      },
      error => {
        console.log(error);
        this.showAlert = true;
        this.messageAlert = error.message;
      }
    )
  }

}
