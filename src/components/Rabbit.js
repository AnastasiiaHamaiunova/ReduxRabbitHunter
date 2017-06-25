import React from 'react';
import {connect} from 'react-redux';
import * as positionActions from '../actions/actionsCreator';
import RabbitView from '../views/RabbitView';

class Rabbit extends React.Component {
    constructor(props,context){
        super(props, context);
    }

    componentDidMount(){
        setInterval(()=>{
            let x = Math.floor((Math.random() * 500) + 1);
            let y = Math.floor((Math.random() * 500) + 1);

            this.props.dispatch(positionActions.changePosition(x, y));
        }, 2000);
    }

    render() {
        return(
            <RabbitView x={this.props.x}
                        y={this.props.y}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        x: state.positionState.x,
        y: state.positionState.y
    }
}

export default connect(mapStateToProps)(Rabbit);
