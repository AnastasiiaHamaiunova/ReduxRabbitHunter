import React from 'react';
import {Link} from 'react-router-dom';

export default class Form extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="formHunter">
                    <h3>Add Hunter</h3>
                    <input
                        type='text'
                        onChange={this.props.onNameChange}
                        className=""
                        placeholder="Name"
                        id="nameHunter"
                    />
                    <input
                        type='number'
                        className=""
                        placeholder="Age"
                        min="18" max="65"
                        onChange={this.props.onAgeChange}
                    />
            
                    <input type="radio" 
                            name="gender" 
                            value="male" 
                            data-icon=''
                            onChange={this.props.onGenderChange}
                            className=""/>
                    <input 
                            type="radio" 
                            name="gender" 
                            value="female"
                            data-icon='' 
                            onChange={this.props.onGenderChange}
                            className=""/>
                    <input  
                            onChange={this.props.onImgLinkChange}
                            className="form-control"
                            placeholder="url"
                            type="text"/>
                    <button onClick={this.props.onHunterAdd} 
                            className=""
                            >Add</button>
                </div>
                <div className="hunters-list">
                    <h3>Hunters</h3>
                    <ul>
                        {this.props.hunters.map((item, index) =>{
                            return (
                                <li key={index}>
                                    <Link to={`/hunter/${index+1}`}>{item.name}</Link> 
                                </li>
                            )})}
                    </ul>
                </div> 
            </div>
        )
    }
}