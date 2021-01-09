import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/kech-webapp-library/models/photo';
import { PhotoService } from 'src/app/kech-webapp-library/services/photo.service';
import { PhotoAlbum } from 'src/app/kech-webapp-library/models/photo-album';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  albums: PhotoAlbum[] = [];
  // selectedAlbum: PhotoAlbum = {}
  album: PhotoAlbum = new PhotoAlbum();
  photo: Photo  = new Photo();
  photoList: Photo[] = [];
  uploadedPhotoList: Photo[] = [];
  fileToUpload: File = null;
  albumSelected: Boolean = false;
  albumSelectedIndex: Number;
  addingAlbum: boolean = false; 
  uploadingInProgress: boolean = false;


  constructor(
    private photoService : PhotoService
  ) { }

  ngOnInit(): void {
    this.getAlbums();

    // this.getPhoto()
  }

  savePhotos(){
    this.uploadingInProgress = true;
    this.photoService.savePhotosToGallery(this.photo, this.albumSelectedIndex).subscribe(data => {
      this.uploadingInProgress = false;
      this.photoList.unshift(data)
    })
    // this.photoList.push(this.photo)
    // console.log(this.album)
    // this.sermonService.multiTitle(this.sermon, this.fileToUpload).subscribe(data =>{
    //   console.log(data)
    // },error => console.log(error));
    // this.photo = new Photo()

  }

  saveAlbum(){
    this.uploadingInProgress = true;
    this.photoService.savePhotoAlbum(this.album).subscribe(data => {
      this.albums.unshift(data)
      this.uploadingInProgress = false;
      this.addingAlbum = false;
    })
  }

  // getPhoto(){
  //   this.photoService.getPhotoList().subscribe(data =>{
  //     this.photoService = data
  //   })
  // }

  handleImageInput(files: FileList) {
    this.album.photos = [];
    // this.uploadedPhotoList = Photo(files);
    for (let i = 0, numFiles = files.length; i < numFiles; i++) {
      const file = files[i];
      this.photo.photo=file;
      this.album.photos.push(this.photo)
    }
  }

  getAlbums(): void{
    this.photoService.getGalleriesList().subscribe(data =>{
      this.albums = data
    })
  }

  getPhotos(id: Number): void{
    this.photoService.getGallery(id).subscribe(data => {
      this.album = data;
      this.photoList = data.photos;
    })
  }

  changedOption(albumId: Number){
    if(albumId>0)
      this.getPhotos(albumId);
      this.albumSelected = true;
      this.albumSelectedIndex = albumId;
  }

  addAlbum(){
    this.addingAlbum = true;
    this.album = new PhotoAlbum()
    this.album.createDate = new Date().toISOString().substring(0,10);
  }

  cancelCreateAlbum(){
    this.addingAlbum = false;
    this.album = new PhotoAlbum();
  }

  change(event: any){
    console.log(event);
  }
}
