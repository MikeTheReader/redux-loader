import React, { Component } from 'react';
import './App.css';
import ReactStateDataLoader from './containers/ReactStateDataLoader';
import ReduxConnectedDataLoader from './containers/ReduxConnectedDataLoader';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <div className="loader">
                        <h2>React State Data Loader</h2>
                        <p>Uses ReactStateDataLoader.js</p>
                        <ReactStateDataLoader />
                    </div>
                    <div className="loader">
                        <h2>Redux Data Loader</h2>
                        <p>Uses ReduxConnectedDataLoader.js</p>
                        <ReduxConnectedDataLoader />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
