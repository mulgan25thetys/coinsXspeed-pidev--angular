import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { FinancialService } from 'src/app/models/financialService';
import { NoFinancialService } from 'src/app/models/noFinancialService';
import { FinancialServiceService } from 'src/app/services/financialServices/financial-service.service';

@Component({
  selector: 'app-landing-sidebar',
  templateUrl: './landing-sidebar.component.html',
  styleUrls: ['./landing-sidebar.component.css']
})
export class LandingSidebarComponent implements OnInit { 

  @Input() title:string="";
  @Output() requested = new EventEmitter<any>();

  remove_get_started:boolean=false;
  show_form:boolean=true;
  
  financial_services_cats :any = [];

  no_fs = new NoFinancialService();
  financialService = new FinancialService() ;
  // update_data: any;
  constructor(private router:Router, private service:FinancialServiceService, private toastr:ToastrService) { }

  ngOnInit(): void {

    if (this.router.url.split("/")[1] == 'blog') {
      this.remove_get_started = true;
      this.financial_services_cats = [{'name':'Education'},{'name':'Formation'},{'name':'Professional'}];
    } else {
      this.remove_get_started = false;
      this.financial_services_cats = [{'name':'Loan'},{'name':'Bank Card'}];
    }

  }

  onAddFinancialService(form:NgForm){
    this.service.addFinancialServices(this.financialService).subscribe(
      res => {
        this.toastr.success('Add Financial service',"The Financial service "+this.financialService.category+" has been added successfully!");
        form.reset();
        this.requested.emit();
        this.ngOnInit();
      },
      error => {
        this.toastr.error(error,"An error has been occured!");
      }
    )
  }

  showForm(){
    this.show_form = false;
  }

  show_financial_service(value:any){
    // alert(value);
    if(this.no_fs.checked == true){
      // alert(true)
       this.requested.emit(value);
    }
    else{
      // alert(false);
      this.requested.emit(null);
    }
  }
}
