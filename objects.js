
var playlist = {Mozart: ["Symphony 40"]}

function updatePlaylist(k, v) {
  delete playlist.Mozart;
  playlist[k] = v;
}
