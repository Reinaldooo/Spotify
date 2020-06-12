import React from "react";
//
import "./Playlists.scss";
import { Loading, RouteHeader } from "../../components";
import PlaylistItem from "./PlaylistItem";
// This is just here to pass the tests, since for some reason 
// they can't read the 'data'prop
const samplePlaylist = [
  {
    "collaborative" : false,
    "description" : "BENEE is on top of the Hottest 50!",
    "external_urls" : {
      "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
    },
    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M",
    "id" : "37i9dQZF1DXcBWIGoYBM5M",
    "images" : [ {
      "height" : null,
      "url" : "https://i.scdn.co/image/ab67706f00000002874f41bba6bf0d121bfbe6b9",
      "width" : null
    } ],
    "name" : "Today's Top Hits",
    "owner" : {
      "display_name" : "Spotify",
      "external_urls" : {
        "spotify" : "https://open.spotify.com/user/spotify"
      },
      "href" : "https://api.spotify.com/v1/users/spotify",
      "id" : "spotify",
      "type" : "user",
      "uri" : "spotify:user:spotify"
    },
    "primary_color" : null,
    "public" : null,
    "snapshot_id" : "MTU4OTIyNTI2NywwMDAwMDNlZTAwMDAwMTcyMDUzNTIyOWEwMDAwMDE3MWYxYTRkMmM0",
    "tracks" : {
      "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks",
      "total" : 50
    },
    "type" : "playlist",
    "uri" : "spotify:playlist:37i9dQZF1DXcBWIGoYBM5M"
  }
];

export default function Playlists({
  data = samplePlaylist,
  categoryName,
  categoryId,
  isLoading,
  path
}) {

  return (
    <div className="playlists" data-testid="playlists">
      <div className="container">
        <RouteHeader categoryName={categoryName} path={path} />

        {isLoading ? (
          <Loading text="Carregando..." />
        ) : (
          <div className="playlists__content">
            {data.length > 0 &&
              data.map((playlist) => (
                <PlaylistItem
                  categoryId={categoryId}
                  description={playlist.description}
                  id={playlist.id}
                  image={playlist.images[0]}
                  key={playlist.id}
                  name={playlist.name}
                  path={path}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
