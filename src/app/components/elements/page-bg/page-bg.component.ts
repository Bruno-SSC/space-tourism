import { Component } from '@angular/core';
import { DeviceDetectService } from 'src/app/services/device-detect.service';
import { SharedStatesService } from 'src/app/services/shared-states.service';

@Component({
  selector: 'app-page-bg',
  templateUrl: './page-bg.component.html',
  styleUrls: ['./page-bg.component.scss'],
})
export class PageBgComponent {
  bg_img_src: string = '';
  device: string = 'mobile';
  active_page: string = 'home';

  constructor(
    private device_detect: DeviceDetectService,
    private shared_states: SharedStatesService
  ) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.device = value;
    });

    this.shared_states.page_observable.subscribe((value) => {
      this.active_page = value;
      this.update_bg_src();
    });

    this.update_bg_src();
  }

  update_bg_src() {
    this.bg_img_src = `assets/${this.active_page}/background-${this.active_page}-${this.device}.jpg`;
  }
}
