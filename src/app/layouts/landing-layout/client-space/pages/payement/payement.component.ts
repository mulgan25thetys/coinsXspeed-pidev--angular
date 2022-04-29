import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Payment } from 'src/app/models/payment';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {

  messages:string ="";
  class:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  id :number;
  list_payments : Payment[] = [];
  constructor(private auth:AuthenticationService,
    private pay_service:PaymentService,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.id =this.activedRoute.snapshot.params.id;
    this.getAllPaymentForAccount(this.id);
  }

  getAllPaymentForAccount(id_fs:number=null){

    if (id_fs !=null) {
      this.pay_service.getAllPaymentFSForAccount(id_fs,this.auth.currentUserValue.account.id_account).subscribe(
        res => {
          this.list_payments = res;
        },error => {
          window.scrollTo(0,0);
          this.messages = "Please contact support an error has been occured!";
          this.class = "alert-danger";
        }
      )
    } else {
      this.pay_service.getAllPaymentForAccount(this.auth.currentUserValue.account.id_account).subscribe(
        res => {
          this.list_payments = res;
        },error => {
          window.scrollTo(0,0);
          this.messages = "Please contact support an error has been occured!";
          this.class = "alert-danger";
        }
      )
    }
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllPaymentForAccount(this.id);
    }  
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllPaymentForAccount(this.id);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllPaymentForAccount(this.id);
  }
}
