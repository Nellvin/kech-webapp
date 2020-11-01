import { Component, OnInit, Input } from '@angular/core';
import { Track } from 'ngx-audio-player';   

@Component({
  selector: 'app-seremons-audio',
  templateUrl: './seremons-audio.component.html',
  styleUrls: ['./seremons-audio.component.scss']
})
export class SeremonsAudioComponent implements OnInit {

  constructor() { }
  msaapDisplayTitle = true;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisablePositionSlider = false;
  msaapPlaylist: Track[];
  mainSermon;

   
// Material Style Advance Audio Player Playlist
@Input()
set sermon(sermon: any)  {
  this.msaapPlaylist=[{title: sermon.name, link : sermon.url }]
  this.mainSermon= sermon;
}

  ngOnInit(): void {
  }

}
