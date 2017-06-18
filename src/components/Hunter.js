import React from 'react';
import {connect} from 'react-redux';

class Hunter extends React.Component {
    constructor(props, context){
        super(props, context);
    }
    
    render(){
        return(
            <div className="hunter">
                <span>Hunter:</span>
                {this.props.x};{this.props.y}
            </div>
        )
    }
}

const mapStateToProps= state => {
    return{
        x: state.x,
        y: state.y
    }
}

export default connect(mapStateToProps)(Hunter);