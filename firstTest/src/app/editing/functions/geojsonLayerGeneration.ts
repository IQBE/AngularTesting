import Map from '@arcgis/core/Map';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import { GeoJsonObject } from 'geojson';
import {
  labelClass,
  popupTemplate,
  renderer,
} from 'src/app/shared/map/renderers';
import { handleEdit } from './handleEdits';

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
    fields: [
      {
        name: 'id',
        type: 'oid',
      },
      {
        name: 'ssp_id',
        type: 'string',
      },
      {
        name: 'sheetnr',
        type: 'string',
      },
      {
        name: 'highlight',
        type: 'integer',
      },
    ],
    renderer: renderer,
    labelingInfo: [labelClass],
    // popupTemplate: popupTemplate,
    editingEnabled: true,
    objectIdField: 'id',
  });

  layer.on('edits', (evt) => {
    handleEdit(evt, layer);
  });

  map.add(layer);

  return layer;
};
