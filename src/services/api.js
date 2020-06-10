import { config } from '../config';

const { spotify } = config;

const defaultOptions = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'method': 'GET',
};

export const endpoints = {
  getAuthorization() {
    return {
      url: `${spotify.authorizationURL}?client_id=${spotify.clientId}${(spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : '')}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&response_type=token&show_dialog=true`,
      options: {}
    }
  },
  getCategories() {
    return {
      url: `${spotify.webAPI}/browse/categories?country=BR&locale=pt_BR`,
      options: defaultOptions,
    }
  },
  getCategoryPlaylists(id) {
    return {
      url: `${spotify.webAPI}/browse/categories/${id}/playlists`,
      options: defaultOptions,
    }
  },
  getPlaylistTracks(id) {
    return {
      url: `${spotify.webAPI}/playlists/${id}/tracks`,
      options: defaultOptions,
    }
  },
  getUserProfile() {
    return {
      url: `${spotify.webAPI}/me`,
      options: defaultOptions,
    }
  },
}
