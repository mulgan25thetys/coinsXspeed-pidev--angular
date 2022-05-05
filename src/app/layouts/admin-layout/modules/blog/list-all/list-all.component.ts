import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NoFinancialService } from 'src/app/models/noFinancialService';
import { NoFinancialServicesService } from 'src/app/services/nofinancialServices/no-financial-services.service';

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
  user_id:number=0;

  constructor(private activedRoute:ActivatedRoute,private toastr:ToastrService,private  nofinservice:NoFinancialServicesService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.user_id=this.activedRoute.snapshot.params.id;
    
    this.getAllNoFinancialServices(this.user_id);
  }

  getAllNoFinancialServices(id_user:number){
    if(id_user)
    this.nofinservice.getNoFinancialByUser(id_user).subscribe(res=>{
      if(res!=null){
        this.list_no_financial_services=[];
        this.list_no_financial_services.push(res);
      }else{
        this.toastr.info("There is no account for this user","Show account")
      }
    },
    error => {
      this.toastr.error(error,"An error has been occured!");
    })
    else{
      this.nofinservice.getAllNoFinancialServices().subscribe(res=>this.list_no_financial_services=res)
    }
    
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllNoFinancialServices(this.user_id=null);
    }
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllNoFinancialServices(this.user_id=null);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllNoFinancialServices(this.user_id=null);
  }

  checkAllCheckBox(ev: any) { // Angular 13
		this.list_no_financial_services.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.list_no_financial_services.every(acc => acc.checked);
	}
}
