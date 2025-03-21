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
    if (new_width <= 480) {
      this.$current_device_subject.next('mobile');
      return;
    }

    if (new_width <= 1050) {
      this.$current_device_subject.next('tablet');
      return;
    }

    this.$current_device_subject.next('desktop');
  }
}
