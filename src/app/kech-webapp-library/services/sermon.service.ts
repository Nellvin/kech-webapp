import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sermon } from '../models/sermon';

@Injectable({
  providedIn: 'root'
})
export class SermonService {
  
  readonly API_URL = "http://localhost:8080/api"
  
  constructor(private http:HttpClient) { }

  getSermonyList():Observable<any[]>{
    return this.http.get<any>(this.API_URL+'/sermons');
  }

  getSermon(id: Number):Observable<Sermon>{
    return this.http.get<Sermon>(this.API_URL+'/sermons/'+id)
  }

  getNewiestSermons():Observable<any[]>{
    return this.http.get<any[]>(this.API_URL+'/sermons/main')
  }

  addSermony(val: any){
    return this.http.post(this.API_URL+'/sermons', val);
  }

  updateSermon(val: Sermon){
    return this.http.put(`${this.API_URL}/sermons/${val.id}`, val);
  }

  deleteSermon(val:any){
    return this.http.delete(`${this.API_URL}/sermons/${val}`)

  }

  multipartSermonAdd(sermon: Sermon): Observable<Object>{
    const formData = new FormData();
    formData.append('sermon', 
      new Blob(
        [JSON.stringify(sermon)], 
        {type: "application/json"}
      )
    );
    formData.append('image', sermon.image);
    formData.append('audio', sermon.audio);
    return this.http.post<any>(this.API_URL+'/sermons/xd', formData)
    // return this.http.post(this.API_URL+'/posts_file', news);
  }
}
