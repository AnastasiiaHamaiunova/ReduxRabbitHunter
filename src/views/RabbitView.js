import React from 'react';
import {Link} from 'react-router-dom';

export default class RabbitView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className='rabbit'>
                    <div style={{transform: `translate(${this.props.x}px, ${this.props.y}px)`}}>
                    </div>                    
                </div>
                <div className='rabbit-position profile-info'>
                        <div><span>X</span>{this.props.x}<span>Y</span>{this.props.y}</div>
                </div>
            </div>
        )
    }
}