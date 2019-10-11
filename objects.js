
var playlist = {Mozart: "Symphony 40"}

function updatePlaylist(k, v) {
  Object.assign(playlist, {[k]:v});
}
