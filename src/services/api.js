import { config } from '../config';

const { spotify } = config;

export const defaultFetchOptions = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'method': 'GET',
};

export function getAuthorization() {
  return {
    url: `${spotify.authorizationURL}?client_id=${spotify.clientId}${(spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : '')}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&response_type=token&show_dialog=true`,
  }
}

export function getUserProfile() {
  return {
    url: `${spotify.webAPI}/me`,
  };
}

export function getCategories() {
  return {
    url: `${spotify.webAPI}/browse/categories?country=BR&locale=pt_BR`,
  };
}

export function getCategoryPlaylists(id) {
  return {
    url: `${spotify.webAPI}/browse/categories/${id}/playlists`,
  };
}

export function getPlaylistTracks(id) {
  return {
    url: `${spotify.webAPI}/playlists/${id}/tracks`,
  };
}
