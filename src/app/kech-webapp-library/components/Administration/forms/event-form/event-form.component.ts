import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/kech-webapp-library/models/event';
import { EventService } from 'src/app/kech-webapp-library/services/event.service';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  event: Event;
  eventList: Event[] = [];
  uploadingInProgress: boolean = false;
  eventUpdating: boolean = false;


  constructor(
    private eventService: EventService
   ) { }

  ngOnInit(): void {
    this.getEvents();
    this.createNewEvent();
  }

  saveEvent(){
    this.uploadingInProgress = true;

    if(this.eventUpdating){
      this.eventService.updateEvent(this.event).subscribe(data =>{
        this.uploadingInProgress = false;
        for(let i = 0; i < this.eventList.length; i++){ 
          if(this.eventList[i].id == this.event.id)
          this.eventList[i] = this.event;
        }
        this.createNewEvent();
        this.eventUpdating = false;
      })
    }
    else{
      console.log(this.event) 
      this.eventService.saveEvent(this.event).subscribe(data => {
        this.event = data;
        this.eventList.unshift(this.event);
        this.uploadingInProgress = false;
        this.createNewEvent();
      },error => {
        console.log(error)      
        this.uploadingInProgress = false;
      })
    }
  }

  createNewEvent(){
    this.event = new Event();
  }

  getEvents(){
    this.eventService.getEvents().subscribe(data => {
      this.eventList = data;
    })
  }


  delete(id: number){
    this.eventService.deleteEvent(id).subscribe(data =>{
      for(let i = 0; i < this.eventList.length; i++){ 
        if(this.eventList[i].id == id)
          this.eventList.splice(i,1)
      }
    });
  }

  deleteProccesing(id: number){
    for(let i = 0; i < this.eventList.length; i++){ 
      if(this.eventList[i].id == id)
        this.eventList[i].deleting = !this.eventList[i].deleting;
    }
  }

  update(id: number){
    this.eventService.getSingleEvent(id).subscribe(data =>{
      this.event = data;
      this.eventUpdating = true;
      if(this.event.datetime!= null)
        this.event.datetime = this.event.datetime.substring(0,10) + 'T' + this.event.datetime.substring(11,16)
    })
  }


}
