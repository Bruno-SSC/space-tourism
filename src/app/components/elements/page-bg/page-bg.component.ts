import { Component } from '@angular/core';
import { DeviceDetectService } from 'src/app/services/device-detect.service';
import { SharedStatesService } from 'src/app/services/shared-states.service';
import { bg_imgs } from 'src/app/utils/data';
import {
  bg_imgs_type,
  device_types,
  website_pages,
} from 'src/app/utils/interfaces';

@Component({
  selector: 'app-page-bg',
  templateUrl: './page-bg.component.html',
  styleUrls: ['./page-bg.component.scss'],
})
export class PageBgComponent {
  bg_img_src: string = '';
  curr_device: device_types = 'mobile';
  active_page: website_pages = 'home';
  background_imgs: bg_imgs_type = bg_imgs;

  constructor(
    private device_detect: DeviceDetectService,
    private shared_states: SharedStatesService
  ) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.curr_device = value;
    });

    this.shared_states.page_observable.subscribe((value) => {
      this.active_page = value;
      this.update_bg_src();
    });

    this.update_bg_src();
  }

  update_bg_src() {
    this.bg_img_src = this.background_imgs[this.active_page][this.curr_device];
  }
}
