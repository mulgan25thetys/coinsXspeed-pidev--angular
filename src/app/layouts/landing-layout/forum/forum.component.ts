import { Component, OnInit } from '@angular/core';

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

  list_forums :[] = [];
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAllForum();
  }

  getAllForum(){
  
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
