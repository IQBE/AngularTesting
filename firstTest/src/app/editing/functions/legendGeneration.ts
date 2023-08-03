import MapView from '@arcgis/core/views/MapView';
import Legend from '@arcgis/core/widgets/Legend';

export const generateLegend = (mapView: MapView) => {
  const legend = new Legend({
    view: mapView,
    style: 'card',
  });

  mapView.ui.add(legend, 'bottom-left');

  return legend;
};
