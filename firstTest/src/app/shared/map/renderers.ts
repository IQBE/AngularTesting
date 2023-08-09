import { SimpleRenderer } from '@arcgis/core/renderers';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import LabelClass from '@arcgis/core/layers/support/LabelClass';

// TODO: Doesn't render atm
export const renderer: SimpleRenderer = new SimpleRenderer({
  label: 'Alerts',
  symbol: {
    //@ts-ignore
    type: 'simple-fill',
    color: [255, 127, 127, 0.3],
  },
});

// // Old code for value specific rendering
// export const renderer: UniqueValueRenderer = new UniqueValueRenderer({
//   legendOptions: {
//     title: 'Alerts'
//   },
//   field: 'highlight',
//   uniqueValueInfos: [
//     {
//       value: 1,
//       label: 'Active E1002 page',e1002_page_renderer
//       symbol: {
//         type: 'simple-fill',
//         color: 'rgba(0, 255, 0, 0.3)'
//       }
//     },
//     {
//       value: 0,
//       label: 'Inactive E1002 page',
//       symbol: {
//         type: 'simple-fill',
//         color: 'rgba(127, 127, 127, 0.3)'
//       }
//     }
//   ]
// });

export const labelClass: LabelClass = new LabelClass({
  symbol: {
    type: 'text',
    color: 'grey',
    font: {
      family: 'sans-serif',
      size: 10,
      weight: 'normal',
    },
    haloColor: 'white',
    haloSize: 2,
  },
  labelPlacement: 'always-horizontal',
  labelExpressionInfo: {
    expression: '$feature.id',
  },
  deconflictionStrategy: 'static',
});

export const popupTemplate = {
  title: '{id}',
  content: [
    {
      type: 'fields',
      fieldInfos: [
        {
          fieldName: 'type',
          label: 'Type',
          visible: true,
          tooltip: '',
          format: null,
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'track_of_line',
          label: 'Line/Track',
          visible: true,
          tooltip: '',
          format: null,
          stringFieldOption: 'text-box',
        },
        {
          fieldName: 'signalling_post',
          label: 'Signalling Post',
          visible: true,
          tooltip: '',
          format: null,
          stringFieldOption: 'text-box',
        },
      ],
    },
  ],
};
