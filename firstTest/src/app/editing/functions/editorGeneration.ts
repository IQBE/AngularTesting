import Editor from '@arcgis/core/widgets/Editor';
import MapView from '@arcgis/core/views/MapView';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';

export const generateEditor = async (view: MapView, layer: GeoJSONLayer) => {
  const editor: Editor = new Editor({
    view: view,
  });

  view.ui.add(editor, 'top-right');

  return editor;
};
