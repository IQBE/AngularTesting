import Map from '@arcgis/core/Map';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import { GeoJsonObject } from 'geojson';

export const generateAlertLayer = (map: Map, data: GeoJsonObject) => {
  const blob: Blob = new Blob([JSON.stringify(data)], {
    type: 'application/json',
  });

  const url: string = URL.createObjectURL(blob);
  const alertLayer: GeoJSONLayer = new GeoJSONLayer({
    title: 'alertLayer',
    url: url,
    // renderer: renderer,
    // labelingInfo: labelClass,
    // popupTemplate: popupTemplate,
  });

  map.add(alertLayer);

  return { alertLayer };
};
