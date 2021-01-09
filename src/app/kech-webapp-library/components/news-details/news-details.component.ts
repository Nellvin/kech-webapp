import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  news: News = new News()

  ngOnInit(): void {
    this.getNews();
    console.log('details')
  }

  getNews(){
    const id = this.route.snapshot.paramMap.get('id');
    this.newsService.getSingleNews(Number(id)).subscribe(data =>{
      this.news = data; 
      console.log(this.news)
    })
  }

}
