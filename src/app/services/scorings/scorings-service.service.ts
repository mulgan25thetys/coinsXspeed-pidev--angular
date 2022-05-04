import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError,catchError } from 'rxjs';
import { ScoreResponse } from 'src/app/models/score-response';
import { ScoreForm } from '../../models/score-form';


@Injectable({
  providedIn: 'root'
})
export class ScoringsServiceService {

  httpOptions = { 
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  }

  apiUrl : string = "/api/Coinsxspeed/scoreform/";

  constructor(private http:HttpClient) { }

  getAllScoreForms():Observable<ScoreForm[]> {
    return this.http.get<ScoreForm[]>(this.apiUrl+"list-form");
  }

  getScoreForm(type:any):Observable<ScoreForm>{
    return this.http.get<ScoreForm>(this.apiUrl+"get-form"+"/"+type);
  }

  getScoreFormByUser(id:any):Observable<ScoreForm>{
    return this.http.get<ScoreForm>(this.apiUrl+"get-form-by-user/"+id);
  }

  addScoreForm(scoreForm:ScoreForm) :Observable<ScoreForm>{
    return this.http.post<ScoreForm>(this.apiUrl+"add-score-form",scoreForm,this.httpOptions);
  }
  
  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }
  updateScoreForm(ScoreForm:ScoreForm):Observable<ScoreForm>{
    return this.http.put<ScoreForm>(this.apiUrl+"edit-form/",ScoreForm,this.httpOptions);
  }

  deleteScoreForm(id:number):Observable<ScoreForm>{
    return this.http.delete<ScoreForm>(this.apiUrl+"delete-form/"+id);
  }

  deleteScoreResponse(id:number):Observable<ScoreResponse>{
    return this.http.delete<ScoreResponse>(this.apiUrl+"delete-response/"+id);
  }

  completeScoreForm(scoreform :ScoreForm,idUser:number) :Observable<ScoreResponse>{
    return this.http.put<ScoreResponse>(this.apiUrl+'answer-form/'+idUser,scoreform);
  }

  getResponsesForm():Observable<ScoreResponse[]>{
    return this.http.get<ScoreResponse[]>(this.apiUrl+"get-responses-form");
  }
}
