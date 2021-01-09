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

  news: News;
  newsList: News[] = []
  fileToUpload: File = null;
  uploadingInProgress: boolean = false;
  newsUpdating: boolean = false;
  
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getNews()
    this.createNewNews();

  }

  saveNews(){
    this.uploadingInProgress = true;

    if(this.newsUpdating){
      this.newsService.updateNews(this.news).subscribe(data =>{
        this.uploadingInProgress = false;
        for(let i = 0; i < this.newsList.length; i++){ 
          if(this.newsList[i].id == this.news.id)
          this.newsList[i] = this.news;
        }
        this.createNewNews();
        this.newsUpdating = false;
      })
    }
    else{
      
    // console.log(this.news)
    this.newsService.multiTitle(this.news, this.fileToUpload).subscribe(data =>{
      // console.log(this.news)
      this.news = data;
      this.newsList.unshift(this.news)
      this.uploadingInProgress = false;
      this.createNewNews();
      console.log(data)
    },error => {
      console.log(error)
      this.uploadingInProgress = false;
    });
  }
  }

  getNews(){
    this.newsService.getNews().subscribe(data =>{
      this.newsList = data
    })
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.news.image=files.item(0);
}

  deleteProccesin(id: Number){
    for(let i = 0; i < this.newsList.length; i++){ 
        if(this.newsList[i].id == id)
          this.newsList[i].deleting = !this.newsList[i].deleting;
    }
  }

  delete(id: Number){
    this.newsService.deleteNews(id).subscribe(data =>{
      for(let i = 0; i < this.newsList.length; i++){ 
        if(this.newsList[i].id == id)
          this.newsList.splice(i,1)
    }
    });
  }

  createNewNews(){
    this.news = new News()
    this.news.createDate = new Date().toISOString().substring(0,10);
  }

  update(id: Number){
    this.newsService.getSingleNews(id).subscribe(data =>{
      this.news = data;
      this.newsUpdating = true;
      if(this.news.createDate!= null)
        this.news.createDate = this.news.createDate.substring(0,10)
    })
  }
}
