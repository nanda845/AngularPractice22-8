import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { DataFromExternalFileComponent } from './data-from-external-file/data-from-external-file.component';
import { DynamicDivGridsComponent } from './dynamic-div-grids/dynamic-div-grids.component';
import { TableRowExpandComponent } from './table-row-expand/table-row-expand.component';

const routes: Routes = [
  {
    path:'',
    component:SliderComponent
  },
  {
    path:'grids',
    component:GridListComponent
  },
  {
    path:'externalData',
    component:DataFromExternalFileComponent
  },
  {
    path:'dynamicGrids',
    component:DynamicDivGridsComponent
  },
  {
    path:'tableRowExpand',
    component:TableRowExpandComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
