import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl : string = "/api/Coinsxspeed/Post/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }
  getPostsList(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl+"retrieve-all-posts");
  }
  create(post: Post, id: any): Observable<any>{
    return this.http.put<Post>(this.apiUrl+"add-post/"+id,JSON.stringify(post),this.httpOptions);
  }
  deletePost(id: number): Observable<Post>{
return this.http.delete<Post>(this.apiUrl+"remove-post"+id)
  }


}
