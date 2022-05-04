import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2'; 
import { User } from 'src/app/models/user';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  themeCustomer:string="Clients";
  isAdmin:boolean=false;
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
    private service_user:UserService,
    private auth:AuthenticationService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllUsers();
  }

  getAllUsers(){
    if (this.auth.currentUserValue.role == "AGENT") {
      this.service_user.getAllUsers().subscribe(
        res => {
          this.listUsers =res.filter(
            user => user.role == 'CLIENT'
          )
        },
        error => {this.toastr.error(error,'An error ha been occured!');}
      )
    } else {
      this.service_user.getAllUsers().subscribe(
        res => {this.listUsers =res; this.themeCustomer = "Users"; this.isAdmin = true;},
        error => {this.toastr.error(error,'An error ha been occured!');}
      ) 
    }
  } 

  onDeleteUser(id:any){
    var customMsg = this.auth.currentUserValue.role == "AGENT"?"Client":"User";
    swal.fire({
      title: 'Are you sure?',
      text: "This "+customMsg+" will be delete!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, continue!'
    }).then((res) =>{
          if((res.isConfirmed)){
            this.service_user.deleteUser(id).subscribe(
              () =>{ this.toastr.success("Deletion",'The '+customMsg+' has been deleted!'); },
              (err) => { this.toastr.warning(err,'An error has been occured!')}
            );
            swal.fire(
              'Deletion!',
              'Done!',
              'success'
            ).then((res) =>{
              // window.location.reload;/
              this.ngOnInit();
            })
          }
      })
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
 