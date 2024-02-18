import {
  GeoJSON,
  LayersControl,

} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import { access } from 'components/SharedLayout/SharedLayout.jsx';


import newObs from 'layers/front-end-colection-2024';
import { geoFetch } from './../../../firebase/sdk';
// import { useEffect } from 'react';
import { useOutletContext} from "react-router-dom";

import { notifyToast } from 'components/Notify/notifyPropertyCode';

export const NewDataLayer = () => {
    const {setGeoData} = useOutletContext();

  const createColor = val => {
    if (val === 1) {
      return '#006420';
    } else if (val === 2) {
      return '#b1bd40';
    } else if (val === 3) {
      return '#fdec00';
    } else if (val === 4) {
      return '#ff0415';
    } else if (val === 5) {
      return '#8f384c';
    } else if (val === 6) {
      return '#800085';
    } else {
      return '#45024b';
    }
  };


  const setIcon = (feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 4,
      fillColor: createColor(feature.properties.colorID),
      color: '#FFFFFF',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    });
  };

  let obtainData = async function (e) {
    const geoCoordinates = e.latlng;
    const { lat, lng } = geoCoordinates;

    const sitePosition = e.originalEvent;
    const { layerX, layerY, clientX, clientY } = sitePosition;

    const options = e.target;
    const id = options.feature.properties.ID;
    if (access) {
      try {
        const data = await geoFetch(id);
        notifyToast('success', 'Successful request to the database!');
        let obj = {
          id: id,
          lat: lat,
          lng: lng,
          positionX: layerX,
          positionY: layerY,
          clientX: clientX,
          clientY: clientY,
          AEDR01: data.AEDR_01,
          AEDR1: data.AEDR_10,
          alfaDF: data.Alfa_DF,
          betaDF: data.Beta_DF,
        };
        setGeoData(() => obj);
      } catch (error) {
        notifyToast('error', 'Request error!');
        return;
      }
    } else {
      let obj = {
        id: id,
        lat: lat,
        lng: lng,
        positionX: layerX,
        positionY: layerY,
        clientX: clientX,
        clientY: clientY,
      };
      setGeoData(() => obj);
    }
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: obtainData,
    });
  };


    return(
    <LayersControl.Overlay name="EXPEREMENT">
        <MarkerClusterGroup maxClusterRadius={40}>
            <GeoJSON
                data={newObs}
                pointToLayer={setIcon}
                onEachFeature={onEachFeature}
            ></GeoJSON>
        </MarkerClusterGroup>
        </LayersControl.Overlay>
    )
}