import Editor from '@arcgis/core/widgets/Editor';
import MapView from '@arcgis/core/views/MapView';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import FieldElement from '@arcgis/core/form/elements/FieldElement';

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
            // new FieldElement({
            //   fieldName: 'id',
            //   label: 'ID',
            // }),
            new FieldElement({
              fieldName: 'line_code',
              label: 'Line',
            }),
            new FieldElement({
              fieldName: 'track_code',
              label: 'Track',
            }),
            // new FieldElement({
            //   fieldName: 'measure_start',
            //   label: 'Begin measure',
            // }),
            // new FieldElement({
            //   fieldName: 'measure_end',
            //   label: 'End measures',
            // }),
            new FieldElement({
              fieldName: 'status',
              label: 'Status',
              input: {
                type: 'combo-box',
              },
              domain: {
                type: 'coded-value',
                codedValues: [
                  { code: 'NEW', name: 'New' },
                  { code: 'IGNORE', name: 'Ignore' },
                  { code: 'IN_PROGRESS', name: 'In progress' },
                  { code: 'CONTRACTOR_DONE', name: 'Contractor done' },
                  { code: 'INFRABEL_DONE', name: 'Completed' },
                ],
              },
            }),
            new FieldElement({
              fieldName: 'next_check',
              label: 'Next check',
            }),
            new FieldElement({
              fieldName: 'terrain_owner',
              label: 'Owner',
            }),
            new FieldElement({
              fieldName: 'description',
              label: 'Description',
              input: {
                type: 'text-area',
              },
            }),
          ],
        },
      },
    ],
  });

  view.ui.add(editor, 'top-right');

  return editor;
};
