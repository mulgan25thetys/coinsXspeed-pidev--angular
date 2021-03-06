import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  apiUrl : string = "/api/Coinsxspeed/payement/";
  
  constructor(private http:HttpClient) { }

  proceedToPayment(pay:Payment):Observable<Payment[]>{
    return this.http.put<Payment[]>(this.apiUrl+"proceed-payement-financial-service",pay);
  }

  getAllPaymentForAccount(id_acc:number):Observable<Payment[]>{
    return this.http.get<Payment[]>(this.apiUrl+"get-payement-account/"+id_acc);
  }

  getAllPaymentForFS(id_fs:number):Observable<Payment[]>{
    return this.http.get<Payment[]>(this.apiUrl+"get-payement-financial-service/"+id_fs);
  }

  getAllPaymentFSForAccount(id_fs:number,id_acc:number):Observable<Payment[]>{
    return this.http.get<Payment[]>(this.apiUrl+"get-payement-financial-service-account/"+id_fs+"/"+id_acc);
  }

  getAllPayments():Observable<Payment[]>{
    return this.http.get<Payment[]>(this.apiUrl+"list-payement");
  }

  exportToPdfFile():Observable<any>{
    var authorization = 'Bearer '+sessionStorage.getItem("access_token");

    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    "Authorization": authorization, responseType : 'blob'});

    return this.http.get(this.apiUrl+"export-pdf", { headers : headers,responseType : 
      'blob' as 'json'})
  }
}
