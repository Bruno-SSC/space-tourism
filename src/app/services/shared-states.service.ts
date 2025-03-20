import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedStatesService {
  private visible_menu_subject = new BehaviorSubject<boolean>(false);
  visible_menu_observable = this.visible_menu_subject.asObservable();

  private page_subject = new BehaviorSubject<string>('home');
  page_observable = this.page_subject.asObservable();

  constructor() {}

  toggle_sidemenu(new_state: boolean) {
    this.visible_menu_subject.next(new_state);
  }

  //? if I stick to this method, best to use a union of pages
  update_page(new_page: string) {
    this.page_subject.next(new_page);
  }
}
