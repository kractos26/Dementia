import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage 
{
  image : string;

  constructor(private camera: Camera){
  }

  takePicture()
  {
    const options: any = 
    {
      quality: 100,
      destinationType : this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.camera.getPicture(options).then((imageData) =>
    {
        this.image = 'data:image/jpeg;base64,' + imageData;
    },
    (error) =>{ console.log(error); });
  }
}
