import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoFinancialService } from 'src/app/models/noFinancialService';
import { NoFinancialServicesService } from 'src/app/services/nofinancialServices/no-financial-services.service';

@Component({
  selector: 'app-forum-c',
  templateUrl: './forum-c.component.html',
  styleUrls: ['./forum-c.component.css']
})
export class ForumCComponent implements OnInit {
  //imgUrl="src\assets\images"

  @Input() forum :NoFinancialService;
  
  constructor(private service:NoFinancialServicesService) { }

  ngOnInit(): void {
    //this.service.updateNoFinancialServices(this.forum)
  }
  sendLike(f:NoFinancialService){
    console.log(f);
    f.nbr_like++;
    this.service.updateNoFinancialServices(f);

  }
  sendDislike(f:NoFinancialService){
    f.nbr_unlike++;
    this.service.updateNoFinancialServices(f);
  }
 

}
