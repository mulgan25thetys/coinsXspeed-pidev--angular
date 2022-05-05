import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { NoFinancialService } from 'src/app/models/noFinancialService';
import { ClaimService } from 'src/app/services/claims/claim.service';
import { NoFinancialServicesService } from 'src/app/services/nofinancialServices/no-financial-services.service';

@Component({
  selector: 'app-reclamation-stat',
  templateUrl: './reclamation-stat.component.html',
  styleUrls: ['./reclamation-stat.component.css']
})
export class ReclamationStatComponent implements OnInit {
  nbr_activity_bus_push:number=0;
  nbr_activity_bus_unpush:number=0;
  nbr_activity_heal_unpush:number=0;
 
  nbr_activity_heal_push:number=0;
  nbr_activity_agr_unpush:number=0;
  nbr_activity_agr_push:number=0;
  nbr_cur_nbr_views:number=0; 
  noFinancialData: ChartData<'bar'>;
  chartOptions: ChartOptions;
  

  constructor(private nofin:NoFinancialServicesService,private toarts:ToastrService) { }

  ngOnInit(): void {
    this.nofin.getAllNoFinancialServices().subscribe(res=>{
      this.nbr_activity_agr_push=res.filter(f=>f.activityType=="AGRICULTURE" && f.published==true).length
      this.nbr_activity_agr_unpush=res.filter(a=>a.activityType=="AGRICULTURE" && a.published==false).length

      this.nbr_activity_bus_push=res.filter(f=>f.activityType=="BUSINESS" && f.published==true).length
      this.nbr_activity_bus_unpush=res.filter(d=>d.activityType=="BUSINESS" && d.published==false).length
      this.nbr_activity_heal_push=res.filter(d=>d.activityType=="HEALTH" && d.published==true ).length
      this.nbr_activity_heal_unpush=res.filter(a=>a.activityType=="HEALTH" && a.published==false ).length
      this.noFinancialData= {
        labels: ['published', 'unpublished'], datasets: [
          { label: 'AGRICULTURE', data: [this.nbr_activity_agr_push, this.nbr_activity_agr_unpush] },
          { label: 'BUSINESS', data: [this.nbr_activity_bus_push, this.nbr_activity_bus_unpush] },
          { label: 'HEALTH', data: [this.nbr_activity_heal_push, this.nbr_activity_heal_unpush] },
        ],


    };this.chartOptions = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Nofinacial',
        },
      },
    };
  },
  error =>{
    this.toarts.error(error,"An error has been occured!");
  }
);
}

}

  


