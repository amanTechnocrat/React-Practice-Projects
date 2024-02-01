import React, { Component } from 'react';
import './App.css';
import Child1 from './components/child1';
import Child2 from './components/child2';
import Mm from './components/Mm';
import Nn from './components/Nn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '56',
      unit: 'kg',
      value:'0'
    }
  }
 
  changeunit = (childsdata,vla) => {
    this.setState({ unit: childsdata })
    this.setState({value:vla})
  }
  // componentDidMount(){
  //   if(this.changeunit()){
  //     this.setState({value: 5})
  //   }
  // }


  render() {
    return (
      <>
        {/* <div> */}
        {/* <h1>{this.state.unit}</h1>
          <Child1 data={this.state.data}
            nd={{
              unit: this.state.unit,
              changeunit: this.changeunit.bind(this)
            }} />
        </div>
        <Child2 new = {{value : this.state.value}}/> */}





        
        <Nn/>
        
        <Mm/>
        
      </>
    );
  }
}

export default App;




