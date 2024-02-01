import React, { Component } from 'react';
import getdata from './Hoc';
class Mm extends Component {
    render() {
        return (
            <div className='sep'>
            {this.props.hocsub.slice(0,9).map((val)=>{
                return(
                <><h4>{val.title}</h4></>
            )})}

        </div>
        );
    }
}

export default getdata(Mm,"todos");
