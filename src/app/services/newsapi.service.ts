import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, ObservableInput } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor( private httpClient : HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c708e468448418cbd655e168fd2768f"

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8c708e468448418cbd655e168fd2768f"

  sciApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=8c708e468448418cbd655e168fd2768f"

  news():Observable<any>
  {
return this.httpClient.get(this.newsApiUrl);
  }

  techNews():Observable<any>{
    return this.httpClient.get(this.techApiUrl);
  }

  sciNews():Observable<any>{
    return this.httpClient.get(this.sciApiUrl);
  }
}
