import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// import Cst from './components/Cst';
import { Routes, Route } from "react-router-dom";


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
  
  render() {
    return (
      <>
        <Navbar nd={{ datafromsearch : this.datafromsearch.bind(this)}}/>
        <Routes>
        <Route exact path="/" element={<News datasearch={this.state.datasearch}/>}/>
        <Route exact path="/science" element={<News key="science" category={"science"} datasearch={this.state.datasearch}/>}/>
        <Route exact path="/sports" element={<News key="sports" category={"sports"} datasearch={this.state.datasearch}/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" category={"entertainment"} datasearch={this.state.datasearch}/>}/>
        <Route exact path="/technology" element={<News key="technology" category={"technology"} datasearch={this.state.datasearch}/>}/>
        <Route exact path="/health" element={<News key="health" category={"health"} datasearch={this.state.datasearch}/>}/>
        <Route exact path="/business" element={<News key="business" category={"business"} datasearch={this.state.datasearch}/>}/>
        </Routes>
      </>
    );
  }
}

export default App;

