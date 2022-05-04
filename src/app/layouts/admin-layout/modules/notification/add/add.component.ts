import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Notification } from 'src/app/models/notification';
import { User } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pageTitle : string ="Notifications > Add";
  baseLink : string ="/admin/notification/";

  hasError :boolean=false;
  hasError_t:boolean=false;
  listClients :User[];


  notification = new Notification();
  constructor(private servicenoti:NotificationService,private account_service:AccountServiceService
    ,private toatr:ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllClientsName();
    this.notification.user = new User();
  }

  getAllClientsName(){
    this.account_service.getAllCLients().subscribe(
      res => {
        this.listClients = res;
      },
      error => {
        console.log(error);
      }
    )
  }
  onaddNotification(form:NgForm){
    console.log(this.notification);
    this.servicenoti.addNotification(this.notification,this.notification.user.userId).subscribe(
      res => {
        this.toatr.success('Send Notification','Notification has been sended!');
        form.reset();
        this.ngOnInit(); 
      },
      () =>{
        this.toatr.error('Send Notification','An error has been occured!');
      }
    )
  }
  validateTopic(value:any){
    this.hasError = value == "default" ? true :false;
  }
  validateTopic_t(value:any){
    this.hasError_t = value == "default" ? true :false;
  }
}
