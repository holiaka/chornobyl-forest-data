import { LayersControl, TileLayer, LayerGroup } from 'react-leaflet';

const mapList = {
    standParameters: [SI, ],
};

export const ForestStandParameters = () => {

  return (
    <>
      <LayersControl.Overlay name="Stand parameters">
        
                  {mapList.standParameters.map(item => (<TileLayer
                      key={item}
                      url={`https://raw.githubusercontent.com/holiaka/chornobyl-forest-tiles/main/${item}/{z}/{x}/{y}.webp`}
                      tms="true"
                      minZoom={10}
                      maxZoom={21}
                  />
                  ))}
          {numberOfPolygons.map(item => (
            <TileLayer
              key={item}
              url={`https://raw.githubusercontent.com/holiaka/chornobyl-polygon-tiles/main/orto/orto-p${item}/{z}/{x}/{y}.webp`}
              tms="true"
              minZoom={10}
              maxZoom={21}
            />
          ))}
        </LayerGroup>
      </LayersControl.Overlay><LayersControl.Overlay name="Canopy height model (CHM)">
        <LayerGroup>
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
              url={`https://raw.githubusercontent.com/holiaka/chornobyl-polygon-tiles/main/rgb-chm/chm-p${item}/{z}/{x}/{y}.webp`}
              tms="true"
              minZoom={10}
              maxZoom={21}
            />
          ))}
        </LayerGroup>
      </LayersControl.Overlay>
    </>
  );
};
