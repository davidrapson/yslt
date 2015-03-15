import React from 'react';
import classnames from 'classnames';

const AlbumDetail = React.createClass({
    render() {
        const artworkTmpl = () => {
            return ( this.props.itunes ) ? (() => {
                return <img src={this.props.itunes.artworkUrl100} alt={this.props.album.title} />
            })() : false;
        };
        const itunesLink = () => {
            return (this.props.itunes) ? this.props.itunes.collectionViewUrl : '#';
        };
        const rdioLink = () => {
            let albumTitle = this.props.album.title;
            return `http://www.rdio.com/search/${window.encodeURIComponent(albumTitle)}`
        };
        const itunesLinkClasses = () => {
            return classnames({
                'album__link': true,
                'is-disabled': !this.props.itunes,
            });
        };
        return (
            <div className="album">
                <div className="album__media">
                    {artworkTmpl()}
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
                         <li><a href={itunesLink()} className={itunesLinkClasses()}>iTunes</a></li>
                        <li><a href={rdioLink()} className="album__link">Rdio</a></li>
                    </ul>
                </div>
            </div>
        )
    }
})

export default AlbumDetail
