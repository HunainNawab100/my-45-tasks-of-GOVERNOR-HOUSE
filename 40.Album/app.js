function MakeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = MakeAlbum("ali", "light");
console.log(album);
album = MakeAlbum("bilal", "red wave");
console.log(album);
album = MakeAlbum("hamza", "seenbreez");
console.log(album);
