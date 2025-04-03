import { animate, style, transition, trigger } from '@angular/animations';

export const content_fade_in = trigger('content_fade_in', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-100px)' }),
    animate('800ms ease-out'),
    style({ opacity: 1, transform: 'translateY(0px)' }),
  ]),
]);

export const header_slide_in = trigger('header_slide_in', [
  transition(':enter', [
    style({ transform: 'translateY(-100px)' }),
    animate('800ms ease-out'),
    style({ transform: 'translateY(0px)' }),
  ]),
]);
