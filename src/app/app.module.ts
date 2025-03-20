import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderNavComponent } from './components/elements/header-nav/header-nav.component';
import { MainHeroComponent } from './components/elements/main-hero/main-hero.component';
import { MobileNavComponent } from './components/elements/mobile-nav/mobile-nav.component';
import { DestinationComponent } from './components/pages/destination/destination.component';
import { PageBgComponent } from './components/elements/page-bg/page-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    MainHeroComponent,
    MobileNavComponent,
    DestinationComponent,
    PageBgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
