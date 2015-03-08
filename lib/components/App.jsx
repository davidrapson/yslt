import React from 'react';
import Albums from 'models/Albums';
import AlbumDetailComponent from 'components/AlbumDetail.jsx!';

const App = React.createClass({
    getInitialState() {
        return {
            itunes: false,
            album: false
        }
    },
    getAlbumData() {
        return Albums.getRandom()
            .then(data => {
                if (this.isMounted()) {
                    this.fetchItunesDetails(data);
                    this.setState({ album: data });
                }
            });
    },
    fetchItunesDetails(album) {
        return Albums.fetchItunesDetails(album).then(data => {
            this.setState({ itunes: data });
        })
    },
    componentWillMount() {
        this.getAlbumData();
    },
    reload() {
        this.setState({ itunes: false });
        this.getAlbumData();
    },
    render() {
        return (
            <section className="yslt">
                <header className="header" role="banner">
                    <h1 className="logo">You should listen to</h1>
                </header>
                <AlbumDetailComponent album={this.state.album} itunes={this.state.itunes} />
                <footer className="footer">
                    <button type="button" className="btn" onClick={this.reload}>Try another</button>
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
