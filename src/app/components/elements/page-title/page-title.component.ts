import { Component } from '@angular/core';
import { SharedStatesService } from 'src/app/services/shared-states.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
  number: string = '01';

  titles: string[] = [
    'pick your destination',
    'meet your crew',
    'space launch 101',
  ];

  title_index: number = 0;

  constructor(private shared_states: SharedStatesService) {
    this.shared_states.page_observable.subscribe((value) => {
      switch (value) {
        case 'destination':
          this.title_index = 0;
          this.number = '01';
          break;
        case 'crew':
          this.title_index = 1;
          this.number = '02';
          break;
        case 'technology':
          this.title_index = 2;
          this.number = '03';
          break;
        default:
          this.title_index = 0;
      }
    });
  }
}
