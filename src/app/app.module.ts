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
import { NewsPageComponent } from './kech-webapp-library/components/news-page/news-page.component';
import { FooterComponent } from './kech-webapp-library/components/footer/footer.component'
import {} from 'googlemaps';
import { YoutubeLiveComponent } from './kech-webapp-library/components/youtube-live/youtube-live.component';
import { LoginComponent } from './kech-webapp-library/components/Administration/login/login.component';
import { AdminComponent } from './kech-webapp-library/components/Administration/admin/admin.component';
import { AuthGuard } from './Guard/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsFormComponent } from './kech-webapp-library/components/Administration/Forms/news-form/news-form.component';
import { SermonFormComponent } from './kech-webapp-library/components/Administration/Forms/sermon-form/sermon-form.component';
import { PhotoFormComponent } from './kech-webapp-library/components/Administration/Forms/photo-form/photo-form.component'


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
    NewsPageComponent,
    FooterComponent,
    YoutubeLiveComponent,
    LoginComponent,
    AdminComponent,
    NewsFormComponent,
    SermonFormComponent,
    PhotoFormComponent,
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
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
