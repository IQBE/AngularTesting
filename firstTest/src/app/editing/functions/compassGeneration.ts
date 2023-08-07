import MapView from '@arcgis/core/views/MapView';
import Compass from '@arcgis/core/widgets/Compass';

export const generateCompass = (view: MapView) => {
  const compass = new Compass({ view: view });
  view.ui.add(compass, 'top-left');
  return compass;
};
