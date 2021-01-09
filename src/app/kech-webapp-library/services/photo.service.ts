import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { Photo } from '../models/photo';
import { PhotoAlbum } from '../models/photo-album';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  readonly API_URL = "http://localhost:8080/api"
  
  constructor(private http:HttpClient) { }

  getGallery(id: Number): Observable<any> {
   return this.http.get<any>(`${this.API_URL}/galleries/${id}`)
  }

  getGalleriesList():Observable<any[]>{
    return this.http.get<any>(this.API_URL+'/galleries');
  }

  savePhotoAlbum(val: PhotoAlbum):Observable<PhotoAlbum>{
    return this.http.post<PhotoAlbum>(this.API_URL+'/galleries',val)
  }

  savePhotoToGallery(photo: Photo, id: Number){
    return this.http.post<any>(`${this.API_URL}/galleries/${id}/photo`, photo)
  }
  savePhotosToGallery(photos: Photo, id: Number): Observable<Photo>{
    const formData = new FormData();
    formData.append('photo', 
      new Blob(
        [JSON.stringify(photos)], 
        {type: "application/json"}
      )
    );
    formData.append('image', photos.photo);
    return this.http.post<Photo>(`${this.API_URL}/galleries/${id}/co`, formData)
      // return this.http.post(this.API_URL+'/posts_file', news);
  }

  // savePhotosToGallery(photos: Photo[], id: Number){
  //   return this.http.post<any>(`${this.API_URL}/galleries/${id}/photo`, photos)
  // }
}
