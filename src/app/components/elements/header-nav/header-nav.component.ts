import { Component } from '@angular/core';
import { DeviceDetectService } from 'src/app/services/device-detect.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  device: string = 'mobile';

  constructor(private device_detect: DeviceDetectService) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.device = value;
    });
  }

  check_device(dev_type: string) {
    return this.device == dev_type;
  }
}
