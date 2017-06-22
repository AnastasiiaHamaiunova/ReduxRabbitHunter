import React from 'react';
import {connect} from 'react-redux';

class Hunter extends React.Component {
    constructor(props, context){
        super(props, context);
    }
    
    render(){
        return(
            <div>
                <img src={this.props.img}/><br/>
                <span>{this.props.name} must be on:</span><br/>
                
                {this.props.x};{this.props.y}
                <span>{this.props.gender}:</span>                

                
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