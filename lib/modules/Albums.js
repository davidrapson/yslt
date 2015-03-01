import fetch from 'whatwg-fetch'; // window.fetch polyfill
import jsonp from 'jsonp';

const randomArrayItem = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

const contains = (haystack, needle) => {
    return haystack.indexOf(needle) != -1;
}

class Albums {
    constructor() {
        this.albumsUrl = '/data/albums.json';
        this.itunesUrl = 'https://itunes.apple.com/search'
        this.ns = 'product_item';
    }
    extractField(album, field) {
        return album.div.find(data => data['class'] === `${this.ns} ${field}`)
    }
    getAlbumDetails(album) {
        return {
            title: this.extractField(album, 'product_title').a.content,
            artist: this.extractField(album, 'product_artist').a.content,
            rating: this.extractField(album, 'product_score').div.p
        }
    }
    getItunesDetails(album) {
        const url = `${this.itunesUrl}?entity=album&term=${window.encodeURIComponent(album.title)}`;
        return new Promise((resolve, reject) => {
            jsonp(url, (err, data) => {
                err ? reject(err) : resolve(data)
            })
        }).then(data => data.results.find(item => contains(item.artistName, album.artist)))
    }
    load() {
        return window.fetch(this.albumsUrl)
            .then(response => response.json())
            .then(data => data.query.results.results.div)
            .then(data => randomArrayItem(data))
            .then(album => this.getAlbumDetails(album))
            .catch(ex => ex);
    }
}

export default new Albums();