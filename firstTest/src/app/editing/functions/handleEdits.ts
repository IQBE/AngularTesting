import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';

export const handleEdit = (evt: any, layer: GeoJSONLayer) => {
  if (evt.edits.deleteFeatures.length > 0) {
    const ID = evt.edits.deleteFeatures[0].attributes.id;
    console.log('Type: Delete\nID: ' + ID);
  } else if (evt.edits.addFeatures.length > 0) {
    const ID = evt.edits.addFeatures[0].attributes.id;
    console.log('Type: Add\nID: ' + ID);
  }
  console.log('Edit detected! Data:\n' + JSON.stringify(evt));
};
