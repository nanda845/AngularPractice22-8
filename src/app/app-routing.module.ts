import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { GridListComponent } from './grid-list/grid-list.component';

const routes: Routes = [
  {
    path:'',
    component:SliderComponent
  },
  {
    path:'grids',
    component:GridListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
