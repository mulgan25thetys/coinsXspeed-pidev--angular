import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FinancialService } from 'src/app/models/financialService';
import { FinancialServiceService } from 'src/app/services/financialServices/financial-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  baseLink = "/admin/management/financial-service/";
  pageTitle="Financial Service > Edit";

  showAlert= false;
  messageAlert= "";
  
  id : any;

  constructor(private service:FinancialServiceService,private toastr:ToastrService,private activedRoute : ActivatedRoute,private router:Router) { }

  financialService = new FinancialService() ;

  ngOnInit(): void {
    this.service.getFinancialServices(this.activedRoute.snapshot.params.id).subscribe(
      res=> {
        this.financialService = res;
      },
      error=> {
        console.log(error)
      }
      
      
    );
  }

  onEditFinancialService(){ 
    this.service.updateFinancialServices(this.financialService).subscribe(
      res => {
        console.log(res);
        this.financialService = new FinancialService() ;
        this.ngOnInit();
        this.showAlert = true;
        this.messageAlert = "The Financial Services has been Edited successfully!";
      }, 
      error => {
        console.log(error);  
        this.showAlert = true;
        this.messageAlert = error.message; 
      }
    )
    
  } 

}
