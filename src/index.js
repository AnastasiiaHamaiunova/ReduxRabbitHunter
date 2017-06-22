import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {positionReducer, huntersReducer} from './reducers/reducers'
import Rabbit from './components/Rabbit'
import Hunter from './components/Hunter'
import Layout from './components/Layout'
import FormHunters from './components/FormHunters'
import { Route, BrowserRouter as Router, Link} from 'react-router-dom'
import {Home} from './views/Home'

let reducers = combineReducers({
    positionState: positionReducer,
    huntersState: huntersReducer
})
const store = createStore(reducers);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router> 
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rabbit">Rabbit</Link></li>
                    <li><Link to="/hunters">Hunters</Link></li>
                </ul>
                <Route exact path='/' component={Home}/>     
                <Route path='/rabbit' component={Rabbit}/>
                <Route path='/hunters' component={FormHunters}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById("div1")
);
