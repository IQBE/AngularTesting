import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { TestComponent } from './test/test.component';
import { GeojsonComponent } from './geojson/geojson.component';
import { EditingComponent } from './editing/editing.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'test', component: TestComponent },
  { path: 'geojson', component: GeojsonComponent },
  { path: 'editing', component: EditingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
