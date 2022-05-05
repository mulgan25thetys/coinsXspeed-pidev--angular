import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reaction } from '../models/reaction';


@Injectable({
  providedIn: 'root'
})
export class ReactionService {
  apiUrl : string = "/api/Coinsxspeed/Reaction/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }
  addLike(reaction: Reaction | undefined, idPost: string | number, idUser: string): Observable<Reaction> {
    return this.http.put<Reaction>(this.apiUrl + '/addLike/' + idPost + '/' + idUser, JSON.stringify(reaction), this.httpOptions);
  }
  addDislike(reaction: Reaction | undefined, idPost: string | number, idUser: string): Observable<Reaction> {
    return this.http.put<Reaction>(this.apiUrl + '/addDislike/' + idPost + '/' + idUser, JSON.stringify(reaction), this.httpOptions);
  }
}
