import { Component } from '@angular/core';
import { DeviceDetectService } from 'src/app/services/device-detect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  device: string = 'mobile';

  constructor(private device_detect: DeviceDetectService) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.device = value;
    });
  }

  set_bg_img(): string {
    if (this.device == 'mobile') {
      return 'assets/home/background-home-mobile.jpg';
    }

    if (this.device == 'tablet') {
      return 'assets/home/background-home-tablet.jpg';
    }

    return 'assets/home/background-home-desktop.png';
  }
}
