import { Component, OnInit  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ViewvideoPage } from '../viewvideo/viewvideo.page'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(private videoPlayer: VideoPlayer, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  playVideoLocal() {
    this.videoPlayer.play('file:///android_asset/www/assets/SampleVideo.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

  async viewVideo() {
    const modal = await this.modalCtrl.create({
      component: ViewvideoPage,
      componentProps: { url: 'https://www.youtube.com/embed/zewyvQEqsS4?autoplay=1&cc_load_policy=1' },
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }

  playVideoHosted() {
    this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
  

}
