import MapView from '@arcgis/core/views/MapView';
import Search from '@arcgis/core/widgets/Search';

export const generateSearch = (view: MapView) => {
  const search = new Search({
    view: view,
  });

  view.ui.add(search, {
    position: 'top-left',
    index: 0,
  });

  return search;
};
