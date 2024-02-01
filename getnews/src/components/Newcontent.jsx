import React, { Component } from 'react';



class Newcontent extends Component {

    render() {
        let { title, des, imgurl, newsurl, author, date } = this.props
        return (
            <>
                <div >
                    <div className="card my-4">
                        <img src={imgurl === null ? "https://source.unsplash.com/user/c_v_r/200x125" : imgurl} className="card-img-top" alt="..." width={125} hieght={200}/>
                        <div className="card-body"  >
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{des}</p>
                            <small className="text-muted">By {author === null ? "unknown" : author} on {date}</small><br />
                            <a href={newsurl} className="btn btn-sm btn-primary" target="blank">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}




export default Newcontent;
