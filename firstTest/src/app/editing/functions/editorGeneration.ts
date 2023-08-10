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
            new FieldElement({
              fieldName: 'line_code',
              label: 'Line',
            }),
            new FieldElement({
              fieldName: 'track_code',
              label: 'Track',
            }),
            new FieldElement({
              fieldName: 'side',
              label: 'Side',
            }),
            new FieldElement({
              fieldName: 'max_urgency',
              label: 'Urgency',
            }),
            new FieldElement({
              fieldName: 'season',
              label: 'Season',
            }),
          ],
        },
      },
    ],
  });

  view.ui.add(editor, 'top-right');

  return editor;
};
