import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly API_URL = "http://localhost:8080/api"

  constructor(private http:HttpClient) { }

  getSermonyList():Observable<any[]>{
    return this.http.get<any>(this.API_URL+'/sermons');
  }

  getNewiestSermons():Observable<any[]>{
    return this.http.get<any[]>(this.API_URL+'/sermons/main')
  }

  addSermony(val: any){
    return this.http.post(this.API_URL+'/sermons', val);
  }

  updateSermon(val:any){
    return this.http.put(this.API_URL+'/sermons', val);
  }

  deleteSermon(val:any){
    return this.http.delete(this.API_URL+'/sermons', val)
  }

  // getSermonAudio():Observable<any>{
  //   return this.http.get<any>('http://localhost:8080/api/sermon/{{mainSermon.id}}/audio')
  // }
}
