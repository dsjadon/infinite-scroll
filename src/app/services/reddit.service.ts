import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(
    private http: HttpClient
  ) { }

  getItems():Observable<any>{
    return this.http.get('https://www.reddit.com/r/aww/new.json');
  }

  getSubredditItemById(id: string){
    return this.http.get(`https://www.reddit.com/r/aww/${id}`)
  }
}
