import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { SharedService } from '../../services/shared.service';
import { Sermon } from '../../models/sermon';
import { News } from '../../models/news';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private newsService : NewsService,
              private sermonService : SharedService,
              private eventService: EventService) { }

  newsList: News[]= [];
  sermonsList: Sermon[]= [];
  eventList: Event[] = []

  ngOnInit(): void {
    this.refreshNewsList();
    this.refreshSermonsList();
    this.getEventList();
  }

  refreshNewsList(){
    this.newsService.getNewiestNews().subscribe(data =>{
      this.newsList = data;
      this.newsList.map( news => {
        if(news.content.length > 200)
          news.content = news.content.substring(0,200)+"...";
        // news.createDate = news.createDate.substring(0,10);
      })
    })
  }
  
  refreshSermonsList(){
    this.sermonService.getNewiestSermons().subscribe(data =>{
      this.sermonsList = data;
    })
  }

  getEventList(){
    this.eventService.getEvents().subscribe(data => {
      this.eventList = data;
    })
  }

}
