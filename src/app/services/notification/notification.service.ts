import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from 'src/app/models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  apiUrl : string = "/api/Coinsxspeed/notification/";

  constructor(private http:HttpClient) { }

  addContact(n:Notification):Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl+"add-notification",n);
  }

  addNotification(n:Notification,id:any):Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl+"send-notification/"+id,n);
  }

  getNotification():Observable<Notification[]>
  {
    return this.http.get<Notification[]>(this.apiUrl+"list-all");
  }

  deleteNotification(id:any):Observable<any>
  {
    return this.http.delete<any>(this.apiUrl+"delete-notif/"+id);
  }
}
 