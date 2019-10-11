
var playlist = {'Mozart': ["Symphony 40"]}

function updatePlaylist(k, v) {
  playlist.delete( 'Mozart');
  playlist[k] = v;
}
