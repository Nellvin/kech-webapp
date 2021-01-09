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
  sermonUpdating: boolean = false;

  constructor(
    private sermonService: SermonService,
  ) { }

  ngOnInit(): void {
    this.getSermon()
    this.createNewSermon();
  }

  saveSermon(){
    this.uploadingInProgress = true;

    if(this.sermonUpdating){
      this.sermonService.updateSermon(this.sermon).subscribe(data =>{
        this.sermonUpdating = false;
        for(let i = 0; i < this.sermonList.length; i++){ 
          if(this.sermonList[i].id == this.sermon.id)
          this.sermonList[i] = this.sermon;
        }
        this.createNewSermon();
        this.sermonUpdating = false;
       this.uploadingInProgress = false;
      })
    }
    else{

    this.sermonService.multipartSermonAdd(this.sermon).subscribe(data => {
      this.sermonList.unshift(this.sermon)
      this.uploadingInProgress = false;
      this.createNewSermon();
    });
  }
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

  update(id: Number){
    this.sermonService.getSermon(id).subscribe(data =>{
      this.sermon = data;
      this.sermonUpdating = true;
      if(this.sermon.date!= null)
        this.sermon.date = this.sermon.date.substring(0,10)
    })
  }

}
