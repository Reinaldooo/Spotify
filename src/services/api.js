import { config } from '../config';

const { spotify } = config;

export const defaultFetchOptions = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'method': 'GET',
};

export function getAuthorization() {
  return `${spotify.authorizationURL}?client_id=${spotify.clientId}${(spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : '')}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&response_type=token&show_dialog=true`
}

export function getUserProfile() {
  return `${spotify.webAPI}/me`
}

export function getUserRecentTracks() {
  return `${spotify.webAPI}/me/top/tracks?time_range=short_term&limit=10`
}

export function getCategories() {
  return `${spotify.webAPI}/browse/categories?country=BR&locale=pt_BR`
}

export function getCategoryPlaylists(id) {
  return `${spotify.webAPI}/browse/categories/${id}/playlists`
}

export function getPlaylistTracks(id) {
  return `${spotify.webAPI}/playlists/${id}/tracks`
}

export function getFeaturedPlaylists() {
  return `${spotify.webAPI}/browse/featured-playlists`
}
