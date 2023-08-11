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
    features: [],
  };

  const blob: Blob = new Blob([JSON.stringify(data)], {
    type: 'application/json',
  });

  const url: string = URL.createObjectURL(blob);
  const layer: GeoJSONLayer = new GeoJSONLayer({
    title: 'Editing',
    url: url,
    geometryType: 'polygon',
    fields: [
      {
        name: 'id',
        alias: 'ID',
        type: 'oid',
        nullable: false,
      },
      {
        name: 'line_code',
        alias: 'Line',
        type: 'integer',
        nullable: false,
      },
      {
        name: 'track_code',
        alias: 'Track',
        type: 'integer',
        nullable: false,
      },
      {
        name: 'measure_start',
        alias: 'Begin measure',
        type: 'double',
        nullable: true,
      },
      {
        name: 'measure_end',
        alias: 'End measure',
        type: 'double',
        nullable: true,
      },
      {
        name: 'status',
        alias: 'Status',
        type: 'string',
        nullable: false,
        defaultValue: 'NEW',
      },
      {
        name: 'next_check',
        alias: 'Next check',
        type: 'date', // Might also be a string...
        nullable: false,
      },
      {
        name: 'terrain_owner',
        alias: 'Owner',
        type: 'string',
        nullable: false,
      },
      {
        name: 'description',
        alias: 'Description',
        type: 'string',
        nullable: true,
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
