import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/models/account';
import { User } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-modal',
  exportAs: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  pageTitle ="Account > Add";
  baseLink = "/admin/management/account/";

  account = new Account(); 
  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();

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
      },
      error => {
        this.toastr.error('Add Account',error.message);
      }
    )
  }

  closeModal( $event ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

}
