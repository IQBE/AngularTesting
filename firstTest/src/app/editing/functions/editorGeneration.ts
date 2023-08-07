import Editor from '@arcgis/core/widgets/Editor';
import MapView from '@arcgis/core/views/MapView';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';

// DOCS:https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#layerInfos

export const generateEditor = (view: MapView, originalLayer: GeoJSONLayer) => {
  const editor: Editor = new Editor({
    view: view,
    //@ts-ignore
    layerInfos: [{ layer: originalLayer }],
    enabled: true, // Default is true, set to false to disable editing functionality.
    addEnabled: true, // Default is true, set to false to disable the ability to add a new feature.
    updateEnabled: true, // Default is true, set to false to disable the ability to edit an existing feature.
    deleteEnabled: true, // Default is true, set to false to disable the ability to delete features.
    attributeUpdatesEnabled: true, // Default is true, set to false to disable the ability to edit attributes in the update workflow.
    geometryUpdatesEnabled: true, // Default is true, set to false to disable the ability to edit feature geometries in the update workflow.
    attachmentsOnCreateEnabled: true, //Default is true, set to false to disable the ability to work with attachments while creating features.
    attachmentsOnUpdateEnabled: true, //Default is true, set to false to disable the ability to work with attachments while updating/deleting features.
  });

  view.ui.add(editor, 'top-right');

  return editor;
};
