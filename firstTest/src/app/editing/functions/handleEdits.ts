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

const createPolygon = async (id: number, properties: object) => {
  const newPolygon = {
    type: 'Feature',
    properties: {
      //@ts-ignore
      ...properties?.attributes,
    },
    geometry: {
      type: 'MultiPolygon',
      //@ts-ignore
      coordinates: [properties?.geometry?.rings],
    },
  };
  console.log(JSON.stringify(newPolygon));
  // TODO: API POST request
};

const deletePolygon = async (id: number) => {
  console.log('Type: Add\nID: ' + id);
  const resp = await fetch(
    `http://20.55.78.111:8000/dashboard/notification/${id}/`,
    { method: 'DELETE' }
  );
  const data = await resp.json();
  console.log(data);
};

const updatePolygon = () => {};
