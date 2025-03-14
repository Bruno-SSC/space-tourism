import { Component, HostListener } from '@angular/core';
import { DeviceDetectService } from './services/device-detect.service';
import { debounce } from './utils/functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'space_tourism';

  constructor(private device_detect: DeviceDetectService) {}

  // debounce retrieves the function received to be stored at debounced_resize
  private debounced_resize = debounce((width: number) => {
    this.device_detect.update_device(width);
  });

  @HostListener('window:resize', ['$event']) window_resize(event: Event) {
    const target = event.target as Window;
    this.debounced_resize(target.innerWidth);
  }
}
