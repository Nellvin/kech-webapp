import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './kech-webapp-library/components/welcome/welcome.component';
import { HeaderComponent } from './kech-webapp-library/components/header/header.component';
import { SeremonsAudioComponent } from './kech-webapp-library/components/seremons-audio/seremons-audio.component';
import { SeremonsComponent } from './kech-webapp-library/components/seremons/seremons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AboutUsComponent } from './kech-webapp-library/components/about-us/about-us.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SeremonsAudioComponent,
    SeremonsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
