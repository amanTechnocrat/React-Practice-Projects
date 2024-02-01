import React, { Component } from 'react';


class Child1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            name:'zxc'
        }
    }



    render() {
        return (
            <>
                <div>
                    <h2>Date from parent: {this.state.data}</h2>
                    <h1>{this.props.nd.unit}</h1>
                    <button onClick={()=>
                        this.props.nd.changeunit("gear",this.state.name)
                    } >click me</button>
                </div>
            </>
        )
    }
}

export default Child1;
