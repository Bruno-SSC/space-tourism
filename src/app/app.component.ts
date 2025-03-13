import { Component, HostListener } from '@angular/core';
import { DeviceDetectService } from './services/device-detect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'space_tourism';

  constructor(private device_detect: DeviceDetectService) {}

  @HostListener('window:resize', ['$event']) window_resize(event: Event) {
    const target = event.target as HTMLElement;
    this.device_detect.update_device();
  }
}
