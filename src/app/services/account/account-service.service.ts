import { HttpClient ,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable , from, Observable ,map } from 'rxjs';
import { FinancialService } from 'src/app/models/financialService';
import { User } from 'src/app/models/user';
import { Account } from '../../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  apiUrl : string = "/api/Coinsxspeed/account/";

  constructor(private http:HttpClient) { }

  getAllAccounts():Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl+"list-accounts");
  }

  getAllCLients():Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl+"get-all-clients");
  }

  getAccount(id:number):Observable<Account>{
    return this.http.get<Account>(this.apiUrl+"get-account"+"/"+id);
  }

  addAccount(account:Account) :Observable<Account>{
    return this.http.post<Account>(this.apiUrl+"add-account/"+account.user.userId,account,this.httpOptions);
  }
  
  updateAccount(id:number,account:Account):Observable<Account>{
    return this.http.put<Account>(this.apiUrl+"edit-account/"+id,account,this.httpOptions);
  }

  getUserByAccount(id:number):Observable<User>{
    return  this.http.get<User>(this.apiUrl+"get-user-by-account"+"/"+id);
  }

  getAccountByUser(id:number):Observable<Account>{
    return  this.http.get<Account>(this.apiUrl+"get-user-account"+"/"+id);
  }
  // deleteAccount(id:number):Observable<Account>{
  //   return this.http.delete<Account>(this.apiUrl+"/"+id);
  // }

  getFinancialServices():Observable<FinancialService[]>
  {
    return this.http.get<FinancialService[]>("/api/Coinsxspeed/financial-service/list-financial-service");
  }

  lockAccount(id:number,status:any):any{
    return this.http.put<String>(this.apiUrl+"change-account-status/"+id+"/"+status,null);
  }
}
