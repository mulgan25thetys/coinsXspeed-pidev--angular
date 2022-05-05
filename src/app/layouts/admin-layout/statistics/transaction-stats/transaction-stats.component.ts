import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-transaction-stats',
  templateUrl: './transaction-stats.component.html',
  styleUrls: ['./transaction-stats.component.css']
})
export class TransactionStatsComponent implements OnInit {

  am_jan:number=0;
  am_fev:number=0;
  am_mar:number=0;
  am_apr:number=0;
  am_may:number=0;
  am_jun:number=0;
  am_jul:number=0;
  am_aug:number=0;
  am_sep:number=0;
  am_oct:number=0;
  am_nov:number=0;
  am_dec:number=0;

  salesData: ChartData<'bar'>;
  chartOptions: ChartOptions;
  constructor(private service:TransactionService,private toatr:ToastrService) { }

  ngOnInit(): void {

    var d;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
     'September', 'October', 'November', 'December'];
    this.service.getTransactions().subscribe(
      res => {
        res.forEach(element => {
          d=new Date(element.created_at);
          switch (months[d.getMonth()]) {
            case 'January':
              
              this.am_jan = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth() ).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'February':
              this.am_fev = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth()).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'March':
              this.am_mar = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth()).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'April':
              this.am_apr = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth()).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'May':
              this.am_may = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth() ).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'June':
              this.am_jun = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth() ).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'July':
              this.am_jul = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth() ).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'August':
              this.am_aug = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth()).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'September':
              this.am_sep = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth()).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'October':
              this.am_oct = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth()).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'November':
              this.am_nov = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth()).reduce((sum, current) => sum + current.amont, 0);
            break;
            case 'December':
              this.am_dec = res.filter(trans =>new Date(trans.created_at).getMonth() == d.getMonth() ).reduce((sum, current) => sum + current.amont, 0);
            break;
            default:
              break;
          }
        });
        this.salesData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dev'],
          datasets: [
            { label: 'Total amount', data: [this.am_jan, this.am_fev, this.am_mar,
               this.am_apr, this.am_may,this.am_jun,this.am_jul,this.am_aug,this.am_sep,
               this.am_oct,this.am_nov,this.am_dec] },
          ],
        };
      
        this.chartOptions = {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Yearly Transactions',
            },
          },
        };
      },error =>{
        this.toatr.error("Transactions stats","an error has been occured!");
      }
    )

    

  }

  
}
