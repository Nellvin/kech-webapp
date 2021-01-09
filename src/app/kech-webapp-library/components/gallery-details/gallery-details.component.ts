import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../services/photo.service';
import { PhotoAlbum } from '../../models/photo-album';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.scss']
})
export class GalleryDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotoService
  ) { }

  album: PhotoAlbum = new PhotoAlbum()
  photos: Photo[]
  dividedPhotos: Photo[][] = []

  ngOnInit(): void {
    this.getGallery();
    console.log('details')
  }

  getGallery(){
    const id = this.route.snapshot.paramMap.get('id');
    this.photosService.getGallery(Number(id)).subscribe(data =>{
      this.album = data; 
      this.photos = this.album.photos;
      // console.log(data)
      this.divideGalleriesToRows();
    })
  }

  divideGalleriesToRows(){
    var tempArrayy: Photo[] = [];
    for (let index = 0; index < this.photos.length; index++) {
      const element = this.photos[index];
      tempArrayy.push(element)
      if((index+1)%3==0 ){
        this.dividedPhotos.push(tempArrayy)
        tempArrayy = []
      }
    }
    if(tempArrayy.length!=0)
      this.dividedPhotos.push(tempArrayy)
    console.log(this.dividedPhotos)
  }
}
