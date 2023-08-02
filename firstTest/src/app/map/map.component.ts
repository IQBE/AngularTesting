import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import ArcConf from '../../config/esri-config.json';
import EsriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @ViewChild('mapViewDiv', { static: true }) private mapViewEl!: ElementRef;

  constructor() {
    EsriConfig.apiKey = ArcConf.apiKey;
    EsriConfig.applicationName = ArcConf.applicationName;
  }

  ngOnInit(): void {
    const map: Map = new Map({
      basemap: 'arcgis-topographic',
    });

    const mapView = new MapView({
      container: this.mapViewEl.nativeElement,
      map: map,
      center: [4.33096, 50.8354],
      zoom: 16,
    });

    // Generating graphics layers - Not advisable!!
    const SolvedLayer: GraphicsLayer = new GraphicsLayer({ title: 'Solved' });
    const AlertsLayer: GraphicsLayer = new GraphicsLayer({ title: 'Alerts' });
    const NotificationsLayer: GraphicsLayer = new GraphicsLayer({
      title: 'Notifications',
    });
    const EditingLayer: GraphicsLayer = new GraphicsLayer({ title: 'Editing' });

    map.add(SolvedLayer);
    map.add(AlertsLayer);
    map.add(NotificationsLayer);
    map.add(EditingLayer);

    // Add point to Alerts layer
    const alertPoint: Object = {
      type: 'point',
      longitude: 4.33096,
      latitude: 50.8354,
    };

    const alertSymbol: Object = {
      type: 'simple-marker',
      color: [255, 100, 100],
      outline: {
        color: [255, 0, 0],
        width: 1,
      },
    };

    const AlertPointGraphic = new Graphic({
      geometry: alertPoint,
      symbol: alertSymbol,
    });

    SolvedLayer.add(AlertPointGraphic);

    console.log(map.allLayers); // DEBUGGING
  }
}
