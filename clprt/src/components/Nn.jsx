import React, { Component } from 'react';
import HOC from './Hoc';

class Nn extends Component {
    
    render() {
        return (
            <div>
                {this.props.hocsub.map((val)=>{
                    return(
                    <><h4>{val.name}</h4></>
                )})}

            </div>
        );
    }
}
// const newlist = getdata()
export default HOC(Nn,"users");
