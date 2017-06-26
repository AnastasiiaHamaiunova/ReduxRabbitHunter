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
            this.props.dispatch(positionActions.changePosition());
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
