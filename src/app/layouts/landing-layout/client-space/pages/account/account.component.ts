import { Component, OnInit ,ViewChild} from '@angular/core';
import { Account } from 'src/app/models/account';
import { ScoreForm } from 'src/app/models/score-form';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ScoringsServiceService } from 'src/app/services/scorings/scorings-service.service';
import * as $ from 'jquery';
import swal from 'sweetalert2'; 

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner"; 
import { ScoreProposition } from 'src/app/models/score-proposition';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  current_url :string="/";
  response:string="";
  showMessage:boolean=false;
  account : Account;
  scoreform : ScoreForm;
  answer?:ScoreProposition;

  show_form :boolean=false;
  user_account_id:number;
  message: any='';
  class:any;

  id:any;
  form_type:any;

  constructor(private account_service:AccountServiceService,
    private scoring_service:ScoringsServiceService,
    private auth:AuthenticationService,
    private toastr: ToastrService,
    private activedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    
    this.current_url = this.router.url;

    this.id = this.activedRoute.snapshot.params.id_fs;
    this.form_type = this.activedRoute.snapshot.data.form_type;
    if(this.id){
      this.showPanel();
    }

    this.getAccount_of_this_user(this.auth.currentUserValue.userId);
    this.getForm(this.form_type,this.id);
  }

  getAccount_of_this_user(id:number){
    this.account_service.getAccountByUser(id).subscribe(
        res => {
          this.account = res;
        },
        error =>{console.log(error);}
    )
  }

  getForm(type:any,id_fs:any){
    if(type){
      this.show_form =true;
      this.scoring_service.getScoreForm(type).subscribe(
        res => {
          this.showMessage = false;
          res?.questions?.forEach(question =>{
            question.answer.description = '';
          })
          this.scoreform = res;
        },
        () => {
          this.class = 'alert-danger';
          this.message = "Please wait or contact support, an error has been occured! ";
        }
      )
    }
    
  }

  completeForm(SendRequest :NgForm) {
    // console.log(this.scoreform);
      this.scoring_service.completeScoreForm(this.scoreform,this.auth.currentUserValue.userId).subscribe(
         res => {
           this.response = res.result;
          SendRequest.reset();  
          this.account_service.getUserByAccount(this.auth.currentUserValue.userId).subscribe(
            res_ => {
            this.auth.updateCurrentUSerAccount(res_);
            swal.fire(this.response).then(() => {
              this.router.navigate(['/client-space/my-account'])
                .then(() => {
                  window.location.reload();
                });
            });
            }
          )
             this.class="alert-success";
             this.showMessage = true;
             this.message = res.result;
         },
         error => {
           if(error){
             this.class="alert-danger";
            this.showMessage = true;
            this.message = "Internal Server An error has been occured!";
           }
         })
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.message = "The form has been completed!";
        this.router.navigate([currentUrl]);
    });
  }

  showPanel(){
    ($("#account-vertical-tab") as any).removeClass('active');
    ($("#scoring-vertical-tab") as any).addClass('active');

    ($("#account-vertical") as any).removeClass('show');
    ($("#account-vertical") as any).removeClass('active');
    ($("#scoring-vertical") as any).addClass('show');
    ($("#scoring-vertical") as any).addClass('active');
  }
}
