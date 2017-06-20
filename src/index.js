import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {positionReducer, huntersReducer} from './reducers/reducers'
import Rabbit from './components/Rabbit'
import Hunter from './components/Hunter'
import Layout from './components/Layout'
import FormHunters from './components/FormHunters'

let reducers = combineReducers({
    positionState: positionReducer,
    huntersState: huntersReducer
})
const store = createStore(reducers);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Layout>
            <Rabbit/>
            <FormHunters/>
        </Layout>
    </Provider>,
    document.getElementById("div1")
);
