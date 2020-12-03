import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/kech-webapp-library/models/photo';
import { PhotoService } from 'src/app/kech-webapp-library/services/photo.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  
  photo: Photo  = new Photo();
  photoList: Photo[] = []
  fileToUpload: File = null;

  constructor(
    private photoService : PhotoService
  ) { }

  ngOnInit(): void {
    // this.getPhoto()
  }

  savePhoto(){
    this.photoList.push(this.photo)
    console.log(this.photo)
    // this.sermonService.multiTitle(this.sermon, this.fileToUpload).subscribe(data =>{
    //   console.log(data)
    // },error => console.log(error));
    this.photo = new Photo()
  }

  // getPhoto(){
  //   this.photoService.getPhotoList().subscribe(data =>{
  //     this.photoService = data
  //   })
  // }

  handleImageInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.photo.photo = files.item(0);
  }
}
