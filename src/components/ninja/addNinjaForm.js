import React, {Component} from 'react'
import "./Ninjas.css"

class AddNinja extends Component{
    
    state = {
        name: null,
        age:null,
        belt:null
    }
    
    
    
    handleChange = (e) =>{
        
        this.setState({
            
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        debugger
        this.props.addNinja(this.state);               
        console.log(this.state);
    } 
    componentDidMount(){
        console.log("Add Ninja component did mount");
    }
    componentDidUpdate(prevPop,prepState){
        console.log("Add Ninja component udpated");
        console.log(prevPop,prepState);
    }
    render(){
        
        return(
            <div className="addNinja container">
                <h4 className="blue-text">Ninja Add Form</h4>
                <form className="addNinjaForm" onSubmit={this.handleSubmit}>
                    <div className="name-field field-container">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className="age-field field-container">
                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age" onChange={this.handleChange} />
                    </div>
                    <div className="belt-field field-container">
                        <label htmlFor="belt">Belt:</label>
                        <input type="text" id="belt" onChange={this.handleChange} />
                    </div>
                    <div>
                       <button>submit</button>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default AddNinja