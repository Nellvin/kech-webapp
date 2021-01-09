import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  constructor(private service: NewsService,
              private route: ActivatedRoute,
              private router: Router  ) { }

  newsList: any= [];
  page = 0;
  pagesCount;
  previousDisabled;
  nextDisabled;

  ngOnInit(): void {
    this.refreshNewsList();
    this.getNewsPagesCout();

  }

  getNewsPagesCout(){
    this.service.getNewsCount().subscribe(data =>{
      this.pagesCount = data;
      this.updateButtons();
    })
  }

  refreshNewsList(){
    this.service.getNewsPage(this.page).subscribe(data =>{
      this.newsList = data;
    })
  }

  nextPage(){
    if(this.page>=this.pagesCount){
      return;
    }
    this.page++;
    // this.route.snapshot.paramMap.get('id')
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.refreshNewsList();
    // window.scroll(0,0);
    this.scroll();
    this.updateButtons();
  }

  previousPage(){
    console.log(this.page);
    this.page--;
    this.refreshNewsList();
    this.scroll()
    this.updateButtons();
  }

  scroll(){
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 100); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}

  updateButtons(){
    if(this.page == 0)
      this.previousDisabled = true;
    else
      this.previousDisabled = false;
    if(this.page == this.pagesCount)
      this.nextDisabled = true;
    else
      this.nextDisabled = false;
  }
}
