import { Component } from '@angular/core';
import { DeviceDetectService } from 'src/app/services/device-detect.service';
import { content_fade_in } from 'src/app/utils/animations';
import { crew_data } from 'src/app/utils/data';
import { crew_member, device_types } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-crew-content',
  templateUrl: './crew-content.component.html',
  styleUrls: ['./crew-content.component.scss'],
  animations: [content_fade_in],
})
export class CrewContentComponent {
  curr_device: device_types = 'mobile';
  crew: crew_member[] = crew_data;
  active_member: crew_member = this.crew[0];
  member_pic: string = this.active_member.images.png;

  constructor(private device_detect: DeviceDetectService) {
    this.device_detect.$current_device_observable.subscribe((value) => {
      this.curr_device = value;
      this.update_member_img();
    });
  }

  update_member_img() {
    this.member_pic = this.active_member.images.webp;
    if (this.curr_device !== 'mobile') return;
    this.member_pic = this.active_member.images.png;
  }

  change_member(member_name: string) {
    this.active_member = this.crew.filter((c) => c.name == member_name)[0];
    this.update_member_img();
  }
}
