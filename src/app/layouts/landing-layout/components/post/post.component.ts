import { Component, OnInit,Input } from '@angular/core';
import { NoFinancialService } from 'src/app/models/noFinancialService';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() no_financialservice: NoFinancialService;
  
  constructor() { }

  ngOnInit(): void {
  }

}
