import React from 'react';
import {connect} from 'react-redux';

class Hunter extends React.Component {
    constructor(props, context){
        super(props, context);
    }
    
    render(){
        return(
            <div>
                <span>{this.props.name}:</span>
                {this.props.x};{this.props.y}
            </div>
        )
    }
}

const mapStateToProps= state => {
    return{
        x: state.positionState.x,
        y: state.positionState.y
    }
}

export default connect(mapStateToProps)(Hunter);