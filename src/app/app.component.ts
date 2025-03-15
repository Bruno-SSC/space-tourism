import { Component, HostListener } from '@angular/core';
import { DeviceDetectService } from './services/device-detect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'space_tourism';
  inner_width: number = window.innerWidth;

  constructor(private device_detect: DeviceDetectService) {
    this.device_detect.update_device(this.inner_width);
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
    // when I execute the debounced_update fn first, it creates a timeout of 5000ms for the statically previously provided cb
    // when I execute it again, it clears the previous timeout and creates a new one. This is possible because the fn stored in debounced_update has acess to the timer in the debounce fn.
    // debounce fn itself IS NOT called every time debounced_update is. It just holds the timer variable that keeps being updated when debounced_updated executes.
  }
}
