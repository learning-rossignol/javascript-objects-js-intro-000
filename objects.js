
var playlist = {Mozart: "Symphony 40"}

function updatePlaylist(k, v) {
  if (playlist.Mozart) {
    delete playlist.Mozart;
  }
  Object.assign(playlist, {[k]:v});
}
