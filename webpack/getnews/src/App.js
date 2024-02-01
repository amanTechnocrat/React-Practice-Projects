import './App.css';

import React, { Component } from 'react';
// import Navbar from './components/Navbar';
// import News from './components/News';
// import Cst from './components/Cst';
import { Routes, Route } from "react-router-dom";
import Loadable  from 'react-loadable';


class Loaderror extends Component {
  render() {
    return (
      <div>Loading..</div>
    )
  }
}


class App extends Component {
  constructor(){
    super();
    this.state={
      datasearch : ""
    }
  }
  datafromsearch = (data)=>{
    this.setState({datasearch: data})
  }

  Navbar = Loadable({
    loader:()=>import(/* webpackChunkName:'Navbar'*/'./components/Navbar'),
    loading:Loaderror
  })
  News = Loadable({
    loader:()=>import(/* webpackChunkName:'News'*/'./components/News'),
    loading:Loaderror
  })
  
  render() {
    return (
      <>
        <this.Navbar nd={{ datafromsearch : this.datafromsearch.bind(this)}}/>
        <Routes>
        <Route exact path="/" element={<this.News datasearch={this.state.datasearch}/>}/>
        <Route exact path="/science" element={<this.News key="science" category={"science"} datasearch={this.state.datasearch}/>}/>
        <Route exact path="/sports" element={<this.News key="sports" category={"sports"} datasearch={this.state.datasearch}/>}/>
        <Route exact path="/entertainment" element={<this.News key="entertainment" category={"entertainment"} datasearch={this.state.datasearch}/>}/>
        <Route exact path="/technology" element={<this.News key="technology" category={"technology"} datasearch={this.state.datasearch}/>}/>
        <Route exact path="/health" element={<this.News key="health" category={"health"} datasearch={this.state.datasearch}/>}/>
        <Route exact path="/business" element={<this.News key="business" category={"business"} datasearch={this.state.datasearch}/>}/>
        </Routes>
      </>
    );
  }
}

export default App;

