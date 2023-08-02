import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import ArcConf from '../../config/esri-config.json';
import EsriConfig from '@arcgis/core/config';
import { generateMap } from './functions/mapGeneration';
import { generateAlertLayer } from './functions/alertLayerGeneration';
import { GeoJsonObject } from 'geojson';

import data from '../../data/test.geojson.json';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css'],
})
export class EditingComponent implements OnInit {
  @ViewChild('mapViewDiv', { static: true }) private mapViewEl!: ElementRef;

  constructor() {
    EsriConfig.apiKey = ArcConf.apiKey;
    EsriConfig.applicationName = ArcConf.applicationName;
  }

  ngOnInit(): void {
    const { map } = generateMap(this.mapViewEl);
    const { alertLayer } = generateAlertLayer(map, data as GeoJsonObject);
  }
}
