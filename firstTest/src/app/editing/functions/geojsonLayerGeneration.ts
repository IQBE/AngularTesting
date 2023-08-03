import Map from '@arcgis/core/Map';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import { GeoJsonObject } from 'geojson';
import {
  labelClass,
  popupTemplate,
  renderer,
} from 'src/app/shared/map/renderers';

export const generateGeoJSONLayer = (
  title: string,
  map: Map,
  data: GeoJsonObject
) => {
  const blob: Blob = new Blob([JSON.stringify(data)], {
    type: 'application/json',
  });

  const url: string = URL.createObjectURL(blob);
  const layer: GeoJSONLayer = new GeoJSONLayer({
    title: title,
    url: url,
    renderer: renderer,
    labelingInfo: [labelClass],
    popupTemplate: popupTemplate,
    editingEnabled: true,
  });

  map.add(layer);

  return layer;
};
