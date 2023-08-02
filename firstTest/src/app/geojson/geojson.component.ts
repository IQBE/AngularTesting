import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import ArcConf from '../../config/esri-config.json';
import EsriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';

import data from '../../data/test.geojson.json';

@Component({
  selector: 'app-geojson',
  templateUrl: './geojson.component.html',
  styleUrls: ['./geojson.component.css'],
})
export class GeojsonComponent implements OnInit {
  @ViewChild('mapViewDiv', { static: true }) private mapViewEl!: ElementRef;

  constructor() {
    EsriConfig.apiKey = ArcConf.apiKey;
    EsriConfig.applicationName = ArcConf.applicationName;
  }

  ngOnInit(): void {
    const map: Map = new Map({
      basemap: 'arcgis-topographic',
    });

    const mapView: MapView = new MapView({
      container: this.mapViewEl.nativeElement,
      map: map,
      center: [4.33096, 50.8354],
      zoom: 16,
    });

    // const renderer = getRenderer(rendererKey);
    // const labelClass = getLabelClass(labelClassKey);
    // const popupTemplate = getPopupTemplate(popupTemplateKey);
    const blob: Blob = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    });
    const url: string = URL.createObjectURL(blob);
    const layer: GeoJSONLayer = new GeoJSONLayer({
      title: 'CustomLayer',
      url: url,
      // renderer: renderer,
      // labelingInfo: labelClass,
      // popupTemplate: popupTemplate,
    });
    map.add(layer);
  }
}
