import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-service',
  templateUrl: './financial-service.component.html',
  styleUrls: ['./financial-service.component.css']
})
export class FinancialServiceComponent implements OnInit {
  pageTitle = "Management > Financial Service"
  constructor() { }

  ngOnInit(): void {
  }

}
