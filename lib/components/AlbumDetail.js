import React, {Component, PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';

class AlbumDetail extends Component {
    render() {
        let album = this.props.album;
        const artworkTmpl = function () {
            return (album.artwork) ? (function () {
                return <img src={album.artwork} alt={album.title} />;
            })() : false;
        };
        const itunesLink = () => (album.itunesUrl) ? album.itunesUrl : '#';
        const albumClasses = classnames({
            'album': true,
            'is-loading': this.props.loading
        });
        const itunesLinkClasses = classnames({
            'album__link': true,
            'is-disabled': !album.itunesUrl
        });
        return (
            <div className={albumClasses}>
                <div className="album__media">
                    {artworkTmpl()}
                </div>
                <div className="album__body">
                    <div className="album__details">
                        <h2 className="album__title">{album.title}</h2>
                        <span className="album__rating" title="Metascore">{album.score}</span>
                    </div>
                    <div className="album__meta">
                        <span className="album__artist">{album.artist}</span>
                    </div>
                    <ul className="album__links list-unstyled">
                        <li><a href={itunesLink()} className={itunesLinkClasses}>iTunes</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

AlbumDetail.propTypes = {
    album: PropTypes.object,
    isLoading: PropTypes.bool
};

export default AlbumDetail;
