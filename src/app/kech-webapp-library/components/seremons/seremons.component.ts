import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/kech-webapp-library/services/shared.service'

@Component({
  selector: 'app-seremons',
  templateUrl: './seremons.component.html',
  styleUrls: ['./seremons.component.scss']
})
export class SeremonsComponent implements OnInit {

  constructor(private service:SharedService) { }

  sermonsList: any= [];

  ngOnInit(): void {
    this.refreshSermonyList();
  }

  refreshSermonyList(){
    this.service.getSermonyList().subscribe(data =>{
      this.sermonsList = data;
    })
  }

}
