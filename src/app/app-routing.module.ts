import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "restaurants/:tipKujne", component: RestaurantsComponent},   /* parametar koji sluzi da klikom na neku od kuhinja doda u url naziv te kuhinje */
  {path: "", redirectTo: "home", pathMatch: "full"},                  /* koji sam definisao u sidebar.html */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
