import { ElementRef } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

import { generateLegend } from './legendGeneration';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';

export const generateMap = (mapViewEl: ElementRef) => {
  const map: Map = new Map({
    basemap: 'arcgis-topographic',
  });

  const mapView: MapView = new MapView({
    container: mapViewEl.nativeElement,
    map: map,
    center: [4.5, 50.5],
    zoom: 8,
  });

  const legend = generateLegend(mapView);

  return { map, mapView, legend };
};
