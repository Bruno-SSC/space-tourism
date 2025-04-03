import { Component } from '@angular/core';
import { DeviceDetectService } from 'src/app/services/device-detect.service';
import { SharedStatesService } from 'src/app/services/shared-states.service';
import { website_pages } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  device: string = 'mobile';
  pages: website_pages[] = ['home', 'destination', 'crew', 'technology'];

  constructor(
    private device_detect: DeviceDetectService,
    private shared_states: SharedStatesService
  ) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.device = value;
    });
  }

  open_sidemenu() {
    this.shared_states.toggle_sidemenu(true);
  }

  check_device(dev_type: string) {
    return this.device == dev_type;
  }
}
