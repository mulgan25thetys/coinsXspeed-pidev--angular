import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  pageTitle : string ="Notifications";
  baseLink : string ="/admin/notification/";

  search:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  account_id:any;
  listNotifications : Notification[] = [];

  constructor(private activedRoute:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllNotifications();
  }

  getAllNotifications(){
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllNotifications();
    }
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllNotifications();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllNotifications();
  }

  checkAllCheckBox(ev: any) { // Angular 13
		this.listNotifications.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.listNotifications.every(acc => acc.checked);
	}

}
