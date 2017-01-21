var albumDirectory "../albums";

function readAlbumName() {
  $(document).ready(function() {
    $.get(albumDirectory, function(data) {
      $("%fileNames").append(data);
    });
  })
}
