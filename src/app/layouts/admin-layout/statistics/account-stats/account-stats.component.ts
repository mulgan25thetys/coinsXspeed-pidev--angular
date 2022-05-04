import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-account-stats',
  templateUrl: './account-stats.component.html',
  styleUrls: ['./account-stats.component.css']
})
export class AccountStatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dev'],
    datasets: [
      { label: 'Currents', data: [1000, 1200, 1050, 2000, 500] },
      { label: 'Savings', data: [200, 100, 400, 50, 90] },
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Yearly Accounts',
      },
    },
  };
}
