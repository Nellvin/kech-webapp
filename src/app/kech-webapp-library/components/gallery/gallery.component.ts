import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { PhotoAlbum } from '../../models/photo-album';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  photoAlbums: PhotoAlbum[]
  dividedPhotoAlbums: PhotoAlbum[][] = []
  covers: String[] = [];
  coversMap: Map<String,String> = new Map();
  coversMapList: String[] = [];
  albumsInRow: Number = 3

  constructor(
    private photosService: PhotoService
  ) { }

  ngOnInit(): void {
    this.getAllGalleries();
  }

  getAllGalleries(){
    this.photosService.getGalleriesList().subscribe(data=>{
      this.photoAlbums = data;
      this.initAlbumCovers();
      this.divideGalleriesToRows();
      this.initAlbumsCoversList();
    })
  }

  divideGalleriesToRows(){
    var tempArrayy: PhotoAlbum[] = [];
    for (let index = 0; index < this.photoAlbums.length; index++) {
      const element = this.photoAlbums[index];
      tempArrayy.push(element)
      if((index+1)%3==0 ){
        this.dividedPhotoAlbums.push(tempArrayy)
        tempArrayy = []
      }
    }
    if(tempArrayy.length!=0)
      this.dividedPhotoAlbums.push(tempArrayy)
    console.log(this.dividedPhotoAlbums)
  }

  initAlbumCovers(){
    this.photoAlbums.forEach((data)=>{
      if(data.photos.length>0){
        this.covers.push(data.photos[0].url)
        this.coversMap.set(String(data.id),String(data.photos[0].url))
      }
      else{
        this.covers.push("assets/gallery-187-902099.png")
        this.coversMap.set(String(data.id),"assets/gallery-187-902099.png")
      }
      console.log(this.coversMap.get('1'))
    })
  } 

  initAlbumsCoversList(){
    var indexCount = this.photoAlbums[this.photoAlbums.length-1].id

    for (let index2 = 0; index2 <= indexCount; index2++) {
      this.coversMapList[index2] = 'assets/gallery-187-902099.png';
      
    }
    for (let index = 0; index < this.photoAlbums.length; index++) {
      const element = this.photoAlbums[index];
      if(element.photos.length>0)
        this.coversMapList[Number(element.id)]=element.photos[0].url

    }
    console.log(this.coversMapList[1])
  }

}
