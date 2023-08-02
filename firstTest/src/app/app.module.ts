import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MapComponent } from './map/map.component';
import { GeojsonComponent } from './geojson/geojson.component';
import { EditingComponent } from './editing/editing.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MapComponent,
    GeojsonComponent,
    EditingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
