import React from 'react';
import {connect} from 'react-redux';
import {addHunter} from '../actions/actionsCreator';
import Hunter from './Hunter'

class FormHunters extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            imgLink: '',
            gender: ''
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onHunterAdd = this.onHunterAdd.bind(this);
        this.onImgLinkChange = this.onImgLinkChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
    }
    
    onNameChange(e){
        let name = e.target.value;
        this.setState(Object.assign({},this.state,{name}));
    }

    onHunterAdd(e){
        this.props.dispatch(addHunter({
            name: this.state.name,
            hunter: <Hunter name={this.state.name} 
                            img={this.state.imgLink}
                            gender={this.state.gender}
                            key={this.props.hunters.length}/>
        }));
    }
    

    onImgLinkChange(e){
        let imgLink = e.target.value;
        this.setState(Object.assign({},this.state, {imgLink}));
    }

    onGenderChange(e){ 
        let gender = e.target.value;
        this.setState(Object.assign({},this.state, {gender}));
    }

    render() {
        return (
            <div className="formHunter">
				<h3>Add Follower</h3>
               
				<label>Your name</label>
                <input
                    type='text'
                    onChange={this.onNameChange}
					className=""
					placeholder="Name"
					id="nameHunter"
                />
         
                <input type="radio" 
						name="gender" 
						value="male" 
						onChange={this.onGenderChange}
						className=""/>Male 
                <input 
						type="radio" 
						name="gender" 
						value="female" 
						onChange={this.onGenderChange}
						className=""/>Female
                <input  
                        onChange={this.onImgLinkChange}
                        className="form-control"
                        placeholder="url"
                        type="text"/>
                <button onClick={this.onHunterAdd} 
						className=""
						>Add</button> 
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