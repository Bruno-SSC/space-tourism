import { Component } from '@angular/core';
import { DeviceDetectService } from 'src/app/services/device-detect.service';
import { stars_data } from 'src/app/utils/data';
import { device_types, star_data } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-destination-content',
  templateUrl: './destination-content.component.html',
  styleUrls: ['./destination-content.component.scss'],
})
export class DestinationContentComponent {
  stars: star_data[] = stars_data;
  active_star: star_data = stars_data[0];
  curr_device: device_types = 'mobile';
  picture_path: string = 'png';

  constructor(private device_detect: DeviceDetectService) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.curr_device = value;
      this.update_img_path();
    });
  }

  update_img_path() {
    this.picture_path = this.active_star.images.webp;
    if (this.curr_device !== 'mobile') return;
    this.picture_path = this.active_star.images.png;
  }

  change_star(star_name: string) {
    this.active_star = this.stars.filter((s) => s.name == star_name)[0];
    this.update_img_path();
  }
}
