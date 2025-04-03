import { Component } from '@angular/core';
import { DeviceDetectService } from 'src/app/services/device-detect.service';
import { technology } from 'src/app/utils/data';
import { device_types, tech_devices } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-tech-content',
  templateUrl: './tech-content.component.html',
  styleUrls: ['./tech-content.component.scss'],
})
export class TechContentComponent {
  curr_device: device_types = 'mobile';
  tech_set: tech_devices[] = technology;
  active_tech: tech_devices = this.tech_set[0];
  tech_picture: string = this.active_tech.images.png;

  constructor(private device_detect: DeviceDetectService) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.curr_device = value;
      this.update_tech_img();
    });
  }

  update_tech_img() {
    this.tech_picture = this.active_tech.images.webp;
    if (this.curr_device !== 'desktop') return;
    this.tech_picture = this.active_tech.images.png;
  }

  change_tech(tech_name: string) {
    this.active_tech = this.tech_set.filter((t) => t.name == tech_name)[0];
    this.update_tech_img();
  }
}
