import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { User } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner"; 
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import { timers } from 'jquery';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pageTitle ="Account > Add";
  baseLink = "/admin/management/account/";
  @Output() update_data = new EventEmitter<any>();

  account = new Account(); 

  user : User;
   
  listClients :User[];

  hasError = true;
  hasError_t = true;
  showAlert=false;
  messageAlert="";
  
  constructor(private account_service:AccountServiceService,
    private router:Router,
    private auth:AuthenticationService,
    private toastr: ToastrService,
    private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getAllClientsName();
    this.account.user = new User();
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

  onAddAccount(form:NgForm){
    this.account_service.addAccount(this.account).subscribe(
      res => {
        this.toastr.success('Add Account',"The account has been added successfully!");
        form.reset();
        this.update_data.emit(true);
        this.ngOnInit();
      },
      error => {
        this.toastr.error('Add Account',error.message);
      }
    )
  }
}
