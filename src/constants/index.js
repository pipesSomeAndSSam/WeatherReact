export const DEFAULT_PLACE = {
    name:"Leyte",
    place_id:"leyte",
    adm_area1:"Eastern Visayas",
    adm_area2:"Province of Leyte",
    country:"Philippines",
    lat:"11.36687N",
    lon:"124.48239E",
    timezone:"Asia/Manila",
    type:"settlement"
};
export const MEASUREMENT_SYSTEMS = {
    AUTO:'auto',
    METRIC:'metric',
    UK:'uk',
    US:'us',
    CA:'ca',
};
export const UNITS = {
    metric: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'm/s',
      visibility: 'km',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    us: {
      temperature: '°F',
      precipitation: 'in/h',
      wind_speed: 'mph',
      visibility: 'mi',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    uk: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'mph',
      visibility: 'mi',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    ca: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'km/h',
      visibility: 'km',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
}