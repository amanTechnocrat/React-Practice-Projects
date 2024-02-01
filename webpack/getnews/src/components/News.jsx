import React, { Component } from 'react';
import Newscontent from './Newcontent';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import { v4 as uuidv4 } from 'uuid';


class News extends Component {

    static defaultProps = {
        category: 'general',
        country: 'in',
        pageSize: 6,
    }
    static propTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
        pageSize: PropTypes.number,

    }
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            page: 1,
            totalResults: 0,
            head : "",
            nodataflag : false,
            apikey : "79284b38cda74806ae09ea291dd7ae1c",
            // apikey : "f2ada36027ec4f9db1eeb28fcf8a9f9e"
        }

    }


    componentDidUpdate(prevprops) {
        if (prevprops?.datasearch !== this.props.datasearch) {
            this.update()
            this.heading()
        }
    }

    componentDidMount() {
        this.update()
        this.heading()
    }



    update = async () => {
        if (this.props.datasearch.length > 0) {
            let data = await fetch(`https://newsapi.org/v2/everything?q=${this.props.datasearch}&sortBy=publishedAt&apiKey=${this.state.apikey}&pageSize=6`)
            let getdata = await data.json()
            console.log("serdata", getdata);
            if(getdata.articles.length < 1){
                this.setState({nodataflag : true})
            }else{
                this.setState({nodataflag : false})
            }
            await this.setState({
                articles: getdata.articles,
                totalResults: getdata.totalResults
            })
        }
        else {
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`)
            let getdata = await data.json()
            // console.log(getdata);
            this.setState({
                articles: getdata.articles,
                totalResults: getdata.totalResults
            })
        }
    }









    // next= async()=>{
    //     console.log("nx");
    //     this.setState({page: this.state.page + 1})
    //     this.update()
    // }
    // pre= async()=>{
    //     console.log("pr");
    //     this.setState({page: this.state.page - 1})
    //     this.update()
    // }
    scrolltoend = async () => {
        await this.setState({ page: this.state.page + 1 })
        if (this.props.datasearch.length > 0) {

            let data = await fetch(`https://newsapi.org/v2/everything?q=${this.props.datasearch}&sortBy=publishedAt&apiKey=${this.state.apikey}&pageSize=6&page=${this.state.page}`)
            let getdata2 = await data.json();
            // console.log(this.state.totalResults);
            this.setState({ articles: this.state.articles.concat(getdata2.articles) })
        }
        else {
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`)
            let getdata2 = await data.json();
            // console.log(this.state.totalResults);
            this.setState({ articles: this.state.articles.concat(getdata2.articles) })
        }
    }

    heading = ()=>{
        if(this.props.datasearch.length > 0){
            this.setState({head : "News of " + this.props.datasearch.charAt(0).toUpperCase() + this.props.datasearch.slice(1)})
        }
        else{
            this.setState({head : "Top headlines of " + this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)})
        }
    }


    




    render() {
        
        return (
            <>
                    <h2 className='bg-secondary m-2' style={{"textAlign":"center"}}>{this.state.head}</h2>
                <div className='container my-2' id="scroll">
                    {/* <h2 className='bg-secondary text-center'>Top headlines of {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h2> */}
                    <InfiniteScroll
                        dataLength={this.state?.articles?.length}
                        next={this.scrolltoend}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="row">
                            {this.state.articles.length > 0 && this.state.articles.map((val, index) => {

                                return (<>
                                    <div className="col-md-4" key={uuidv4()}>
                                        <Newscontent keys={uuidv4()} title={val?.title} des={val?.description} imgurl={val?.urlToImage} newsurl={val?.url} author={val?.author} date={new Date(val?.publishedAt).toLocaleString()} />
                                    </div>
                                </>)
                            })}
                        </div>
                    </InfiniteScroll>
                    {this.state.nodataflag && <div>
                        <h1>No Data Found</h1>
                    </div>}
                    {/* <div className="text-center">
                            <button onClick={() => {
                                this.scrolltoend()
                            }}
                                className="btn btn-primary">Loadmore</button></div> */}
                    {/* <div class="d-flex justify-content-between">
                        <button disabled={this.state.page<=1} onClick={this.pre} class="btn btn-primary"> &laquo; Previous</button>
                        <button disabled={this.state.page>8} onClick={this.next} class="btn btn-primary">Next &raquo;</button>
                    </div> */}
                </div>
            </>
        );
    }
}



export default News;
