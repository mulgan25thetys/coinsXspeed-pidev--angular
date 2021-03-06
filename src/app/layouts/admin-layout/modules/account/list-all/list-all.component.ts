import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountServiceService } from 'src/app/services/account/account-service.service';
import { saveAs } from 'file-saver';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

// import * as $ from 'jquery';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  @ViewChild('selectElem') el:ElementRef;

  pageTitle = "Management > Account";
  baseLink = "/admin/management/account/";
  is_deleted :boolean =false;
  listAccounts : Account[] = [];

  search:string="";

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  total_capital:number=0;
  total_opened:number=0;
  total_closed:number=0;
  total_locked:number=0;
  total_savings:number=0;
  total_currents:number=0;
  total_approved:number=0;
  total_inapproved:number=0;

  user_id:number=0;

  constructor(private acc_service:AccountServiceService,
    private toastr:ToastrService,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.user_id = this.activedRoute.snapshot.params.id;
    window.scrollTo(0, 0);
    this.getAllAccounts(this.user_id);
    
  }  

  getAllAccounts(id_user:any) {
    if (id_user) {
      this.acc_service.getAccountByUser(id_user).subscribe(
        res => {
          if(res !=null){
            this.listAccounts = [];
            this.listAccounts.push(res);
          }else {
            this.toastr.info("There is no account for this user","Show account")
          }     
        },
        error => {
          this.toastr.error(error,"An error has been occured!");
        }
      )
    } else {
      this.acc_service.getAllAccounts().subscribe(
        res => {  this.listAccounts = res; 
            this.total_capital = this.getStatistic_capital(this.listAccounts);
            this.total_currents = this.getStatistic_type(this.listAccounts,"CURRENT"); //get total current
            this.total_savings = this.getStatistic_type(this.listAccounts,"SAVINGS"); //get total savings
            this.total_opened = this.getStatistic_state(this.listAccounts,"OPENED"); //get total opened
            this.total_closed = this.getStatistic_state(this.listAccounts,"CLOSED"); //get total closed
            this.total_locked = this.getStatistic_state(this.listAccounts,"LOCKED"); //get total locked
            this.total_approved = this.getStatistic_appvr(this.listAccounts,true); //get total current
            this.total_inapproved = this.getStatistic_appvr(this.listAccounts,false); //get total current
         },
        error => {  console.log(error);  }
      )
    }
  }

  getStatistic_capital(lists: Account[]){
    const sum = this.listAccounts.filter(item => item.capital != 0)
                        .reduce((sum, account) => sum + account.capital, 0);
    return sum;
   }
  getStatistic_type(lists: Account[],filterValue:any){
   return lists.filter(
        account => account.type == filterValue
      ).length;
  }
  getStatistic_state(lists: Account[],filterValue:any){
    return lists.filter(
        account => account.state == filterValue
      ).length;
  }
  getStatistic_appvr(lists: Account[],filterValue:any){
    return lists.filter(
        account => account.isApproved == filterValue
      ).length;
  }
  onActualize(value:any=null){
    if (value == true) {
      this.ngOnInit();
    } else {
      this.getAllAccounts(this.user_id=null);
    } 
    
  }
  lockAccount(id:any){
    this.acc_service.lockAccount(id,"").subscribe(
      res => { this.toastr.info(res,'Locked Account')},
      error => {this.toastr.error(error)}
    )
  }
  exportExcel(){
    this.acc_service.exportToExcelFile().subscribe(
      res => {
        console.log(res);
      },
      error => {
        this.toastr.error("An error has been occured!",error);
      }
    )

  }
  changeStatus(){
    alert('ready to change!');
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getAllAccounts(this.user_id=null);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllAccounts(this.user_id=null);
  }
  checkAllCheckBox(ev: any) { // Angular 13
		this.listAccounts.forEach(x => x.checked = ev.target.checked)
	}
  
  isAllCheckBoxChecked() {
		return this.listAccounts.every(acc => acc.checked);
	}
  exportPdf(){
    this.acc_service.exportToPdfFile().subscribe(
      res => {
        
        var file = new Blob([res], { type: 'application/pdf' })
        var fileURL = URL.createObjectURL(file);
        var a         = document.createElement('a');
        a.href        = fileURL; 
        a.target      = '_blank';
        a.download    = 'accounts.pdf';
        document.body.appendChild(a);
        a.click();  
            },
      error => {
        this.toastr.error("An error has been occured!",error);
      }
    )

  }
}