import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/kech-webapp-library/models/news';
import { NewsService } from 'src/app/kech-webapp-library/services/news.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  news: News = new News();
  newsList: News[] = []
  fileToUpload: File = null;

  
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
