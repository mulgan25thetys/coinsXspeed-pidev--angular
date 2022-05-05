import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Claim } from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claims/claim.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  pageTitle : string ="Management > Claims";
  baseLink : string ="/admin/management/claim/";

  search:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  account_id:any;
  user_id:any;
  listClaims : Claim[] = [];

  constructor(private activedRoute:ActivatedRoute,
    private toastr:ToastrService,private serviceclaim:ClaimService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.user_id = this.activedRoute.snapshot.params.id;
    this.getAllClaims(this.user_id);
  }

  getAllClaims(id:any){
    if (id) {
      this.serviceclaim.getAllClaimForUser(id).subscribe(
        res => {
          this.listClaims = res;
        },
        error => {
          this.toastr.error(error,"An error has been occured!");
        }
      )
    } else {
      this.serviceclaim.getAllClaim().subscribe(
        res => {
          this.listClaims = res;
        },
        error => {
          this.toastr.error(error,"An error has been occured!");
        }
      )
    }
  }

  onAnswereClaim(idc:any){
    this.serviceclaim.AnswerClaim(idc).subscribe(
      res => { this.toastr.success("Answering claim","Operation has been done!");}
    )
  }
  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllClaims(this.user_id);
    }
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllClaims(this.user_id);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllClaims(this.user_id);
  }

  checkAllCheckBox(ev: any) { // Angular 13
		this.listClaims.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.listClaims.every(acc => acc.checked);
	}

}
