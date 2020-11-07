import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private newsService : NewsService,
              private sermonService : SharedService) { }

  newsList: any= [];
  sermonsList: any= [];

  ngOnInit(): void {
    this.refreshNewsList();
    this.refreshSermonsList();
  }

  refreshNewsList(){
    this.newsService.getNewiestNews().subscribe(data =>{
      this.newsList = data;
      this.newsList.map( news => {
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

}
