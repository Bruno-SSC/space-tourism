import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceDetectService {
  $current_device_subject = new BehaviorSubject<string>('mobile');
  $current_device_observable = this.$current_device_subject.asObservable();

  update_device(){
    
  }

}
