import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  pageTitle : string ="Management > Users";
  baseLink : string ="/admin/management/users/";

  search:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  account_id:any;
  listUsers : User[] = [];

  constructor(private activedRoute:ActivatedRoute,
    private toastr:ToastrService,
    private service_user:UserService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllUsers();
  }

  getAllUsers(){
    this.service_user.getAllUsers().subscribe(
      res => {this.listUsers =res;},
      error => {this.toastr.error(error,'An error ha been occured!');}
    )
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllUsers();
    }
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllUsers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllUsers();
  }

  checkAllCheckBox(ev: any) { // Angular 13
		this.listUsers.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.listUsers.every(acc => acc.checked);
	}

}
 