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
}
 