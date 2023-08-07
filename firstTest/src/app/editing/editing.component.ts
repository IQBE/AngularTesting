import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import ArcConf from '../../config/esri-config.json';
import EsriConfig from '@arcgis/core/config';
import { GeoJsonObject } from 'geojson';

import { generateMap } from './functions/mapGeneration';
import { generateGeoJSONLayer } from './functions/geojsonLayerGeneration';
import { generateEditor } from './functions/editorGeneration';

import data from '../../data/test.geojson.json';
import { generateSearch } from './functions/searchGeneration';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css'],
})
export class EditingComponent implements AfterViewInit {
  @ViewChild('mapViewDiv', { static: true }) private mapViewEl!: ElementRef;

  constructor() {
    EsriConfig.apiKey = ArcConf.apiKey;
    EsriConfig.applicationName = ArcConf.applicationName;
  }

  ngAfterViewInit(): void {
    const { map, mapView, legend } = generateMap(this.mapViewEl);
    const alertLayer = generateGeoJSONLayer(
      'alertLayer',
      map,
      data as GeoJsonObject
    );
    const editor = generateEditor(mapView, alertLayer);
    const search = generateSearch(mapView);
  }
}
