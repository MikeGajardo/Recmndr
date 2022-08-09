const key = `${process.env.REACT_APP_SPOTIFY_APIKEY}`;

const requests = {
  requestAlbums: `https://api.spotify.com/v1/albums?api_key=${key}`,
  requestArtist: `https://api.spotify.com/v1/artists?api_key=${key}`,
  requestTrack: `https://api.spotify.com/v1/tracks?api_key=${key}`,
  requestPlaylist: `https://api.spotify.com/v1/playlists?api_key=${key}`,
};

export default requests;
