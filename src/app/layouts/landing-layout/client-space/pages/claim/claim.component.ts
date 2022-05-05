import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Claim } from 'src/app/models/claim';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ClaimService } from 'src/app/services/claims/claim.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  messages:string="";
  class:string="";

  listClaims : Claim[] = [];
  claim = new Claim();
  updateclaim:Claim;
  constructor(private serviceclaim:ClaimService,private router:Router,private auth:AuthenticationService,private Activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.getClaimsOFUser();
  }

  getClaimsOFUser(){
    this.serviceclaim.getClaimByUser(this.auth.currentUserValue.userId).subscribe(
      res => {
        this.listClaims = res;
        console.log(res);
      },
      error => {
        this.messages = "error";
        this.class = "alert-danger";
      }
    )
  }

  completeForm(form:NgForm){
    // console.log(this.claim,this.auth.currentUserValue)
    this.serviceclaim.addClaim(this.claim,this.auth.currentUserValue.userId).subscribe(
      res => {
        this.showMessage("Your claim has been sended successfully!","alert-success");
        form.reset();
        this.ngOnInit()
      },
      error => {
        this.showMessage("Please wait an error has been occured!","alert-danger")
      }
    )
  }

  onDeleteClaim(id:any){
    this.serviceclaim.deletClaim(id)
    this.ngOnInit()
    

    
    
        this.showMessage("Please wait we are going to manage this processing!","alert-warning")
  }

  onEditClaim(id:number){
    this.serviceclaim.getClaim(id).subscribe(
      res => {
        this.claim = res;
        this.router.navigate[('claims')]
        this.showPanel();
        
        
        this.showMessage("Your claim has been update successfully!","alert-success");
      },
      error => {
        this.showMessage("Please we got an error!","alert-warning");
      }
      
    )
  }
  submitedit(){
    this.serviceclaim.ModifClaim(this.claim,this.Activate.snapshot.params.id).subscribe(
      res =>{
        this.showMessage("The claim has been edited sussessfully!","alert-success");
      },
      error => {
        this.showMessage("Please we got an error!","alert-warning");
      }
    )
  }

  showPanel(){
    ($("#claim-vertical-tab") as any).removeClass('active');
    ($("#claimform-vertical-tab") as any).addClass('active');

    ($("#claim-vertical") as any).removeClass('show');
    ($("#claim-vertical") as any).removeClass('active');
    ($("#claimform-vertical") as any).addClass('show');
    ($("#claimform-vertical") as any).addClass('active');
  }

  showMessage(messages:any,classmsg:any){
    window.scrollTo(0,0);
    this.messages = messages;
    this.class = classmsg;
  }
}
