import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
//import { Story } from '../interfaces/hacker-news-api';

//FORKJOIN
//forkJoin creates a new Observable from an array or a dictonary of Observables and
//when all Observables are completed this operator emit a single value with the latest data
//emitted by each of them, is like Promise.all

//MERGEMAP
//mergeMap will merge the resulted values of two Observables into one

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = "https://hacker-news.firebaseio.com/v0";
  path = "/newstories.json";

  constructor(private http: HttpClient) { }


  getStories() {
      return this.getIdsForStories(`${this.baseUrl}${this.path}`).pipe(
          mergeMap((ids) => forkJoin(ids.map((id: number) => this.getStoryDetails(id)))),
      );
  }

  getIdsForStories(url: string): Observable<any> {
      return this.http.get(url, {
          params: {
              orderBy: '"$key"',
              limitToFirst: '10',
          }
      });
  }

  getStoryDetails(id: number) {
      return this.http.get(`${this.baseUrl}/item/${id}.json`);
  }

//   loadMoreStories() {
      
//   }

}

