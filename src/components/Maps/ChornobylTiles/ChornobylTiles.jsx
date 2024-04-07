import { LayersControl, TileLayer } from 'react-leaflet';

const mapList = {
  standParameters: [
    { name: 'Site Index', abbreviation: 'SI' },
    {
      name: 'Average tree diameter (DBH) as of 2020, cm',
      abbreviation: 'DBH_cm_2020',
    },
    {
      name: 'Average tree diameter (DBH) as of 2050, cm',
      abbreviation: 'DBH_cm_2050',
    },
    { name: 'Average tree height as of 2020, m', abbreviation: 'H_m_2020' },
    { name: 'Average tree height as of 2050, m', abbreviation: 'H_m_2050' },
    {
      name: 'Stand basal area as of 2020, sq.m/ha',
      abbreviation: 'BA_sq_m_ha_2020',
    },
    {
      name: 'Stand basal area as of 2050, sq.m/ha',
      abbreviation: 'BA_sq_m_ha_2050',
    },
    {
      name: 'Growing stock as of 2020, cub.m/ha',
      abbreviation: 'GS_cub_m_ha_2020',
    },
    {
      name: 'Growing stock as of 2050, cub.m/ha',
      abbreviation: 'GS_cub_m_ha_2050',
    },
  ],
  standBiomass: [
    {
      name: 'Trunk biomass as of 2020, t/ha',
      abbreviation: 'all_stem_biomass_t_ha_2020',
    },
    {
      name: 'Trunk biomass as of 2050, t/ha',
      abbreviation: 'all_stem_biomass_t_ha_2050',
    },
    {
      name: 'Above-ground biomass as of 2020, t/ha',
      abbreviation: 'AG_biomass_t_ha_2020',
    },
    {
      name: 'Above-ground biomass as of 2050, t/ha',
      abbreviation: 'AG_biomass_t_ha_2050',
    },
  ],
  rnContentInWood: [
    {
      name: 'Sr-90 content in trunk wood as of 2020, Bq/kg',
      abbreviation: 'Sr_content_in_wood_Bq_kg_2020',
    },
    {
      name: 'Cs-137 content in trunk wood as of 2020, Bq/kg',
      abbreviation: 'Cs_content_in_wood_Bq_kg_2020',
    },
    {
      name: 'Probability of exceeding the permissible level of Sr-90 content in stem wood (600 Bq/kg) as of 2020, %',
      abbreviation: 'P_Sr_content_(0-1)_2020',
    },
    {
      name: 'Probability of exceeding the permissible level of Cs-137 content in stem wood (600 Bq/kg) as of 2020, %',
      abbreviation: 'P_Cs_content_(0-1)_2020',
    },
  ],
  doses: [
    {
      name: 'External dose rate at a height of 1.0 m as of 2020, &mu;Gy/h',
      abbreviation: 'Ex_dose_mkGy_h_2020',
    },
    {
      name: 'Internal dose rate as of 2020, &mu;Gy/h',
      abbreviation: 'Internal_dose_mkGy_h_2020',
    },
    {
      name: 'Total dose rate as of 2020, &mu;Gy/h',
      abbreviation: 'Total_dose_mkGy_h_2020',
    },
  ],
  litter: [
    {
      name: 'Pine litter biomass as of 2020, kg/sq.m',
      abbreviation: 'Litter_biomass_kg_sq_m_2020_only_Pine',
    },
    {
      name: 'Sr-90 activity in fuel litter biomass of Pine stands as of 2020, kBq/sq.m',
      abbreviation: 'Fuel_litter_activity_Sr_kBq_sq_m',
    },
    {
      name: 'Cs-137 activity in fuel litter biomass of Pine stands as of 2020, kBq/sq.m',
      abbreviation: 'Fuel_litter_activity_Cs_kBq_sq_m',
    },
    {
      name: 'Sr-90 activity in total litter biomass of Pine stands as of 2020, kBq/sq.m',
      abbreviation: 'Total_litter_activity_Sr_kBq_sq_m',
    },
    {
      name: 'Cs-137 activity in total litter biomass of Pine stands as of 2020, kBq/sq.m',
      abbreviation: 'Total_litter_activity_Cs_kBq_sq_m',
    },
  ],
  sentinelRGB: [
    {
      name: 'Sentinel-2 Satellite Image composed of B4-B3-B2 (RGB) bands (2019/08/24)',
      abbreviation: 'Sentinel_RGB_20190824',
    },
    {
      name: 'Sentinel-2 Satellite Image composed of B4-B3-B2 (RGB) bands (2020/09/22)',
      abbreviation: 'Sentinel_RGB_20200922',
    },],
  sentinelOutput: [
    {
      name: 'Growing stock based on Sentinel-1-2 satellite data (2020),  cub.m/ha',
      abbreviation: 'Sentinel_GS_cub_m_ha',
    },
    {
      name: 'Trunk biomass based on Sentinel-1-2 satellite data (2020), t/ha',
      abbreviation: 'Sentinel_all_stem_biomass_t_ha',
    },
    {
      name: ' Above-ground biomass based on Sentinel-1-2 satellite data (2020), t/ha',
      abbreviation: 'Sentinel_AG_biomass_t_ha',
    },
    {
      name: 'Sr-90 aggregated transfer factors to wood based on Sentinel satellite data, (Bq kg<sup>-1</sup>) (kBq m<sup>-2</sup>)<sup>-1</sup>',
      abbreviation: 'Sentinel_Tag_Sr',
    },
    {
      name: 'Cs-137 aggregated transfer factors to wood based on Sentinel satellite data, (Bq kg<sup>-1</sup>) (kBq m<sup>-2</sup>)<sup>-1</sup>',
      abbreviation: 'Sentinel_Tag_Cs',
    },
    { name: '', abbreviation: '' },
  ],
};

