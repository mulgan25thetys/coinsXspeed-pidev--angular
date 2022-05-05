import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoFinancialService } from 'src/app/models/noFinancialService';

@Injectable({
  providedIn: 'root'
})
export class NoFinancialServicesService {

  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  apiUrl : string = "/api/Coinsxspeed/no-financial-service/";

  constructor(private http:HttpClient) { }

  getAllNoFinancialServices():Observable<NoFinancialService[]> {
    return this.http.get<NoFinancialService[]>(this.apiUrl+"list-all");
  }
  addNoFinancialServices(nofinac:NoFinancialService):Observable<NoFinancialService>{
    return this.http.post<NoFinancialService>(this.apiUrl+"add-fin",nofinac);
  }
  getNoFinancialByUser(id:number):Observable<NoFinancialService>{
    return this.http.get<NoFinancialService>(this.apiUrl+"retrieve-financialserviceByUser"+"/"+id,this.httpOptions);
  }
  updateNoFinancialServices(nofinac:NoFinancialService):Observable<NoFinancialService>{
    return this.http.post<NoFinancialService>(this.apiUrl+"update-fin",nofinac);
}
}