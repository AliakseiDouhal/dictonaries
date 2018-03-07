import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppView from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers/index';

const creatStoreWithMiddleware = applyMiddleware(ReduxThunk,logger)(createStore);

ReactDOM.render(
    <Provider store={creatStoreWithMiddleware(rootReducer)}>
        <AppView />
    </Provider>,
    document.getElementById('root')
);


