import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';

export const handleEdit = (evt: any, layer: GeoJSONLayer) => {
  if (evt.deletedFeatures.length > 0) {
    deletePolygon(evt.deletedFeatures[0].objectId);
  } else if (evt.addedFeatures.length > 0) {
    createPolygon(evt.addedFeatures[0].objectId, evt.edits.addFeatures[0]);
  } else {
    console.log('UNKNOWN EDIT TYPE:');
    console.log(evt);
  }
};

const createPolygon = (id: number, properties: object) => {
  console.log('ID: ' + id);
  console.log(properties);
};

const deletePolygon = (id: number) => {
  console.log('Type: Add\nID: ' + id);
};

const updatePolygon = () => {};
