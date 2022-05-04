import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Notification } from 'src/app/models/notification';
import { NotificationService } from 'src/app/services/notification/notification.service';

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

  constructor(private activedRoute:ActivatedRoute,private toastr:ToastrService,private service:NotificationService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllNotifications();
  }

  getAllNotifications(){
    this.service.getNotification().subscribe(
      res => {
        // console.log(res);
        this.listNotifications = res;
      },
      error =>{this.toastr.error('List Notifications','An error has been occured!');}
    )
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllNotifications();
    }
    
  }

  ondeleteNotification(id:any){
    this.service.deleteNotification(id).subscribe(
      res => {
        this.toastr.success('Deletion','Notification has been deleted!');
        this.ngOnInit();
      },error =>{
        this.toastr.error('Deletion','An error has been occured!');
      }
    )
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
