import { Component } from '@angular/core';
import { content_fade_in } from 'src/app/utils/animations';

@Component({
  selector: 'app-main-hero',
  templateUrl: './main-hero.component.html',
  styleUrls: ['./main-hero.component.scss'],
  animations: [content_fade_in],
})
export class MainHeroComponent {}
