import React from 'react/addons';

const AlbumDetail = React.createClass({
    artworkTmpl() {
        return ( this.props.itunes ) ? (() => {
            return <img src={this.props.itunes.artworkUrl100} alt={this.props.album.title} />
        })() : false;
    },
    itunesLinkClasses() {
        var cx = React.addons.classSet;
        return cx({
            'album__link': true,
            'is-disabled': !this.props.itunes,
        });
    },
    itunesLink() {
        return (this.props.itunes) ? this.props.itunes.collectionViewUrl : '#';
    },
    rdioLink(albumTitle) {
        return `http://www.rdio.com/search/${window.encodeURIComponent(albumTitle)}/albums/`
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
                         <li><a href={this.itunesLink()} className={this.itunesLinkClasses()}>iTunes</a></li>
                        <li><a href={this.rdioLink(this.props.album.title)} className="album__link">Rdio</a></li>
                    </ul>
                </div>
            </div>
        )
    }
})

export default AlbumDetail
