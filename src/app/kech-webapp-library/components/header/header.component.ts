import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        // location.path();
      } else {
        // this.route = "Home";
      }
    });
  }

  ngOnInit(): void {
  }

  updateActualPage(): void{

  }

}
