import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App';
import LoaderApp from './reducers';
import { selectItem } from './actions';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
    LoaderApp,
    applyMiddleware(thunkMiddleware)
)

// Initialize the Redux store here, since this should be 
// decoupled from actual components.
store.dispatch(selectItem('one'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
