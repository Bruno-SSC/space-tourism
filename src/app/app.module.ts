import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './components/elements/header-nav/header-nav.component';
import { MainHeroComponent } from './components/elements/main-hero/main-hero.component';
import { MobileNavComponent } from './components/elements/mobile-nav/mobile-nav.component';
import { PageBgComponent } from './components/elements/page-bg/page-bg.component';
import { DestinationContentComponent } from './components/elements/destination-content/destination-content.component';
import { CrewContentComponent } from './components/elements/crew-content/crew-content.component';
import { PageTitleComponent } from './components/elements/page-title/page-title.component';
import { TechContentComponent } from './components/elements/tech-content/tech-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    MainHeroComponent,
    MobileNavComponent,
    PageBgComponent,
    DestinationContentComponent,
    CrewContentComponent,
    PageTitleComponent,
    TechContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