export const ForestStandParameters = () => {
  return (
    <>
      {mapList.standParameters.map(item => (
        <LayersControl.Overlay name={`${item.name}`}>
          <TileLayer
            key={item.name}
            url={`https://raw.githubusercontent.com/holiaka/chornobyl-forest-tiles/main/${item.abbreviation}/{z}/{x}/{y}.webp`}
            tms="true"
            minZoom={7}
            maxZoom={15}
          />
        </LayersControl.Overlay>
      ))}
    </>
  );
};

export const StandBiomass = () => {
  return (
    <>
      {mapList.standBiomass.map(item => (
        <LayersControl.Overlay name={`${item.name}`}>
          <TileLayer
            key={item.name}
            url={`https://raw.githubusercontent.com/holiaka/chornobyl-forest-tiles/main/${item.abbreviation}/{z}/{x}/{y}.webp`}
            tms="true"
            minZoom={7}
            maxZoom={15}
          />
        </LayersControl.Overlay>
      ))}
    </>
  );
};

export const RnContentInWood = () => {
  return (
    <>
      {mapList.rnContentInWood.map(item => (
        <LayersControl.Overlay name={`${item.name}`}>
          <TileLayer
            key={item.name}
            url={`https://raw.githubusercontent.com/holiaka/chornobyl-forest-tiles/main/${item.abbreviation}/{z}/{x}/{y}.webp`}
            tms="true"
            minZoom={7}
            maxZoom={15}
          />
        </LayersControl.Overlay>
      ))}
    </>
  );
};

export const Doses = () => {
  return (
    <>
      {mapList.doses.map(item => (
        <LayersControl.Overlay name={`${item.name}`}>
          <TileLayer
            key={item.name}
            url={`https://raw.githubusercontent.com/holiaka/chornobyl-forest-tiles/main/${item.abbreviation}/{z}/{x}/{y}.webp`}
            tms="true"
            minZoom={7}
            maxZoom={15}
          />
        </LayersControl.Overlay>
      ))}
    </>
  );
};

export const Litter = () => {
  return (
    <>
      {mapList.litter.map(item => (
        <LayersControl.Overlay name={`${item.name}`}>
          <TileLayer
            key={item.name}
            url={`https://raw.githubusercontent.com/holiaka/chornobyl-forest-tiles/main/${item.abbreviation}/{z}/{x}/{y}.webp`}
            tms="true"
            minZoom={7}
            maxZoom={15}
          />
        </LayersControl.Overlay>
      ))}
    </>
  );
};

export const RGBSentinel = () => {
  return (
    <>
      {mapList.sentinelRGB.map(item => (
        <LayersControl.BaseLayer name={`${item.name}`}>
          <TileLayer
            key={item.name}
            url={`https://raw.githubusercontent.com/holiaka/chornobyl-forest-tiles/main/Sentinel/${item.abbreviation}/{z}/{x}/{y}.webp`}
            tms="true"
            minZoom={5}
            maxZoom={20}
          />
        </LayersControl.BaseLayer>
      ))}
    </>
  );
};

export const OutputSentinel = () => {
  return (
    <>
      {mapList.sentinelOutput.map(item => (
        <LayersControl.Overlay name={`${item.name}`}>
          <TileLayer
            key={item.name}
            url={`https://raw.githubusercontent.com/holiaka/chornobyl-forest-tiles/main/Sentinel/${item.abbreviation}/{z}/{x}/{y}.webp`}
            tms="true"
            minZoom={7}
            maxZoom={15}
          />
        </LayersControl.Overlay>
      ))}
    </>
  );
};
