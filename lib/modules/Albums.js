import fetch from 'whatwg-fetch'; // window.fetch polyfill
import jsonp from 'jsonp';

const random = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

const contains = (haystack, needle) => {
    return haystack.indexOf(needle) != -1;
}

class Albums {
    constructor() {
        this.albumsEndpoint = 'data/albums.json';
        this.itunesEndpoint = 'https://itunes.apple.com/search'
    }
    /**
     * YQL madness:
     * Extract indidual fields from YQL response
     */
    extractField(album, field) {
        const YQL_NAMESPACE = 'product_item';
        return album.div.find(data => data['class'] === `${YQL_NAMESPACE} ${field}`)
    }
    /**
     * Extract required fields from YQL data,
     * sanitise and return a useful object
     */
    extractAlbumDetails(album) {
        return {
            title: this.extractField(album, 'product_title').a.content,
            artist: this.extractField(album, 'product_artist').a.content,
            rating: this.extractField(album, 'product_score').div.p
        }
    }
    /**
     * Match albums by album artists,
     * helper for #getItunesDetails
     */
    matchAlbumArtist(albums, artistName) {
        return albums.find(item => contains(item.artistName, artistName))
    }
    /**
     * Request extra album (artwork, iTunes link) from iTunes API,
     * match results based on the current album artist
     */
    getItunesDetails(album) {
        const url = `${this.itunesEndpoint}?entity=album&term=${window.encodeURIComponent(album.title)}`;
        return new Promise((resolve, reject) => {
            jsonp(url, (err, data) => err ? reject(err) : resolve(data))
        }).then(data => this.matchAlbumArtist(data.results, album.artist))
    }
    /**
     * Load album data,
     * Data scaped from Metacritic using YQL,
     * so is nasty JSON represantation of HTML
     */
    load() {
        return window.fetch(this.albumsEndpoint)
            .then(response => response.json())
            // YQL madness: get results array from JSON/HTML
            .then(data => data.query.results.results.div)
            // Get a random item from the results
            .then(data => random(data))
            // Convert YQL madness into a useful object
            .then(album => this.extractAlbumDetails(album))
            .catch(ex => ex);
    }
}

export default new Albums();