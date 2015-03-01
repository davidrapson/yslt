import React from 'react';
import Albums from 'modules/Albums';

const RecommendedAlbum = React.createClass({
    getInitialState() {
        return {
            itunes: false,
            album: false
        }
    },
    getAlbumData() {
        return Albums.load()
            .then(data => {
                if (this.isMounted()) {
                    this.getItunesData(data);
                    this.setState({ album: data });
                }
            });
    },
    getItunesData(album) {
        return Albums.getItunesDetails(album)
            .then(data => {
                if (this.isMounted()) {
                    this.setState({ itunes: data });
                }
            })
    },
    componentWillMount() {
        this.getAlbumData();
    },
    artworkTmpl() {
        var tmpl = false;
        if(this.state.itunes) {
            tmpl = <img src={this.state.itunes.artworkUrl100} alt={this.state.album.title} />
        }
        return tmpl
    },
    itunesLinkTmpl() {
        var tmpl = false;
        if(this.state.itunes) {
            tmpl = <li><a href={this.state.itunes.collectionViewUrl} className="album__link">Itunes</a></li>
        }
        return tmpl
    },
    rdioUrl(albumTitle) {
        return `http://www.rdio.com/search/${window.encodeURIComponent(albumTitle)}/albums/`
    },
    reload() {
        this.setState({ itunes: false });
        this.getAlbumData();
    },
    render() {
        return (
            <div className="album-container">
                <h1 className="header">You should listen to</h1>
                <div className="album">
                    <div className="album__media">
                        {this.artworkTmpl()}
                    </div>
                    <div className="album__body">
                        <div className="album__details">
                            <h2 className="album__title">{this.state.album.title}</h2>
                            <span className="album__rating" title="Metascore">{this.state.album.rating}</span>
                        </div>
                        <div className="album__meta">
                            <span className="album__artist">{this.state.album.artist}</span>
                        </div>
                        <div className="album__links list-unstyled">
                            {this.itunesLinkTmpl()}
                            <li><a href={this.rdioUrl(this.state.album.title)} className="album__link">Rdio</a></li>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={this.reload}>Try another</button>
                    <div className="footer__credits">
                        <p><strong>Source:</strong> Top rated Metacritic albums this year.</p>
                        <p>A thing by <a href={"http://davidrapson.co.uk"}>David Rapson</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
})

export default RecommendedAlbum
