import { SimpleRenderer } from '@arcgis/core/renderers';
import LabelClass from '@arcgis/core/layers/support/LabelClass';

export const alertRenderer: SimpleRenderer = new SimpleRenderer({
  label: 'Alerts',
  symbol: {
    // @ts-ignore
    type: 'simple-fill',
    color: [255, 127, 127, 0.3],
    outline: {
      color: [255, 0, 0, 1],
      width: 1,
    },
  },
});

export const notificationRenderer: SimpleRenderer = new SimpleRenderer({
  label: 'Notifications',
  symbol: {
    // @ts-ignore
    type: 'simple-fill',
    color: [127, 127, 255, 0.3],
    outline: {
      color: [0, 0, 255, 1],
      width: 1,
    },
  },
});

export const editRenderer: SimpleRenderer = new SimpleRenderer({
  label: 'Edits',
  symbol: {
    // @ts-ignore
    type: 'simple-fill',
    color: [127, 255, 127, 0.3],
    outline: {
      color: [0, 255, 0, 1],
      width: 1,
    },
  },
});

export const alertLabelClass: LabelClass = new LabelClass({
  symbol: {
    type: 'text',
    color: 'white',
    font: {
      family: 'sans-serif',
      size: 12,
      weight: 'bold',
    },
    haloColor: 'red',
    haloSize: 1,
  },
  labelPlacement: 'always-horizontal',
  labelExpressionInfo: {
    expression: '$feature.id',
  },
  deconflictionStrategy: 'static',
});

export const notificationLabelClass: LabelClass = new LabelClass({
  symbol: {
    type: 'text',
    color: 'white',
    font: {
      family: 'sans-serif',
      size: 12,
      weight: 'bold',
    },
    haloColor: 'blue',
    haloSize: 1,
  },
  labelPlacement: 'always-horizontal',
  labelExpressionInfo: {
    expression: '$feature.id',
  },
  deconflictionStrategy: 'static',
});

export const editLabelClass: LabelClass = new LabelClass({
  symbol: {
    type: 'text',
    color: 'white',
    font: {
      family: 'sans-serif',
      size: 12,
      weight: 'bold',
    },
    haloColor: 'green',
    haloSize: 1,
  },
  labelPlacement: 'always-horizontal',
  labelExpressionInfo: {
    expression: '$feature.id',
  },
  deconflictionStrategy: 'static',
});

export const alertPopupTemplate = {
  title: 'Alert ID: {id}',
  content: [
    {
      type: 'fields',
      fieldInfos: [
        {
          fieldName: 'line_code',
          label: 'Line',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'track_code',
          label: 'Track',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'max_urgency',
          label: 'Urgency',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'season',
          label: 'Season',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'side',
          label: 'Side',
          stringFieldOption: 'text-box',
        },
      ],
    },
  ],
};

export const notificationPopupTemplate = {
  title: 'Notification ID: {id}',
  content: [
    {
      type: 'fields',
      fieldInfos: [
        {
          fieldName: 'line_code',
          label: 'Line',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'track_code',
          label: 'Track',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'measure_start',
          label: 'Begin measure',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'measure_end',
          label: 'End measure',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'status',
          label: 'Status',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'next_check',
          label: 'Next check',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'terrain_Owner',
          label: 'Owner',
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'description',
          label: 'Description',
          stringFieldOption: 'text-box',
        },
      ],
    },
  ],
};
