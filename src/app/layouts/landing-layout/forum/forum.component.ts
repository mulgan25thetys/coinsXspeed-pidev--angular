import { Component, OnInit } from '@angular/core';
import { NoFinancialService } from 'src/app/models/noFinancialService';
import { NoFinancialServicesService } from 'src/app/services/nofinancialServices/no-financial-services.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  // sideTitle:string="No financial services";
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];

  list_forums :NoFinancialService[] = [];
  constructor(private service:NoFinancialServicesService) { }

  ngOnInit(): void {
     window.scrollTo(0,0);
    this.getAllForum(); 
  }

  getAllForum(){
    this.service.getAllNoFinancialServices().subscribe(
      res => {
        this.list_forums = res;
        console.log(this.list_forums);
      },error =>{
        console.log(error);
      }
    )
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllForum();
    
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllForum();
  }
}
