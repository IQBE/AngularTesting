import Editor from '@arcgis/core/widgets/Editor';
import MapView from '@arcgis/core/views/MapView';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import FieldElement from '@arcgis/core/form/elements/FieldElement';
import SwitchInput from '@arcgis/core/form/elements/inputs/SwitchInput';

// DOCS:https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#layerInfos
// DOCS SUCK #SAD

export const generateEditor = (view: MapView, originalLayer: GeoJSONLayer) => {
  const editor: Editor = new Editor({
    view: view,
    layerInfos: [
      {
        //@ts-ignore
        layer: originalLayer,
        //@ts-ignore
        formTemplate: {
          elements: [
            // "id": "HTA-51", "ssp_id": "test", "sheetnr": "tesd", "highlight": 1
            // new FieldElement({
            //   fieldName: 'id',
            //   label: 'ID',
            //   // input: {
            //   //   type: ''
            //   // }
            // }),
            new FieldElement({
              fieldName: 'ssp_id',
              label: 'SSP ID',
            }),
            new FieldElement({
              fieldName: 'sheetnr',
              label: 'Sheet Number',
            }),
            new FieldElement({
              fieldName: 'highlight',
              label: 'Highlight',
              input: new SwitchInput({
                offValue: 0,
                onValue: 1,
              }),
            }),
          ],
        },
      },
    ],
  });

  view.ui.add(editor, 'top-right');

  return editor;
};
