import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  readonly API_URL = "http://localhost:8080/api"

  constructor(private http:HttpClient) { }

  getNewsPage(page? : any):Observable<any[]>{
    if(page!= null)
      return this.http.get<any[]>(this.API_URL+'/posts2?page='+page);
    return this.http.get<any[]>(this.API_URL+'/posts2');
  }

  getNewiestNews():Observable<any[]>{
    return this.http.get<any[]>(this.API_URL+'/posts/main')
  }

  getNewsCount():Observable<any>{
    return this.http.get<any>(this.API_URL+"/posts/pages")
  }

  addNews(news: News): Observable<Object>{
    return this.http.post(this.API_URL+'/posts_file', news);
  }

  addNewsFormatedData(news: News): Observable<Object>{
    const formData = new FormData();
    
    formData.set('title', news.title);
    formData.set('content', news.content);
    formData.set('image', news.image);
    console.log(formData)
    return this.http.post<any>(this.API_URL+'/posts_file', formData)
    // return this.http.post(this.API_URL+'/posts_file', news);
  }

  multi(news: News): Observable<Object>{
    const formData = new FormData();
    
    formData.append('title', news.title);
    formData.append('content', news.content);
    // formData.append('image', news.image);
    console.log(news.title)
    return this.http.post<any>(this.API_URL+'/multi', formData)
    // return this.http.post(this.API_URL+'/posts_file', news);
  }

  multiTitle(news: News, image : File): Observable<Object>{
    const formData = new FormData();
    formData.append('post', 
      new Blob(
        [JSON.stringify(news)], 
        {type: "application/json"}
      )
    );
    formData.append('image', news.image);
    return this.http.post<any>(this.API_URL+'/G', formData)
    // return this.http.post(this.API_URL+'/posts_file', news);
  }

  updateNews(val:any){
    return this.http.put(this.API_URL+'/posts', val);
  }

  deleteSermon(val:any){
    return this.http.delete(this.API_URL+'/posts', val)
  }
}
