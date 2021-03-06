import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule, MatCheckboxModule, MatSelectModule, MatGridListModule, MatTableModule, MatIconModule, MatRippleModule, MatProgressSpinnerModule } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { TableRowExpandComponent } from './table-row-expand/table-row-expand.component';
import { LoaderComponent } from './loader/loader.component';
import { DataFromExternalFileComponent } from './data-from-external-file/data-from-external-file.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicDivGridsComponent } from './dynamic-div-grids/dynamic-div-grids.component';
import { CustomDirective } from './custom.directive';
import { CustomFilterPipe } from './custom-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    GridListComponent,
    TableRowExpandComponent,
    LoaderComponent,
    DataFromExternalFileComponent,
    DynamicDivGridsComponent,
    CustomDirective,
    CustomFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule, MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
