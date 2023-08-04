import Editor from '@arcgis/core/widgets/Editor';
import MapView from '@arcgis/core/views/MapView';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';

export const generateEditor = (view: MapView, originalLayer: GeoJSONLayer) => {
  const editor: Editor = new Editor({
    view: view,
    //@ts-ignore
    layerInfos: [{ layer: originalLayer }], // Niet nuttig? Niet zeker, geen idee of dit iets doet...
  });

  view.ui.add(editor, 'top-right');

  return editor;
};
