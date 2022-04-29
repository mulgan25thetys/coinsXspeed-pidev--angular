import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { NoFinancialService } from 'src/app/models/noFinancialService';

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
  constructor(private router:Router) { }

  ngOnInit(): void {

    if (this.router.url.split("/")[1] == 'blog') {
      this.remove_get_started = true;
      this.financial_services_cats = [{'name':'Education'},{'name':'Formation'},{'name':'Professional'}];
    } else {
      this.remove_get_started = false;
      this.financial_services_cats = [{'name':'Loan'},{'name':'Bank Card'}];
    }

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
