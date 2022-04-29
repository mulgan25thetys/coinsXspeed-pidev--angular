import { Component, OnInit } from '@angular/core';
import { NoFinancialService } from 'src/app/models/noFinancialService';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  sideTitle:string="No financial services";
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];

  list_no_financial_services :NoFinancialService[] = [];
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllNoFinancialServices();
  }

  getAllNoFinancialServices(){
  
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllNoFinancialServices();
    
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllNoFinancialServices();
  }
}
