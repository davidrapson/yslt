import React from 'react';

const AlbumDetail = React.createClass({
    artworkTmpl() {
        return ( this.props.itunes ) ? (() => {
            return <img src={this.props.itunes.artworkUrl100} alt={this.props.album.title} />
        })() : false;
    },
    itunesLinkTmpl() {
        return ( this.props.itunes ) ? (() => {
            return <li><a href={this.props.itunes.collectionViewUrl} className="album__link">iTunes</a></li>
        })() : false;
    },
    rdioLinkTmpl(albumTitle) {
        var url = `http://www.rdio.com/search/${window.encodeURIComponent(albumTitle)}/albums/`
        return <li><a href={url} className="album__link">Rdio</a></li>
    },
    render() {
        return (
            <div className="album">
                <div className="album__media">
                    {this.artworkTmpl()}
                </div>
                <div className="album__body">
                    <div className="album__details">
                        <h2 className="album__title">{this.props.album.title}</h2>
                        <span className="album__rating" title="Metascore">{this.props.album.score}</span>
                    </div>
                    <div className="album__meta">
                        <span className="album__artist">{this.props.album.artist}</span>
                    </div>
                    <ul className="album__links list-unstyled">
                        {this.itunesLinkTmpl()}
                        {this.rdioLinkTmpl(this.props.album.title)}
                    </ul>
                </div>
            </div>
        )
    }
})

export default AlbumDetail
