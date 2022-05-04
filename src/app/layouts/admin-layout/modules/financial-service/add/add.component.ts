import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FinancialService } from 'src/app/models/financialService';
import { FinancialServiceService } from 'src/app/services/financialServices/financial-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() update_data = new EventEmitter<any>();
  financialService = new FinancialService() ;

  constructor(private service:FinancialServiceService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }

  onAddFinancialService(form:NgForm){ 
    this.service.addFinancialServices(this.financialService).subscribe(
      res => {
        this.toastr.success('Add Financial service',"The Financial service "+this.financialService.category+" has been added successfully!");
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
