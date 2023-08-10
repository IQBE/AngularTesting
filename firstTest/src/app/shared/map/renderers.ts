import { SimpleRenderer } from '@arcgis/core/renderers';
import LabelClass from '@arcgis/core/layers/support/LabelClass';

export const renderer: SimpleRenderer = new SimpleRenderer({
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

export const labelClass: LabelClass = new LabelClass({
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

export const popupTemplate = {
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
