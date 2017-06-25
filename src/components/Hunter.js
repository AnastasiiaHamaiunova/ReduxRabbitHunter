import React from 'react';
import {connect} from 'react-redux';

class Hunter extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = this.props.hunters[this.props.match.params.id-1];
    }
    
    render(){
        return(
            <div className="profile">
                <h3>{this.state.name}</h3>
                <div className="profile-img"style={{backgroundImage: `url(${this.state.img})`}}>
                </div>
                <div className="profile-info">
                    <div><span>Name</span>{this.state.name}</div>
                    <div><span>Gender</span>{this.state.gender}</div>
                    <div><span>Age</span> {this.state.age}</div>
                    <div><span>X</span>{this.props.x}<span>Y</span>{this.props.y}</div>
                </div> 
                <div className="shoot">
                    <h3>Shoot!</h3>
                    <div className="grid">
                        <div className="aim" style={{transform: `translate(${this.props.x}px, ${this.props.y}px)`}}></div>
                    </div>  
                </div>         
            </div>
        )
    }
}

const mapStateToProps= state => {
    return{
        x: state.positionState.x,
        y: state.positionState.y,
        hunters:state.huntersState,
    }

}

export default connect(mapStateToProps)(Hunter);