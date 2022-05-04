import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  apiUrl : string = "/api/Coinsxspeed/transaction/";
 
  constructor(private http:HttpClient) { }

  addTransaction(Transaction: Transaction ):Observable<Transaction>{
    return this.http.post<Transaction>(this.apiUrl+"add-transaction", Transaction);
  }

  modifyTransaction(Transaction: Transaction,idTransaction:string ):Observable<Transaction>{
    return this.http.put<Transaction>(this.apiUrl+"modify-Tran/"+ idTransaction, Transaction);
  }

  getTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.apiUrl+"list-transactions");
  }

  deleteTransactions(id:number):Observable<any>{
    return this.http.delete<any>(this.apiUrl+"delete-transaction/"+id);
  }


}
