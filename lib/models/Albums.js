/* eslint-disable no-unused-vars */
// window.fetch polyfill
import fetch from 'whatwg-fetch';
/* eslint-enable no-unused-vars */

import jsonp from 'jsonp';
import random from 'utils/random';

const matchAlbumArtist = (albums, artistName) => {
    return albums.find(item => item.artistName.indexOf(artistName) !== -1)
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
        return this.fetch().then(data => random(data))
    }
    fetchItunesDetails(album) {
        const url = `${this.itunesEndpoint}?entity=album&term=${window.encodeURIComponent(album.title)}`;
        return new Promise((resolve, reject) => {
            jsonp(url, (err, data) => err ? reject(err) : resolve(data))
        }).then(data => matchAlbumArtist(data.results, album.artist))
    }
}

export default new Albums();
