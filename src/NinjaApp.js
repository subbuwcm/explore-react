import React,{ Component } from 'react';
import RenderNinjas from './components/ninja/renderNinjas.js'
import AddNinjaForm from './components/ninja/addNinjaForm.js'

class NinajaApp extends Component{
    state = {
        ninjas:[

            {name:'subbu',age:'29',belt:'black',id:1},
            {name:'RK',age:'34',belt:'black',id:2},
            {name:'Eswer',age:'31',belt:'brown',id:3}
        ]
    };

    addNinja = ( ninja) =>{
        ninja.id= Math.random();
        let ninajs = [...this.state.ninjas,ninja];
        this.setState({
            ninjas: ninajs
        });
    }
    deleteNinja = (id) =>{
        console.log("delete Ninja from App.js"+id);
        let ninjas = this.state.ninjas.filter(nijna =>{
            return nijna.id !== id
        });
        
        this.setState({
            ninjas : ninjas
        })
    }
    componentDidMount(){
        console.log("component did mount");
    }
    componentDidUpdate(prevPop,prepState){
        console.log("component udpated");
        console.log(prevPop,prepState);
    }
    render(){
      return (
        <div className="ninja-app container">
          <h1 className="center blue-text">Ninjas</h1>
          <div className="mdc-layout-grid">
              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell"><AddNinjaForm addNinja={this.addNinja} /></div>
                <div className="mdc-layout-grid__cell"><RenderNinjas ninjas={this.state.ninjas}  deleteNinaj={this.deleteNinja}/></div>
              </div>
            </div>          
        </div>
      );   
    }
}   

export default NinajaApp;
