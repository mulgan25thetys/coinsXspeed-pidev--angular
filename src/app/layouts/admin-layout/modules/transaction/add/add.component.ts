import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Transaction } from 'src/app/models/transaction';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pageTitle ="Account > Add";
  baseLink = "/admin/management/account/";
  @Output() update_data = new EventEmitter<any>();

  transaction = new Transaction();

  showAlert=false;
  messageAlert="";
  
  constructor(private tran_service:TransactionService,
    private router:Router,
    private auth:AuthenticationService,
    private toastr: ToastrService,
    private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


  // async (params:type) => {
  // }

  onAddTransaction(form:NgForm){
    this.tran_service.addTransaction(this.transaction).subscribe(
      res => {
        if (res.idTransaction == 0) {
          this.toastr.warning('Add Transaction',"The transaction has not been added successfully!");
        } else {
          this.toastr.success('Add Transaction',"The transaction has been added successfully!");
          form.reset();
          this.update_data.emit(true);
          this.ngOnInit(); 
        }
      },
      error => {
        this.toastr.error('Add Transaction',error.message);
      }
    )
  }

}
 