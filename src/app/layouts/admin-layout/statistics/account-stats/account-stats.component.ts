import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { AccountServiceService } from 'src/app/services/account/account-service.service';

@Component({
  selector: 'app-account-stats',
  templateUrl: './account-stats.component.html',
  styleUrls: ['./account-stats.component.css']
})
export class AccountStatsComponent implements OnInit {

  nbr_cur_app:number=0;
  nbr_cur_unap:number=0;
  nbr_cur_ope:number=0;
  nbr_cur_clos:number=0;
  nbr_cur_lock:number=0;
  nbr_sav_app:number=0;
  nbr_sav_unap:number=0;
  nbr_sav_ope:number=0;
  nbr_sav_clos:number=0;
  nbr_sav_lock:number=0;

  accountsData: ChartData<'bar'>;
  chartOptions: ChartOptions;

  constructor(private service_acc:AccountServiceService,private toarts:ToastrService) { }

  ngOnInit(): void {
    this.service_acc.getAllAccounts().subscribe(
      res => {
        this.nbr_cur_app = res.filter(account => account.isApproved == true && account.type == "CURRENT").length;
        this.nbr_cur_unap = res.filter(account => account.isApproved == false && account.type == "CURRENT").length;
        this.nbr_cur_ope = res.filter(account => account.state == "OPENED" && account.type == "CURRENT").length;
        this.nbr_cur_clos = res.filter(account => account.state == "CLOSED" && account.type == "CURRENT").length;
        this.nbr_cur_lock = res.filter(account => account.state == "LOCKED" && account.type == "CURRENT").length;

        this.nbr_sav_app = res.filter(account => account.isApproved == true && account.type == "SAVINGS").length;
        this.nbr_sav_unap = res.filter(account => account.isApproved == false && account.type == "SAVINGS").length;
        this.nbr_sav_ope = res.filter(account => account.state == "OPENED" && account.type == "SAVINGS").length;
        this.nbr_sav_clos = res.filter(account => account.state == "CLOSED" && account.type == "SAVINGS").length;
        this.nbr_sav_lock = res.filter(account => account.state == "LOCKED" && account.type == "SAVINGS").length;

        this.accountsData = {
          labels: ['Approved ', 'Unapproved', 'Opened', 'Closed', 'Locked'],
          datasets: [
            { label: 'Currents', data: [this.nbr_cur_app, this.nbr_cur_unap, this.nbr_cur_ope, this.nbr_cur_clos, this.nbr_cur_lock] },
            { label: 'Savings', data: [this.nbr_sav_app, this.nbr_sav_unap, this.nbr_sav_ope, this.nbr_sav_clos, this.nbr_sav_lock] },
          ],
        };
        console.log(this.accountsData.datasets);
        this.chartOptions = {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Accounts',
            },
          },
        };
      },
      error =>{
        this.toarts.error(error,"An error has been occured!");
      }
    );
  }

}
