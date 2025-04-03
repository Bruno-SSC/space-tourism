import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewContentComponent } from './components/elements/crew-content/crew-content.component';
import { DestinationContentComponent } from './components/elements/destination-content/destination-content.component';
import { TechContentComponent } from './components/elements/tech-content/tech-content.component';
import { MainHeroComponent } from './components/elements/main-hero/main-hero.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainHeroComponent },
  { path: 'destination', redirectTo: 'destination/moon' },
  { path: 'destination/:star_name', component: DestinationContentComponent },
  { path: 'crew', component: CrewContentComponent },
  { path: 'technology', component: TechContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
