import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { device_types } from '../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DeviceDetectService {
  private $current_device_subject = new BehaviorSubject<device_types>('mobile');
  $current_device_observable = this.$current_device_subject.asObservable();

  update_device(new_width: number): void {
    let updated_device: device_types = 'mobile';
    if (new_width >= 480) updated_device = 'tablet';
    if (new_width >= 1050) updated_device = 'desktop';
    this.$current_device_subject.next(updated_device);
  }
}
