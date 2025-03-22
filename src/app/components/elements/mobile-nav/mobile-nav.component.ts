import { Component } from '@angular/core';
import { DeviceDetectService } from 'src/app/services/device-detect.service';
import { SharedStatesService } from 'src/app/services/shared-states.service';
import { website_pages } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent {
  device: string = 'mobile';
  visible_sidemenu: boolean = false;
  pages: website_pages[] = ['home', 'destination', 'crew', 'technology'];

  constructor(
    private device_detect: DeviceDetectService,
    private shared_states: SharedStatesService
  ) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.device = value;
    });

    this.shared_states.visible_menu_observable.subscribe((value) => {
      this.visible_sidemenu = value;
    });
  }

  close_sidemenu() {
    this.shared_states.toggle_sidemenu(false);
  }

  get show_sidemenu() {
    return this.check_device('mobile') && this.visible_sidemenu;
  }

  check_device(dev_type: string) {
    return this.device == dev_type;
  }

  update_page(new_page: website_pages) {
    this.close_sidemenu();
    this.shared_states.update_page(new_page);
  }
}
