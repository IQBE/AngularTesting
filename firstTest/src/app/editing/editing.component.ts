import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import ArcConf from '../../config/esri-config.json';
import EsriConfig from '@arcgis/core/config';
import { GeoJsonObject } from 'geojson';

import { generateMap } from './functions/mapGeneration';
import {
  generateAlertLayer,
  generateEditLayer,
  generateNotificationLayer,
} from './functions/geojsonLayerGeneration';
import { generateEditor } from './functions/editorGeneration';

import { generateSearch } from './functions/searchGeneration';
import { generateCompass } from './functions/compassGeneration';
import { generateLegend } from './functions/legendGeneration';

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
    this.populateData();
  }

  private async populateData(): Promise<void> {
    try {
      const alertResp = await fetch(
        'http://20.55.78.111:8000/dashboard/alert/'
      );
      const alertData = await alertResp.json();

      const notificationResp = await fetch(
        'http://20.55.78.111:8000/dashboard/notification/'
      );
      const notificationData = await notificationResp.json();

      this.initializeMapView(alertData, notificationData);
    } catch (error) {
      console.error(error);
    }
  }

  private initializeMapView(
    alertData: GeoJsonObject,
    notificationData: GeoJsonObject
  ): void {
    // console.log(data); // DEBUG: Check data
    const { map, mapView } = generateMap(this.mapViewEl);
    const alertLayer = generateAlertLayer(map, alertData);
    const notificationLayer = generateNotificationLayer(map, notificationData);
    const editLayer = generateEditLayer(map); // TODO: Generate editing layer
    const legend = generateLegend(mapView, [
      alertLayer,
      notificationLayer,
      editLayer,
    ]);
    const editor = generateEditor(mapView, editLayer);
    const search = generateSearch(mapView);
    const compass = generateCompass(mapView);
    // console.log(alertLayer.get('url')); // DEBUG: Check if data is in the layer
  }
}
