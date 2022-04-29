import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinancialService } from 'src/app/models/financialService';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { ToastrService } from 'ngx-toastr';
import { FinancialServiceService } from 'src/app/services/financialServices/financial-service.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  pageTitle : string ="Management > Financial Service";
  baseLink : string ="/admin/management/financial-service/";

  search:string="";

  page: number = 1; 
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  account_id:any;
  listFinancial_services : FinancialService[] = [];

  constructor(private activedRoute:ActivatedRoute
    ,private _service:FinancialServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.account_id = this.activedRoute.snapshot.params.id;
    this.getAllFinancialServices(this.account_id);
  }

  getAllFinancialServices(id_account:any){
    if(id_account){
      this._service.getFinancialServicesAccount(this.account_id).subscribe(
        res =>{
          if (res.length > 0) {
            this.listFinancial_services=res;
          } else {
            this.toastr.info('There is not financial services for this account','List Financial services');
          }
        },
        error => {
          this.toastr.error(error,'An error has been occcured!');
        }
      )
    }else {
      this._service.getAllFinancialServices().subscribe(
        res => {this.listFinancial_services = res;},
        error => {this.toastr.error(error);}
      )
    }
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllFinancialServices(this.account_id=null);
    }
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllFinancialServices(this.account_id=null);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllFinancialServices(this.account_id=null);
  }

  checkAllCheckBox(ev: any) { // Angular 13
		this.listFinancial_services.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.listFinancial_services.every(acc => acc.checked);
	}
}
