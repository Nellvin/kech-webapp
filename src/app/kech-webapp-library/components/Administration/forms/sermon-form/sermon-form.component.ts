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

  
  sermon: Sermon;
  sermonList: Sermon[] = []
  fileToUpload: File = null;
  uploadingInProgress: boolean = false;

  constructor(
    private sermonService: SermonService,
  ) { }

  ngOnInit(): void {
    this.getSermon()
    this.createNewSermon();
  }

  saveSermon(){
    // console.log(this.sermon)
    console.log(this.sermon)
    console.log(this.sermon.date)
    this.uploadingInProgress = true;
    this.sermonService.multipartSermonAdd(this.sermon).subscribe(data => {
      this.sermonList.unshift(this.sermon)
      // console.log(this.sermon)
      // console.log(this.sermonList.push(this.sermon))
      this.uploadingInProgress = false;
      this.createNewSermon();
    });
    // this.sermonService.multiTitle(this.sermon, this.fileToUpload).subscribe(data =>{
    //   console.log(data)
    // },error => console.log(error));
  }

  getSermon(){
    this.sermonService.getSermonyList().subscribe(data =>{
      this.sermonList = data
      // console.log(this.sermonList[0].date)
    })
  }

  handleAudioInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.sermon.audio = files.item(0);
  }
  handleImageInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.sermon.image = files.item(0);
  }

  createNewSermon(){
    this.sermon = new Sermon();
    this.sermon.date = new Date().toISOString().substring(0,10);
  }

  deleteProccesing(id: Number){
      for(let i = 0; i < this.sermonList.length; i++){ 
          if(this.sermonList[i].id == id)
            this.sermonList[i].deleting = !this.sermonList[i].deleting;
      }
  }

  delete(id: Number){
    this.sermonService.deleteSermon(id).subscribe(data =>{
      for(let i = 0; i < this.sermonList.length; i++){ 
        if(this.sermonList[i].id == id)
          this.sermonList.splice(i,1)
    }
    });
  }

}
