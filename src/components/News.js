import { element } from 'prop-types';
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c8456e2d173845cab3aaae5dc47d6ab4&pageSize=20";
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }


    handlePrevClick = async ()=>{
        console.log("CLicked");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c8456e2d173845cab3aaae5dc47d6ab4&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })  
    }
    
    handleNextClick =  async ()=>{
        console.log("CLicked");
        if (this.state.page +1 >Math.ceil(this.state.totalResults/20)){

        }
        else{

        

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c8456e2d173845cab3aaae5dc47d6ab4&page=${this.state.page +1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }
    }
    render() {
        return (

            <div className='container my-3 ' >
                <h1>Metro News 99: Top Headlines</h1>
                <div className="row">
                {this.state.articles.map((element)=>{
                   return  <div className="col-md-4" key={element.url}>
                                <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl ={element.url} />
                            </div>})}
                    
    
                </div>
                <div className="container d-flex justify-content-between" >
                <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">&larr; Previous</button>
                <button onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News