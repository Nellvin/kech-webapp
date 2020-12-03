import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './kech-webapp-library/components/welcome/welcome.component';
import { SeremonsComponent } from './kech-webapp-library/components/seremons/seremons.component';
import { AboutUsComponent } from './kech-webapp-library/components/about-us/about-us.component';
import { GalleryComponent } from './kech-webapp-library/components/gallery/gallery.component';
import { NewsPageComponent } from './kech-webapp-library/components/news-page/news-page.component';
import { YoutubeLiveComponent } from './kech-webapp-library/components/youtube-live/youtube-live.component';
import { LoginComponent } from './kech-webapp-library/components/Administration/login/login.component';
import { AdminComponent } from './kech-webapp-library/components/Administration/admin/admin.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  {path: 'home', component: WelcomeComponent},
  {path: 'kazania', component: SeremonsComponent},
  {path: 'kontakt', component: AboutUsComponent},
  {path: 'aktualnosci', component: NewsPageComponent},
  {path: 'galeria', component: GalleryComponent}, 
  {path: 'live', component: YoutubeLiveComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]}, 
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  // {path: '**', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
