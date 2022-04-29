import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  apiUrl : string = "/api/Coinsxspeed/transaction/";

  constructor(private http:HttpClient) { }

  getTransactionsAccount(id:any):Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiUrl+"get-account"+id);
  }
}
