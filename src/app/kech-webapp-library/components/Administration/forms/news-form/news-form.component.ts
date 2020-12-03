import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/kech-webapp-library/models/news';
import { NewsService } from 'src/app/kech-webapp-library/services/news.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  news: News = new News();
  newsList: News[] = []
  fileToUpload: File = null;
  newsForm = new FormGroup({
    
  })

  
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getNews()
  }

  saveNews(){
    this.newsList.push(this.news)
    console.log(this.news)
    this.newsService.multiTitle(this.news, this.fileToUpload).subscribe(data =>{
      console.log(data)
    },error => console.log(error));
    this.news = new News()
  }

  getNews(){
    this.newsService.getNewsPage().subscribe(data =>{
      this.newsList = data
    })
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.news.image=files.item(0);
}
}
