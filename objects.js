
var playlist = {Mozart: "Symphony 40"}

function updatePlaylist(k, v) {
  playlist = Object.assign({}, {[k]:v});
}
