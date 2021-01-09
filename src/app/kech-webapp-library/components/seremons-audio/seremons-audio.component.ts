import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { Sermon } from 'src/app/kech-webapp-library/models/sermon'   
@Component({
  selector: 'app-seremons-audio',
  templateUrl: './seremons-audio.component.html',
  styleUrls: ['./seremons-audio.component.scss']
})
export class SeremonsAudioComponent implements OnInit {

  constructor() { }
  msaapDisplayTitle = false;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisablePositionSlider = false;
  msaapPlaylist: Track[];
  mainSermon: Sermon;

   
// Material Style Advance Audio Player Playlist
@Input()
set sermon(sermon: Sermon)  {
  this.msaapPlaylist=[{title: sermon.name, link : sermon.url }]
  this.mainSermon= sermon;
  if(this.mainSermon.url == null){
    
  }
}

  ngOnInit(): void {
  }

}
