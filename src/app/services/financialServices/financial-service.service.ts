import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialService } from 'src/app/models/financialService';

@Injectable({
  providedIn: 'root'
})
export class FinancialServiceService {

  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  apiUrl : string = "/api/Coinsxspeed/financial-service/";

  constructor(private http:HttpClient) { }

  getFinancialServicesAccount(id:number):Observable<FinancialService[]> {
    return this.http.get<FinancialService[]>(this.apiUrl+"list-financial-service-account/"+id);
  }

  getAllFinancialServices():Observable<FinancialService[]> {
    return this.http.get<FinancialService[]>(this.apiUrl+"list-financial-service");
  }

  AddFinancialServiceLoan(id_fs:number,id_user:number):Observable<FinancialService>{
    return this.http.put<FinancialService>(this.apiUrl+"add-financial-service-loan/"+id_fs+"/"+id_user,null);
  }

  getFinancialServices(id_fs : number) : Observable<FinancialService>{
    return this.http.get<FinancialService>(this.apiUrl+"get-financial-service/" + id_fs);
  }

  updateFinancialServices(fs : FinancialService) : Observable<FinancialService> {
    return this.http.put<FinancialService>(this.apiUrl+"modify-financialService",fs) ;
  }

  addFinancialServices(fs : FinancialService) : Observable<FinancialService> {
    return this.http.post<FinancialService>(this.apiUrl+"add-financial-service",fs);
  }

  addFinancialServiceToUser(fs : FinancialService , id_user : number ) : Observable<FinancialService> {
    return this.http.post<FinancialService>(this.apiUrl+"add-financial-service-to-User/"+id_user,fs) ;
  }

  deleteFinancialService(id_fs : number){
     this.http.delete<FinancialService>(this.apiUrl+"delete-financialService/"+id_fs);
  }
}
 