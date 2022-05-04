import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FinancialServiceService } from 'src/app/services/financialServices/financial-service.service';
import { NoFinancialServicesService } from 'src/app/services/nofinancialServices/no-financial-services.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pageTitle = "Dashboard";

  total_approved_account : number;
  total_financial_services_available :number;
  total_clients:number;
  total_financial_services_published:number;
  total_financial_services_checked:number;

  constructor(private auth:AuthenticationService,
     private _service_account:AccountServiceService,
     private _service_f_service:FinancialServiceService,
     private _service_user:UserService,
     private nofin:NoFinancialServicesService,
     private toarts:ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    this.getTotalApp_account();
    this.getTotalFinancial_services();
    this.getAllClients();
  }

  getTotalApp_account(){
    this._service_account.getAllAccounts().subscribe(
      res => {
        this.total_approved_account = res.filter(
          account => account.isApproved == true
        ).length;
      },
      error => {this.toarts.error(error,"Internal server error!")}
    )
  }

  getTotalFinancial_services(){
    this._service_f_service.getAllFinancialServices().subscribe(
      res => {
        this.total_financial_services_available = res.length;
      },
      error => {this.toarts.error(error,"Internal server error!")}
    )
  }
  getTotalNoFinancial_services(){
    this.nofin.getAllNoFinancialServices().subscribe(res=>this.total_financial_services_published=res.length)
  }

  getAllClients(){
    this._service_user.getAllUsers().subscribe(
      res => {
        this.total_clients = res.filter(
          user => user.role == "CLIENT"
        ).length
      },
      error => {this.toarts.error(error,"Internal server error!")}
    )
  }
}
