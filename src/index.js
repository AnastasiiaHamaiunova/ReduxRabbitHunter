import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import positionReducer from './reducers/reducers'
import Rabbit from './components/Rabbit'
import Hunter from './components/Hunter'
import Layout from './components/Layout'

const store = createStore(positionReducer, {x: 0, y: 0});

ReactDOM.render(
    <Provider store={store}>
        <Layout>
            <Rabbit/>
            <Hunter/>
        </Layout>
    </Provider>,
    document.getElementById("div1")
);
