import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NoFinancialService } from 'src/app/models/noFinancialService';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  pageTitle : string ="Blog";
  baseLink : string ="/admin/blog/";

  search:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  account_id:any;
  list_no_financial_services : NoFinancialService[] = [];

  constructor(private activedRoute:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllNoFinancialServices();
  }

  getAllNoFinancialServices(){
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllNoFinancialServices();
    }
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllNoFinancialServices();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllNoFinancialServices();
  }

  checkAllCheckBox(ev: any) { // Angular 13
		this.list_no_financial_services.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.list_no_financial_services.every(acc => acc.checked);
	}
}
