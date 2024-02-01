import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Symbol from './Symbol';

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            searchData: ""
        }
    }
    let = (e) => {
        this.setState({ value: e.target.value })

    }
    getdata = async () => {
        await this.setState({ searchData: this.state.value })
        this.props.nd.datafromsearch(this.state.searchData)
    }
    render() {
        return (<div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <span className="navbar-brand"><Symbol/></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" onClick={()=>{ this.props.nd.datafromsearch("")
                            this.setState({ value: "" })}}><Link className="nav-link active" to="/">Home</Link></li>
                            <li className="nav-item"  onClick={()=>{ this.props.nd.datafromsearch("")
                            this.setState({ value: "" })}}><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"  onClick={()=>{ this.props.nd.datafromsearch("")
                            this.setState({ value: "" })}}><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"  onClick={()=>{ this.props.nd.datafromsearch("")
                            this.setState({ value: "" })}}> <Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item"  onClick={()=>{ this.props.nd.datafromsearch("")
                            this.setState({ value: "" })}}> <Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"  onClick={()=>{ this.props.nd.datafromsearch("")
                            this.setState({ value: "" })}}> <Link className="nav-link" to="/business">Businesss</Link></li>
                            <li className="nav-item"  onClick={()=>{ this.props.nd.datafromsearch("")
                            this.setState({ value: "" })}}> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <input className="form-control me-2" type="text" value={this.state.value} placeholder="Search" onChange={this.let} aria-label="Search" />
                        <button className="btn btn-outline-success bg-warning" onClick={this.getdata}>Search</button>
                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

export default Navbar;
