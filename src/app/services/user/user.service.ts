import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  apiUrl : string = "/api/Coinsxspeed/user/";

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl+"list-users");
  }

  getAllClients() :Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl+"list-users");
  }

  registerUser(customer:User):Observable<User>{
    return this.http.post<User>(this.apiUrl+"register-customer",customer);
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.apiUrl+"add-users",user);
  }
}
