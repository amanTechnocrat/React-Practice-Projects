import React, { Component } from 'react';

class Child2 extends Component {

    // constructor(props){
    //     super(props);
    //     this.state={
    //         name:this.props.nwd
    //     }
        
    // }
    render() {
        return (
            <div>
                <h1>data from child via parent: {this.props.new.value}</h1>
            </div>
        );
    }
}

export default Child2;
