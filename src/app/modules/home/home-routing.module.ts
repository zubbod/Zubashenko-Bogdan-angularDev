import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentCityResolver } from 'src/app/core/resolvers/current-city.resolver';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      currentCity: CurrentCityResolver,
    },
    data: {
      title: 'Home',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
