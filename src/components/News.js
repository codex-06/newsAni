import React, { Component } from 'react'
import Card from './Card'


export default class News extends Component {
    constructor(){
      super();
      this.state = {
        articles: [],
        page:1
      }
    }
    newsapi = async ()=> {
        let data = await fetch("https://newsapi.org/v2/everything?apiKey=3a9222a16c494952a91caf14bddfa6ab&q=anime&pageSize=16&page=" + this.state.page);
        let parsedData = await data.json();
        
        this.setState({
            articles: parsedData.articles,
        })
    }

    componentDidMount(){
        console.log("cdm running")
        this.newsapi();
    }

    handlenext = () =>{
        console.log("handlenext running")
        this.setState({
            page :this.state.page +1
        })
        this.newsapi();
    }

    handleprev = () =>{
        console.log("handleprev running")
        this.setState({
            page :this.state.page -1
        })
        this.newsapi();
    }
    render() {
        return (
           
            <div className="container my-3">
                {console.log("render" + this.state.page)}
                
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-3" key = {element.url}>
                    <Card imgUrl = {element.urlToImage? element.urlToImage: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/characters-from-atack-on-titan-naruto-and-my-hero-academia.jpg"} title = {element.title} description = {element.description ?element.description.slice(0,88):""}  url = {element.url}/>
                            </div>
                })}
                
                </div>  
                <div className="container my-3 nextButtons">
                <button type="button" className="mx-3 btn btn-primary" onClick={this.handleprev}>&lt;&lt;</button> 
                {this.state.page}
                <button type="button" className="mx-3 btn btn-primary" onClick={this.handlenext}>&gt;&gt;</button>

                </div>
            </div>  
            
        )
    }
}