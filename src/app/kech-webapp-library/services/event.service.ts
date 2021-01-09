import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  readonly API_URL = "http://localhost:8080/api"

  constructor(private http:HttpClient) { }

  getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(this.API_URL+'/events')
  }

  getSingleEvent(id: Number):Observable<Event>{
    return this.http.get<Event>(`${this.API_URL}/events/${id}`)
  }

  saveEvent(event: Event): Observable<Event>{
    return this.http.post<Event>(this.API_URL+'/events', event);
  }

  updateEvent(event: Event){
    return this.http.put(`${this.API_URL}/events/${event.id}`, event);
  }

  deleteEvent(id: number){
    return this.http.delete(`${this.API_URL}/events/${id}`)
  }
}
