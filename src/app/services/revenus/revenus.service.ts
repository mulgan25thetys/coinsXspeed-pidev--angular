import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Revenus } from 'src/app/models/revenus';

@Injectable({
  providedIn: 'root'
})
export class RevenusService {

  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  apiUrl : string = "/api/Coinsxspeed/revenus/";
  
  constructor(private http:HttpClient) { }

  getRevenus():Observable<Revenus[]>{
    return this.http.get<Revenus[]>(this.apiUrl+"get-revenus");
  }
}
