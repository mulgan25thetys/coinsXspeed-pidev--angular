import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  transaction=new Transaction();
  @Output() update_data = new EventEmitter<any>();
  activedRoute: any;
  constructor(private service:TransactionService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onAddTransaction(form:NgForm){
    this.service.addTransaction(this.transaction).subscribe(
      res => {
       this.toastr.success('Add Transaction',"The Transaction "+this.transaction.type+" has been added successfully!");
        form.reset();
        this.update_data.emit();
        this.ngOnInit();
      },
      error => {
       this.toastr.error(error,"An error has been occured!");
      }
    )
  }
}
