import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import albumService from 'services/albums';
import AlbumDetailComponent from 'components/AlbumDetail';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            album: {}
        };
        this.getAlbumData = () =>
            albumService.getRandom().then(data => {
                this.setState({
                    loading: false,
                    album: data
                });
            });
        this.reload = () => {
            this.setState({loading: true});
            this.getAlbumData();
        };
    }
    componentWillMount() {
        this.getAlbumData();
    }
    render() {
        return (
            <section className="yslt">
                <header className="header" role="banner">
                    <h1 className="logo">You should listen to</h1>
                </header>
                <AlbumDetailComponent
                    album={this.state.album}
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
        );
    }
}

export default App;
