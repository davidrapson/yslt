import React from 'react';
import Albums from 'services/Albums';
import AlbumDetailComponent from 'components/AlbumDetail';

const App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            itunes: false,
            album: false
        }
    },
    getAlbumData() {
        let album;
        return Albums.getRandom().then(data => {
            album = data;
            return Albums.fetchItunesDetails(album)
        }).then(itunes => {
            if (this.isMounted()) {
                this.setState({
                    loading: false,
                    itunes: itunes,
                    album: album
                });
            }
        });
    },
    componentWillMount() {
        this.getAlbumData();
    },
    reload() {
        this.setState({ loading: true });
        this.getAlbumData();
    },
    render() {
        return (
            <section className="yslt">
                <header className="header" role="banner">
                    <h1 className="logo">You should listen to</h1>
                </header>
                <AlbumDetailComponent
                    album={this.state.album}
                    itunes={this.state.itunes}
                    loading={this.state.loading}
                />
                <footer className="footer">
                    <button type="button"
                        className="btn"
                        disabled={this.state.loading ? 'disabled' : false}
                        onClick={this.reload}
                    >Try another</button>
                    <div className="footer__credits">
                        <p>Top rated Metacritic albums this year</p>
                        <p>A thing from <a href={"https://twitter.com/davidrapson"}>David Rapson</a></p>
                        <p><a href={"https://github.com/davidrapson/yslt"}>Source</a></p>
                    </div>
                </footer>
            </section>
        )
    }
})

export default App
