import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Sermon } from 'src/app/kech-webapp-library/models/sermon';
import { SermonService } from 'src/app/kech-webapp-library/services/sermon.service';

@Component({
  selector: 'app-sermon-form',
  templateUrl: './sermon-form.component.html',
  styleUrls: ['./sermon-form.component.scss']
})
export class SermonFormComponent implements OnInit {

  
  sermon: Sermon  = new Sermon();
  sermonList: Sermon[] = []
  fileToUpload: File = null;

  constructor(
    private sermonService: SermonService
  ) { }

  ngOnInit(): void {
    this.getSermon()
  }

  saveSermon(){
    this.sermonList.push(this.sermon)
    console.log(this.sermon)
    // this.sermonService.multiTitle(this.sermon, this.fileToUpload).subscribe(data =>{
    //   console.log(data)
    // },error => console.log(error));
    this.sermon = new Sermon()
  }

  getSermon(){
    this.sermonService.getSermonyList().subscribe(data =>{
      this.sermonList = data
    })
  }

  handleAudioInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.sermon.audio = files.item(0);
  }
  handleImageInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.sermon.image=files.item(0);
  }
}
