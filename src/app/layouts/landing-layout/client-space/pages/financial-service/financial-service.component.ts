import { Component, OnInit } from '@angular/core';
import { FinancialService } from 'src/app/models/financialService';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FinancialServiceService } from 'src/app/services/financialServices/financial-service.service';
import { NoFinancialServicesService } from 'src/app/services/nofinancialServices/no-financial-services.service';

@Component({
  selector: 'app-financial-service',
  templateUrl: './financial-service.component.html',
  styleUrls: ['./financial-service.component.css']
})
export class FinancialServiceComponent implements OnInit {

  messages:string ="";
  class:string="";

  list_financial_services : FinancialService[] = [];
  constructor(private auth:AuthenticationService,private fs_service:FinancialServiceService) { }

  ngOnInit(): void {
    // console.log(this.auth.currentUserValue.account);
    this.getFinancialServiceForAccount();
  }

  getFinancialServiceForAccount(){
    this.fs_service.getFinancialServicesAccount(this.auth.currentUserValue.account?.id_account).subscribe(
      res => {
        this.list_financial_services = res;
        console.log(this.list_financial_services);
      }
    )
  }
}