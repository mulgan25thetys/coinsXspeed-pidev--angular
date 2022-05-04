import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  pageTitle : string ="Management > Payments";
  baseLink : string ="/admin/management/payment/";

  search:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  account_id:any;
  listPayments : Payment[] = [];

  constructor(private activedRoute:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllPayments();
  }

  getAllPayments(){
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllPayments();
    }
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllPayments();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllPayments();
  }

  checkAllCheckBox(ev: any) { // Angular 13
		this.listPayments.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.listPayments.every(acc => acc.checked);
	}

}
