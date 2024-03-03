function MakeAlbum(artist:string,title:string):{artist:string,title:string}{
    const dictionaries={
        artist:artist.charAt(0).toUpperCase()+ artist.slice(1),
        title:title.charAt(0).toUpperCase()+ title.slice(1)
    };
    return dictionaries;
}

let album = MakeAlbum("ali","light")
console.log(album)

album = MakeAlbum("bilal","red wave")
console.log(album)

album = MakeAlbum("hamza","seenbreez")
console.log(album)