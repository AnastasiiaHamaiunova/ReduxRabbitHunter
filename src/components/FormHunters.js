import React from 'react';
import {connect} from 'react-redux';
import {addHunter} from '../actions/actionsCreator';
import Hunter from './Hunter'

class FormHunters extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        };

        this.onNameChange =this.onNameChange.bind(this);
        this.onHunterAdd =this.onHunterAdd.bind(this);
    }
    
    onNameChange(e){
        this.setState({name: e.target.value});
    }

    onHunterAdd(e){
        this.props.dispatch(addHunter({
            name: this.state.name,
            hunter: <Hunter name={this.state.name} key={this.props.hunters.length}/>
        }));
    }

    render() {
        return (
            <div className="formHunter">
                <input
                    type='text'
                    onChange={this.onNameChange}
                />
                <button onClick={this.onHunterAdd}>Add</button>
                <div>
                    {this.props.hunters.map(item =>{
                        return item.hunter
                    })}
                </div>

            </div>
        )
    }    
}

const mapStateToProps = state =>{
    return {
        hunters: state.huntersState
    };
}

export default connect(mapStateToProps)(FormHunters);