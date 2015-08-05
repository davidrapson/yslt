import fetch from 'whatwg-fetch';
import jsonp from 'jsonp';

function randomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function matchAlbumArtist(albums, artistName) {
    return Array.find(albums, (item => item.artistName.indexOf(artistName) !== -1));
}

class Albums {
    constructor() {
        this.albumsEndpoint = 'data/albums.json';
        this.itunesEndpoint = 'https://itunes.apple.com/search'
    }
    fetch() {
        return window.fetch(this.albumsEndpoint)
            .then(response => response.json())
            .then(data => data.results)
            .catch(ex => ex);
    }
    getRandom() {
        return this.fetch().then(data => randomArrayItem(data))
    }
    fetchItunesDetails(album) {
        const url = `${this.itunesEndpoint}?entity=album&term=${window.encodeURIComponent(album.title)}`;
        return new Promise((resolve, reject) => {
            jsonp(url, (err, data) => err ? reject(err) : resolve(data))
        }).then(data => matchAlbumArtist(data.results, album.artist))
    }
}

export default new Albums();
