import React from 'react';
import {connect} from 'react-redux';
import {addHunter} from '../actions/actionsCreator';
import Form from '../views/HuntersFormView';

class HuntersForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nameValid: false,
            ageValid: false,
            urlValid: false,
            formValid: false,
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
        this.validateField =this.validateField.bind(this);
    }

    validateField(fieldName, value){
        let urlValid = this.state.urlValid;
        let ageValid = this.state.ageValid;
        let nameValid = this.state.nameValid;

        switch(fieldName){
            case 'name':
                nameValid = value.toString().trim().length > 0;
                break;
            case 'age':
                ageValid = value >= 18 && value <= 65;
                break;
            case 'url':
                urlValid = value.toString().match(/^((http[s]?):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/);
                break;
            default:
                break;
        }

        let formValid = urlValid && ageValid && nameValid;
        
        setTimeout(() => 
            this.setState(
                Object.assign(
                    {}, 
                    this.state, 
                    {urlValid, ageValid, nameValid, formValid}
                )
            ), 0);
    }
    
    onNameChange(e){
        let name = e.target.value;
        this.setState(Object.assign({},this.state,{name}));
        this.validateField("name", name);
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
        this.validateField("url", img);
    }

    onGenderChange(e){ 
        let gender = e.target.value;
        this.setState(Object.assign({},this.state, {gender}));
    }

    onAgeChange(e){
        let age = e.target.value;
        this.setState(Object.assign({},this.state, {age}));
        this.validateField("age", age);
    }

    render() {
        return (
           <Form onNameChange={this.onNameChange}
                onAgeChange={this.onAgeChange}
                onGenderChange={this.onGenderChange}
                onImgLinkChange={this.onImgLinkChange}
                onHunterAdd={this.onHunterAdd}
                hunters={this.props.hunters}
                valid={this.state.formValid}/>
        )
    }    
}

const mapStateToProps = state =>{
    return {
        hunters: state.huntersState
    };
}

export default connect(mapStateToProps)(HuntersForm);