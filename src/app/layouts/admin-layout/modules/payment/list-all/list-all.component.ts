import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  pageTitle : string ="Management > Payments";
  baseLink : string ="/admin/management/payment/";

  search:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  id:number;
  account_id:any;
  listPayments : Payment[] = [];

  constructor(private activedRoute:ActivatedRoute,private toastr:ToastrService,private payService:PaymentService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.id = this.activedRoute.snapshot.params.id;
    this.getAllPayments(this.id);
  }

  getAllPayments(id:number=null){
    if (this.id !=null) {
      this.payService.getAllPaymentForFS(id).subscribe(
        res => {
          this.listPayments = res;
        },
        error => {
          this.toastr.error("There is not payment for this Loan","List payements");
        }
      )
    } else {
      this.payService.getAllPayments().subscribe(
        res => {
          this.listPayments = res;
        },
        error => {
          this.toastr.error(error,"List Payment");
        }
      )
    }
  }

  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllPayments(this.id);
    }
    
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllPayments(this.id);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllPayments(this.id);
  }

  checkAllCheckBox(ev: any) { // Angular 13
		this.listPayments.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.listPayments.every(acc => acc.checked);
	}

  exportPdf(){
    this.payService.exportToPdfFile().subscribe(
      res => {
        
        var file = new Blob([res], { type: 'application/pdf' })
        var fileURL = URL.createObjectURL(file);
        var a         = document.createElement('a');
        a.href        = fileURL; 
        a.target      = '_blank';
        a.download    = 'payment.pdf';
        document.body.appendChild(a);
        a.click();  
            },
      error => {
        this.toastr.error("An error has been occured!",error);
      }
    )

  }

}
