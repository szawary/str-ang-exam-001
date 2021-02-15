import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeComponent } from './common/home/home.component';
import { HeroesComponent } from './common/heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';
import { HeroService } from './service/hero.service';

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "heroes",
    component: HeroesComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
