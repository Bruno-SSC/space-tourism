import { Component, HostListener } from '@angular/core';
import { DeviceDetectService } from './services/device-detect.service';
import { NavigationEnd, Router } from '@angular/router';
import { SharedStatesService } from './services/shared-states.service';
import { website_pages } from './utils/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'space_tourism';
  inner_width: number = window.innerWidth;

  constructor(
    private device_detect: DeviceDetectService,
    private router: Router,
    private shared_states: SharedStatesService
  ) {
    this.device_detect.update_device(this.inner_width);
    this.router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) return;
      const new_page: website_pages = e.url.split('/')[1] as website_pages;
      this.shared_states.update_page(new_page);
    });
  }

  private debounce = (cb: Function) => {
    let timer: any;

    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cb();
      }, 300);
    };
  };

  private debounced_update = this.debounce(() => {
    this.device_detect.update_device(this.inner_width);
  });

  @HostListener('window:resize', ['$event']) window_resize(event: Event) {
    const target = event.target as Window;
    this.inner_width = target.innerWidth;
    this.debounced_update();
  }
}
