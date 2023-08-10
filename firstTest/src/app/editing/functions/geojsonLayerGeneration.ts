import Map from '@arcgis/core/Map';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import { GeoJsonObject } from 'geojson';
import {
  alertRenderer,
  notificationRenderer,
  alertLabelClass,
  notificationLabelClass,
  alertPopupTemplate,
  notificationPopupTemplate,
  editLabelClass,
  editRenderer,
} from 'src/app/shared/map/renderers';
import { handleEdit } from './handleEdits';

export const generateAlertLayer = (map: Map, data: GeoJsonObject) => {
  const blob: Blob = new Blob([JSON.stringify(data)], {
    type: 'application/json',
  });

  const url: string = URL.createObjectURL(blob);
  const layer: GeoJSONLayer = new GeoJSONLayer({
    title: 'Alerts',
    url: url,
    fields: [
      {
        name: 'id',
        type: 'oid',
      },
      {
        name: 'line_code',
        type: 'integer',
      },
      {
        name: 'track_code',
        type: 'integer',
      },
      {
        name: 'side',
        type: 'string',
      },
      {
        name: 'max_urgency',
        type: 'double',
      },
      {
        name: 'season',
        type: 'string',
      },
    ],
    renderer: alertRenderer,
    labelingInfo: [alertLabelClass],
    popupTemplate: alertPopupTemplate,
    editingEnabled: false,
    objectIdField: 'id',
  });

  map.add(layer);

  return layer;
};

export const generateNotificationLayer = (map: Map, data: GeoJsonObject) => {
  const blob: Blob = new Blob([JSON.stringify(data)], {
    type: 'application/json',
  });

  const url: string = URL.createObjectURL(blob);
  const layer: GeoJSONLayer = new GeoJSONLayer({
    title: 'Notifications',
    url: url,
    fields: [
      {
        name: 'id',
        type: 'oid',
      },
      {
        name: 'line_code',
        type: 'integer',
      },
      {
        name: 'track_code',
        type: 'integer',
      },
      {
        name: 'measure_start',
        type: 'double',
      },
      {
        name: 'measure_end',
        type: 'double',
      },
      {
        name: 'status',
        type: 'string',
      },
      {
        name: 'next_check',
        type: 'date', // Might also be a string...
      },
      {
        name: 'terrain_owner',
        type: 'string',
      },
      {
        name: 'description',
        type: 'string',
      },
    ],
    renderer: notificationRenderer,
    labelingInfo: [notificationLabelClass],
    popupTemplate: notificationPopupTemplate,
    editingEnabled: false,
    objectIdField: 'id',
  });

  map.add(layer);

  return layer;
};

export const generateEditLayer = (map: Map) => {
  const data = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          coordinates: [4, 50],
          type: 'Point',
        },
      },
    ],
  };

  const blob: Blob = new Blob([JSON.stringify(data)], {
    type: 'application/json',
  });

  const url: string = URL.createObjectURL(blob);
  const layer: GeoJSONLayer = new GeoJSONLayer({
    title: 'Editing',
    url: url,
    fields: [
      {
        name: 'id',
        type: 'oid',
      },
      {
        name: 'line_code',
        type: 'integer',
      },
      {
        name: 'track_code',
        type: 'integer',
      },
      {
        name: 'measure_start',
        type: 'double',
      },
      {
        name: 'measure_end',
        type: 'double',
      },
      {
        name: 'status',
        type: 'string',
      },
      {
        name: 'next_check',
        type: 'date', // Might also be a string...
      },
      {
        name: 'terrain_owner',
        type: 'string',
      },
      {
        name: 'description',
        type: 'string',
      },
    ],
    renderer: editRenderer,
    labelingInfo: [editLabelClass],
    popupTemplate: notificationPopupTemplate, // Same data as notifications
    editingEnabled: true,
    objectIdField: 'id',
  });

  layer.on('edits', (evt) => {
    handleEdit(evt, layer);
  });

  map.add(layer);

  return layer;
};
