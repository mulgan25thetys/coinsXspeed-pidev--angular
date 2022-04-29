import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { FinancialService } from 'src/app/models/financialService';
import { NoFinancialService } from 'src/app/models/noFinancialService';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { NoFinancialServicesService } from 'src/app/services/nofinancialServices/no-financial-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sideTitle:string ="financial services";
  search:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];

  contact = new Contact();

  list_financial_services :FinancialService[] = [];
  list_no_financial_services :NoFinancialService[] =[];

  constructor(private _service_fs:AccountServiceService,
    private _noservice_fs:NoFinancialServicesService) { }
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    this.getAllFinancialServices();
  }

  getAllFinancialServices(){
    this._service_fs.getFinancialServices().subscribe(
      res =>{ this.list_financial_services = res },
      error => {console.log(error)}
      )
  }

  getAllNoFinancialServices(){
  
  }

  show_specific_fs(value:any){
    window.scrollTo(0,650);
    this._service_fs.getFinancialServices().subscribe(
      res =>{ 
        switch (value) {
          case 'Bank Card':
            this.list_financial_services = res.filter(
              fs => fs.category == "BankCard"
            )
            break;
          case 'Loan' :
            this.list_financial_services = res.filter(
              fs => fs.category == "Loan"
            )
            break;
          default:
            this.getAllFinancialServices();
            break;
        }
      },
      error => {console.log(error)}
      )
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllFinancialServices();
    
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllFinancialServices();
  }
}
