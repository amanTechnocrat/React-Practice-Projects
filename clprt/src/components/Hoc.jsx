import React, { Component } from 'react';


const getdata = (Rt,type) => {
    // console.log({...Rt});

    class Hoc extends Component {

        constructor(){
            super();
            this.state={
                apidata: []
            }
        }
        
        update = async () => {
            let data = await fetch(`https://jsonplaceholder.typicode.com/${type}`)
            let adata = await data.json();
            this.setState({ apidata: adata })
        }
        componentDidMount(){
            this.update()
        }
        render() {
            return (<>
                
                <Rt hocsub={this.state.apidata}/>
                
                </>);
        }
    }
    return Hoc;
}

export default getdata;

