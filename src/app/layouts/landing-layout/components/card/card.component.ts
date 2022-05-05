import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FinancialService } from 'src/app/models/financialService';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FinancialServiceService } from 'src/app/services/financialServices/financial-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() financial_services : FinancialService;
  constructor(private router:Router,
    private current_user:AuthenticationService,
    private financialsercice_serve:FinancialServiceService) { }

  ngOnInit(): void {
    // console.log(this.financial_services);
  }

  onSubmitToFinancialService(id_fs:any,category:any){
    
    //window.location.href = '/client-space/my-account';
    if (this.current_user.currentUserValue) {
      // alert("Ok let's go!")
       if (this.current_user.currentUserValue.account?.isApproved == true) {
         if (category == "Loan") {
           window.scrollTo(0,0);
          this.financialsercice_serve.AddFinancialServiceLoan(id_fs,this.current_user.currentUserValue.userId).subscribe(
            res => {

              this.router.navigate(['client-space/financial-services']);
            },
            error =>{
              alert(error);
            }
          ) 
         } else {
          alert("No available operation for this financial service category!");
         }   
       } else {
        // alert("here!");
        this.router.navigate(['client-space/my-account',id_fs,{data : {form_type:category}}]);
       }
    } else {
      this.router.navigate(['auth/login']);
    }
  }
} 
