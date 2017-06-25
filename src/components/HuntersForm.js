import React from 'react';
import {connect} from 'react-redux';
import {addHunter} from '../actions/actionsCreator';
import Form from '../views/HuntersFormView';

class HuntersForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            img: '',
            gender: '',
            age: ''
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onHunterAdd = this.onHunterAdd.bind(this);
        this.onImgLinkChange = this.onImgLinkChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
    }
    
    onNameChange(e){
        let name = e.target.value;
        this.setState(Object.assign({},this.state,{name}));
    }

    onHunterAdd(e){
        this.props.dispatch(addHunter({
            name: this.state.name,
            img: this.state.img,
            gender: this.state.gender,
            age: this.state.age
        }));
    }

    onImgLinkChange(e){
        let img = e.target.value;
        this.setState(Object.assign({},this.state, {img}));
    }

    onGenderChange(e){ 
        let gender = e.target.value;
        this.setState(Object.assign({},this.state, {gender}));
    }

    onAgeChange(e){
        let age = e.target.value;
        this.setState(Object.assign({},this.state, {age}));
    }

    render() {
        return (
           <Form onNameChange={this.onNameChange}
                onAgeChange={this.onAgeChange}
                onGenderChange={this.onGenderChange}
                onImgLinkChange={this.onImgLinkChange}
                onHunterAdd={this.onHunterAdd}
                hunters={this.props.hunters}/>
        )
    }    
}

const mapStateToProps = state =>{
    return {
        hunters: state.huntersState
    };
}

export default connect(mapStateToProps)(HuntersForm);