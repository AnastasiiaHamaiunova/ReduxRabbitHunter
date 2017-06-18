import React from 'react';
import {connect} from 'react-redux';
import * as positionActions from '../actions/actionsCreator';

require('./Rabbit.scss');

class Rabbit extends React.Component {
    constructor(props,context){
        super(props, context);
    }

    componentDidMount(){
        setInterval(()=>{
            let x = Math.floor((Math.random() * 800) + 1);
            let y = Math.floor((Math.random() * 800) + 1);

            this.props.dispatch(positionActions.changePosition(x, y));
        }, 2000);
    }

    render() {
        return(
            <div>
                <div className='rabbit'
                style={{top: this.props.y + 'px', 
                        left: this.props.x + 'px'}}>
                </div>
                <div className='rabbit-position'>
                    <span>Rabbit:</span>
                    {this.props.x};{this.props.y}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        x: state.x,
        y: state.y
    }
}

export default connect(mapStateToProps)(Rabbit);
