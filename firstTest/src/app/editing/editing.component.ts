import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import ArcConf from '../../config/esri-config.json';
import EsriConfig from '@arcgis/core/config';
import { GeoJsonObject } from 'geojson';

import { generateMap } from './functions/mapGeneration';
import { generateGeoJSONLayer } from './functions/geojsonLayerGeneration';
import { generateEditor } from './functions/editorGeneration';

import { generateSearch } from './functions/searchGeneration';
import { generateCompass } from './functions/compassGeneration';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css'],
})
export class EditingComponent implements AfterViewInit {
  @ViewChild('mapViewDiv', { static: true }) private mapViewEl!: ElementRef;
  //@ts-ignore

  constructor() {
    EsriConfig.apiKey = ArcConf.apiKey;
    EsriConfig.applicationName = ArcConf.applicationName;
  }

  ngAfterViewInit(): void {
    fetch('http://20.55.78.111:8000/dashboard/alert/')
      .then((resp) => resp.json())
      .then((data) => {
        this.initializeMapView(data as GeoJsonObject);
      })
      .catch((err) => console.error(err));
  }

  private initializeMapView(data: GeoJsonObject): void {
    // console.log(data); // DEBUG: Check data
    const { map, mapView, legend } = generateMap(this.mapViewEl);
    const alertLayer = generateGeoJSONLayer('alertLayer', map, data);
    const editor = generateEditor(mapView, alertLayer);
    const search = generateSearch(mapView);
    const compass = generateCompass(mapView);
    // console.log(alertLayer.get('url')); // DEBUG: Check if data is in the layer
  }
}
