import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input()
  news: any;
  title : string;
  content : string;
  formatedDate : string;
  author : string;  

  constructor() { }

  ngOnInit(): void {
    this.formatCreateDate(this.news.createDate)
  }

  formatCreateDate(date: Date){
    this.formatedDate = formatDate(date,"dd\nMM\n\nyy","en-EN");
  }

}
