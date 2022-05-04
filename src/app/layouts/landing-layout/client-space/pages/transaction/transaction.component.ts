import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  messages:string ="";
  class:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  account_number:any=0;

  listTransactions : Transaction[] = [];
  constructor(private service:AccountServiceService,
    private auth:AuthenticationService,private servicetrans:TransactionService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getTransactions();
    this.account_number = this.auth.currentUserValue.account.account_number;
  }

  getTransactions(){
    this.service.getAccount(this.auth.currentUserValue.account.id_account).subscribe(
      res => {
        this.listTransactions = res.transactions;
      },()=>{
        this.messages = "An error has been occured! please contact support";
        this.class = "alert-danger";
      }
    )
  }

  deleteTransaction(id:any){
    this.servicetrans.deleteTransactions(id).subscribe(
      res => {
        window.scrollTo(0,0);
        this.messages = "Transaction has been deleted!";
        this.class = "alert-success";
        this.ngOnInit();
      },()=>{
        window.scrollTo(0,0);
        this.messages = "An error has been occured! please contact support";
        this.class = "alert-danger";
      }
    )
  }
  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getTransactions();
    }  
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getTransactions();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getTransactions();
  }
}