import fetch from 'whatwg-fetch'; // window.fetch polyfill
import jsonp from 'jsonp';

class Albums {
    constructor() {
        this.albumsEndpoint = 'data/albums.json';
        this.itunesEndpoint = 'https://itunes.apple.com/search'
    }
    matchAlbumArtist(albums, artistName) {
        return albums.find(item => item.artistName.indexOf(artistName) !== -1)
    }
    getItunesDetails(album) {
        const url = `${this.itunesEndpoint}?entity=album&term=${window.encodeURIComponent(album.title)}`;
        return new Promise((resolve, reject) => {
            jsonp(url, (err, data) => err ? reject(err) : resolve(data))
        }).then(data => this.matchAlbumArtist(data.results, album.artist))
    }
    load() {
        return window.fetch(this.albumsEndpoint)
            .then(response => response.json())
            .catch(ex => ex);
    }
}

export default new Albums();