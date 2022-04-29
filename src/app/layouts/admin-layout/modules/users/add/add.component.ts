import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pageTitle ="Account > Add";
  baseLink = "/admin/management/account/";
  @Output() update_data = new EventEmitter<any>();

  user = new User();
  constructor(
    private router:Router,
    private auth:AuthenticationService,
    private toastr: ToastrService,
    private spinner:NgxSpinnerService,
    private service:UserService
  ) { }

  ngOnInit(): void {
  }

  onAddUser(form:NgForm){
    this.user.egroup = "GOOD";
    this.user.status = "CONFIRME";
    this.service.addUser(this.user).subscribe(
      res => {
        this.toastr.success('Add User',"The user admin has been added successfully!");
        this.update_data.emit(true);
        this.ngOnInit();
        form.reset();
      },
      error => {
        this.toastr.error('Add user',error.message);
      }
    )
  } 
}
