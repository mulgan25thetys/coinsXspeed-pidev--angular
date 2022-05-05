import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim} from '../../models/claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
   
  }
  apiUrl : string = "/api/Coinsxspeed/claim/";

  constructor(private http:HttpClient) { }
  getAllClaim():Observable<Claim[]>{
    return this.http.get<Claim[]>(this.apiUrl+"retrieve-all-reclamations");

  }
  getAllClaimForUser(id:number):Observable<Claim[]>{
    return this.http.get<Claim[]>(this.apiUrl+"retrieve-all-reclamations-user/"+id);

  }
  addClaim(claim:Claim,iduser:number):Observable<Claim>{
    return this.http.post<Claim>(this.apiUrl+"add-claim/"+iduser,claim);
  }
  getClaim(id:number):Observable<Claim>{
    return this.http.get<Claim>(this.apiUrl+"retrieve-reclamation/"+id);

  }
  ModifClaim(claim:Claim,id:Number):Observable<object>{
    return this.http.put<Claim>(this.apiUrl+"modify-claim/"+id,claim);

  }
  AnswerClaim(idc:Number):Observable<object>{
    return this.http.get<Claim>(this.apiUrl+"answer-claim/"+idc);

  }
  getClaimByUser(IdClient:number):Observable<Claim[]>{
    return this.http.get<Claim[]>(this.apiUrl+"retrieve-complaintByClient/"+IdClient);
  }
  deletClaim(id:number){
    this.http.delete(this.apiUrl+"delete/"+id);
  }
  }


