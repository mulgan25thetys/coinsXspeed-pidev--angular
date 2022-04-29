import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Payment } from 'src/app/models/payment';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.component.html',
  styleUrls: ['./pay-modal.component.css']
})
export class PayModalComponent implements OnInit {

  @Input() payment = new Payment();
  acc_number :number;
  username:string="";
  @Output() update_data = new EventEmitter<any>();
  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.acc_number = this.auth.currentUserValue.account.account_number;
    this.username = this.auth.currentUserValue.userName;
  }

  onPayLoan(form:NgForm){
     console.log(this.payment);
  }
}
