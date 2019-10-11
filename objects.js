
var playlist = {Mozart: "Symphony 40"}

function updatePlaylist(list, k, v) {
/*if (playlist.Mozart) {
    delete playlist.Mozart;
  }*/
  Object.assign(list, {[k]:v});
}
