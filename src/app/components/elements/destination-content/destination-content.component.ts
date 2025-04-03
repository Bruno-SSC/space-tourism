import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DeviceDetectService } from 'src/app/services/device-detect.service';
import { content_fade_in } from 'src/app/utils/animations';
import { stars_data } from 'src/app/utils/data';
import { device_types, star_data } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-destination-content',
  templateUrl: './destination-content.component.html',
  styleUrls: ['./destination-content.component.scss'],
  animations: [content_fade_in],
})
export class DestinationContentComponent {
  curr_device: device_types = 'mobile';
  stars: star_data[] = stars_data;
  active_star: star_data = stars_data[0];
  picture_path: string = this.active_star.images.png;

  constructor(
    private device_detect: DeviceDetectService,
    private active_route: ActivatedRoute,
    private router: Router
  ) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.curr_device = value;
      this.update_img_path();
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.change_star(this.active_route.snapshot.params['star_name']);
      }
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
