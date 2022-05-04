import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoFinancialService } from 'src/app/models/noFinancialService';
import { NoFinancialServicesService } from 'src/app/services/nofinancialServices/no-financial-services.service';

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
  constructor(private NofinanicalService:NoFinancialServicesService,private router:Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllNoFinancialServices();
  }

  getAllNoFinancialServices(){
    this.NofinanicalService.getAllNoFinancialServices().subscribe
    
    
  
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
