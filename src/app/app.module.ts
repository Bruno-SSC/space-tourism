import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderNavComponent } from './components/elements/header-nav/header-nav.component';
import { MainHeroComponent } from './components/elements/main-hero/main-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    MainHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
