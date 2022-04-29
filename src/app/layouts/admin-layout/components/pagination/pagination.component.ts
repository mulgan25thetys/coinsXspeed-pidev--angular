import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page: number = 1;
  count: number = 0;
  tableSize: number = 1;
  tableSizes: any = [3, 6, 9, 12];

  constructor() { }

  ngOnInit(): void {
  }
}
