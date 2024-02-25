import axios from 'axios';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { Popup, LayersControl, Circle } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

export const fireFetch = async () => {
  try {
    const response = await axios.get(
      'https://firms.modaps.eosdis.nasa.gov/mapserver/wfs/Europe/84dc7dc887a33ab210892c56579345f2/?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAME=ms:fires_modis_7days&STARTINDEX=0&COUNT=1000&SRSNAME=urn:ogc:def:crs:EPSG::4326&BBOX=-90,-180,90,180,urn:ogc:def:crs:EPSG::4326&outputformat=csv'
    );
    // handle success
    const output = await response.data.toString();
    const list = Papa.parse(output, {
      quoteChar: '"',
      escapeChar: '"',
      header: true,
      dynamicTyping: true,
    });
    list.data.pop();
    return list.data;
  } catch (error) {
    // handle error
    console.log(error.message);
  }
};

export const Wildfires = () => {
  const [fires, setFires] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await fireFetch();
      console.log('output', data);
      setFires(() => data);
    };
    fetch();
  }, []);

  return (
    <LayersControl.Overlay name="Wild fires 1 days" >
      <MarkerClusterGroup maxClusterRadius={40} color={"#960101"}>
        {fires.map((point, index) => (
          <Circle
            key={index}
            center={[point.latitude, point.longitude]}
            radius={175}
            color={'#b31111'}
          >
            <Popup>
              <b>Latitude: </b>
              {point.latitude}
              <b>Longitude: </b>
              {point.longitude}
                    <b>Confidence: </b>
                    {point.confidence} %
                    {point.confidence}
                    <b>Brightness: </b>
                    {point.brightness}
                    
                    <b>FRP: </b>
                    {point.frp} MW
            </Popup>
          </Circle>
        ))}
      </MarkerClusterGroup>
    </LayersControl.Overlay>
  );
};
