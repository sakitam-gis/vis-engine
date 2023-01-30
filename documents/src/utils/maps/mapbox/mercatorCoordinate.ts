import { utils } from '@sakitam-gis/vis-engine';

const { clamp } = utils;

export const earthRadius = 6371008.8;

/*
 * The average circumference of the world in meters.
 */
export const earthCircumference = 2 * Math.PI * earthRadius; // meters
export const halfEarthCircumference = earthCircumference / 2; // meters

/*
 * The circumference at a line of latitude in meters.
 */
export function circumferenceAtLatitude(latitude) {
  return earthCircumference * Math.cos(latitude * Math.PI / 180);
}

export function mercatorXfromLng(lng) {
  return (180 + lng) / 360;
}

export function mercatorYfromLat(lat) {
  return (180 - (180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360)))) / 360;
}

export function mercatorZfromAltitude(altitude, lat) {
  return altitude / circumferenceAtLatitude(lat);
}

export function lngFromMercatorX(x) {
  return x * 360 - 180;
}

export function latFromMercatorY(y) {
  const y2 = 180 - y * 360;
  return 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
}

export function altitudeFromMercatorZ(z, y) {
  return z * circumferenceAtLatitude(latFromMercatorY(y));
}

export const MAX_MERCATOR_LATITUDE = 85.051129;

export function fromLngLat(lngLatLike, altitude = 0) {
  const lat = clamp(lngLatLike.lat, -MAX_MERCATOR_LATITUDE, MAX_MERCATOR_LATITUDE);
  return {
    x: mercatorXfromLng(lngLatLike.lng),
    y: mercatorYfromLat(lat),
    z: altitudeFromMercatorZ(altitude, lat),
  };
}

export function toLngLat(mercatorCoordinate) {
  return {
    lng: lngFromMercatorX(mercatorCoordinate.x),
    lat: latFromMercatorY(mercatorCoordinate.y),
  };
}

export function getTileCenter (x, y, z) {
  const numTiles = Math.pow(2, z);
  return {
    x: x * earthCircumference / numTiles - halfEarthCircumference,
    y: -(y * earthCircumference / numTiles - halfEarthCircumference),
  };
}
