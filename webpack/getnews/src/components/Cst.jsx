import React, { Component } from 'react';


class Cst extends Component {

    constructor(){
        super();
        this.changect = this.changect.bind(this);
        this.state={
            country:'in'
        }
    }

    changect(event){
        let rr = event.target.value
        this.setState({country: rr})
        console.log(this.state.country);
    }



    render() {
        
        return (
            <>
               <select onChange={this.changect}>
                    <option value="in">india</option>
                    <option value="us">us</option>
                    {/* <option value="3">NZ</option>
                    <option value="4"></option>
                    <option value="5">5</option> */}
                </select>
            </>
        );
    }
}



export default Cst;
