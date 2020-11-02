import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './kech-webapp-library/components/welcome/welcome.component';
import { SeremonsComponent } from './kech-webapp-library/components/seremons/seremons.component';
import { AboutUsComponent } from './kech-webapp-library/components/about-us/about-us.component';
import { GalleryComponent } from './kech-webapp-library/components/gallery/gallery.component';
import { NewsPageComponent } from './kech-webapp-library/components/news-page/news-page.component';

const routes: Routes = [
  {path: 'home', component: WelcomeComponent},
  {path: 'kazania', component: SeremonsComponent},
  {path: 'kontakt', component: AboutUsComponent},
  {path: 'aktualnosci', component: NewsPageComponent},
  {path: 'galeria', component: GalleryComponent}, 
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  // {path: '**', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
