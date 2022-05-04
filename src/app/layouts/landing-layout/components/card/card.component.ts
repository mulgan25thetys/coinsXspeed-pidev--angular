import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FinancialService } from 'src/app/models/financialService';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() financial_services : FinancialService;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmitToFinancialService(id_fs:any){
    // this.router.navigate([`${'client-space/my-account'}`, { queryParams: { id_fs: id_fs } }]);
    // ([`${link.split('?')[0]}`, { queryParams: {id: 37, username: 'jimmy'}}]);
    window.location.href = '/client-space/my-account';
  }
}
