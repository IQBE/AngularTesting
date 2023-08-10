import MapView from '@arcgis/core/views/MapView';
import Legend from '@arcgis/core/widgets/Legend';

export const generateLegend = (mapView: MapView, layers: any[]) => {
  const legend = new Legend({
    view: mapView,
    style: 'classic',
    layerInfos: layers.map((layer) => {
      return {
        layer,
        title: '',
      };
    }),
  });

  mapView.ui.add(legend, 'bottom-left');

  return legend;
};
