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
  listClaims : Claim[] = [];

  constructor(private activedRoute:ActivatedRoute,
    private toastr:ToastrService,private serviceclaim:ClaimService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllClaims();
  }

  getAllClaims(){
    this.serviceclaim.getAllClaim().subscribe(
      res => {
        this.listClaims = res;
      },
      error => {
        this.toastr.error(error,"An error has been occured!");
      }
    )
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllClaims();
    }
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllClaims();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllClaims();
  }

  checkAllCheckBox(ev: any) { // Angular 13
		this.listClaims.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.listClaims.every(acc => acc.checked);
	}

}
