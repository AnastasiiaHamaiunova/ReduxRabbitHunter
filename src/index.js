import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {positionReducer, huntersReducer} from './reducers/reducers'
import Rabbit from './components/Rabbit'
import Hunter from './components/Hunter'
import HuntersForm from './components/HuntersForm'
import { Route, BrowserRouter as Router, Link} from 'react-router-dom'
import {Home} from './views/Home'

require('./styles/styles.scss');

let reducers = combineReducers({
    positionState: positionReducer,
    huntersState: huntersReducer
})

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router> 
            <div>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rabbit">Rabbit</Link></li>
                    <li><Link to="/hunters">Hunters</Link></li>
                </ul>
                
                    <Route exact path='/' component={Home}/>     
                    <Route path='/rabbit' component={Rabbit}/>
                    <Route path='/hunters' component={HuntersForm}/>
                    <Route path='/hunter/:id' component={Hunter}/>
                
            </div>
        </Router>
    </Provider>,
    document.getElementById("main")
);
