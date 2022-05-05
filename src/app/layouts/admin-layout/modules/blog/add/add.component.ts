import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NoFinancialService } from 'src/app/models/noFinancialService';
import { Reaction } from 'src/app/models/reaction';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FileUploadeService } from 'src/app/services/file-uploade.service';
import { NoFinancialServicesService } from 'src/app/services/nofinancialServices/no-financial-services.service';
import { ReactionService } from 'src/app/services/reaction.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  noFinancialService=new NoFinancialService();
 
  showAlert=false;
  messageAlert="";
 

  pageTitle:string ="Blog > Add Post"
  constructor(private NoService:NoFinancialServicesService,private toarts:ToastrService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getallClient();
    
    
  }
  getallClient(){
    this.NoService.getAllNoFinancialServices();}
  onAddnoFinancialService(form:NgForm){
    

    this.NoService.addNoFinancialServices(this.noFinancialService).subscribe(res=>{
      console.log(res)
      this.toarts.success('Add Post','Post has been added!')
      form.reset()
      this.ngOnInit();
    })
   
    
  
    // OnClick of button Upload
   
     
     
   
      }}
