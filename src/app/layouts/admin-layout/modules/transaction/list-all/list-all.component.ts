import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  pageTitle : string ="Management > Transaction";
  baseLink : string ="/admin/management/transaction/";

  search:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  account_id:any;
  listTransactions : Transaction[] = [];

  constructor(private activedRoute:ActivatedRoute,
    private _service:AccountServiceService,private toastr:ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.account_id = this.activedRoute.snapshot.params.id;
    this.getAllTransactions(this.account_id);
  }

  getAllTransactions(id_account:any){
    if(id_account){
      this._service.getAccount(this.account_id).subscribe(
        res =>{
          if (res.transactions.length > 0) {
            this.listTransactions=res.transactions;
          } else {
            this.toastr.info('There is not transactions for this account','List Transactions');
          }
        },
        error => {
          this.toastr.error(error,'An error has been occcured!');
        }
        
      )
    }
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllTransactions(this.account_id);
    }
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllTransactions(this.account_id);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllTransactions(this.account_id);
  } 

  checkAllCheckBox(ev: any) { // Angular 13
		this.listTransactions.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.listTransactions.every(acc => acc.checked);
	}
}
