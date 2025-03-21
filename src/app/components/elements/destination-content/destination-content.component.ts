import { Component } from '@angular/core';
import { DeviceDetectService } from 'src/app/services/device-detect.service';
import { stars_data } from 'src/app/utils/data';
import { star_data } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-destination-content',
  templateUrl: './destination-content.component.html',
  styleUrls: ['./destination-content.component.scss'],
})
export class DestinationContentComponent {
  stars: star_data[] = stars_data;
  active_star: star_data = stars_data[0];

  constructor(private device_detect: DeviceDetectService) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.update_picture(value);
    });
  }

  update_picture(value: string) {
    const base_src = `/assets/destination/image-${this.active_star.name}`;

    this.active_star.picture = base_src + '.webp';

    if (value !== 'mobile') return;
    this.active_star.picture = base_src + '.png';
  }

  change_star(star_name: string) {
    this.active_star = this.stars.filter((s) => s.name == star_name)[0];
  }
}
