import React from 'react';
import Albums from 'modules/Albums';
import AlbumDetailComponent from 'modules/AlbumDetail.jsx!';

const random = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

const App = React.createClass({
    getInitialState() {
        return {
            itunes: false,
            album: false
        }
    },
    getAlbumData() {
        return Albums.load()
            .then(data => random(data))
            .then(data => {
                if (this.isMounted()) {
                    this.getItunesData(data);
                    this.setState({ album: data });
                }
            });
    },
    getItunesData(album) {
        return Albums.getItunesDetails(album).then(data => {
            if (this.isMounted()) {
                this.setState({ itunes: data });
            }
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
