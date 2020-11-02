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
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { SharedService } from './kech-webapp-library/services/shared.service'

import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './kech-webapp-library/components/news/news.component';
import { GalleryComponent } from './kech-webapp-library/components/gallery/gallery.component';
import { NewsPageComponent } from './kech-webapp-library/components/news-page/news-page.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SeremonsAudioComponent,
    SeremonsComponent,
    AboutUsComponent,
    NewsComponent,
    GalleryComponent,
    NewsPageComponent
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
    NgxAudioPlayerModule,
    HttpClientModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
