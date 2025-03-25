import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { website_pages } from '../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class SharedStatesService {
  private visible_menu_subject = new BehaviorSubject<boolean>(false);
  visible_menu_observable = this.visible_menu_subject.asObservable();

  private page_subject = new BehaviorSubject<website_pages>('home');
  page_observable = this.page_subject.asObservable();

  toggle_sidemenu(new_state: boolean) {
    this.visible_menu_subject.next(new_state);
  }

  update_page(new_page: website_pages) {
    this.page_subject.next(new_page);
  }
}
