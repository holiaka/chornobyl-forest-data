import { LayersControl, TileLayer, LayerGroup } from 'react-leaflet';

export const Polygons = () => {
  const numberOfPolygons = [...Array(15).keys()].slice(2);

  return (
    <>
      <LayersControl.Overlay name="Canopy height model (CHM)">
        
          <TileLayer
          attribution='&copy; <a href="https://www.researchgate.net/profile/Dmytrii-Holiaka">Dmytrii Holiaka</a> '
          url="https://raw.githubusercontent.com/holiaka/chornobyl-polygon-tiles/main/rgb-chm/chm-p1/{z}/{x}/{y}.webp"
          tms="true"
          minZoom={10}
          maxZoom={21}
        />       
          {numberOfPolygons.map(item => (
            <TileLayer
              key={item}
              url={`https://github.com/holiaka/chornobyl-polygon-tiles/blob/main/rgb-chm/chm-p${item}/{z}/{x}/{y}.webp?raw=true`}
              tms="true"
            />
          ))}
        
      </LayersControl.Overlay>
    </>
  );
};
