import React from 'react';
import './App.scss';

import Header from "./components/header/header.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Spinner from "./components/spinner/spinner.component";
import Unsplash, {toJson} from 'unsplash-js';
import PhotoDirectory from "./components/photo-directory/photo-directory.component";

const unsplash = new Unsplash(
    {
        accessKey: "b61453a0f6938c616e0ca5bd5a0ae0f9ab352ae89cde94c33564520866614c6c",
        secret:"bf23f97050886e0a7e47c04f1dfdcd4ddf68b45ffee1957a90d395d2086889ce"
    });

class App extends React.Component {
    constructor() {
        super();
        this.state={
            Photos:[],
            prevPhotos:[],
            searchField: '',
            loaded:false,
        }
    }
    componentDidMount() {
        unsplash.photos.listPhotos(Math.ceil(Math.random()*10), 28)
            .then(toJson)
            .then(json => {
                this.setState({
                    loaded:true,
                    photos:json,
                    prevPhotos:json
                })
            });
    }

    onSearchChange = event => {
        this.setState({ searchField: event.target.value,
                loaded:false
        });
        unsplash.search.photos(this.state.searchField, 1, 28, { orientation: "portrait" })
            .then(toJson)
            .then(json => {
                this.setState({
                    photos:json.results,
                    loaded:true
                })
            });
        if (this.state.searchField==='')
            this.setState({
                photos:this.state.prevPhotos,
            })
    };

    render() {
        const isLoaded=this.state.loaded;
        return (
            <div>
                <ErrorBoundary>
                    <Header onSearchChange={this.onSearchChange}/>
                    {
                        isLoaded?
                    <PhotoDirectory photos={this.state.photos}/>
                    :
                    <Spinner/>
                    }
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;
