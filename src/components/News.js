import React, { Component } from 'react'
import Card from './Card'
import Spinner from './Spinner';


export default class News extends Component {
    constructor(){
      super();
      this.state = {
        articles: [],
        page:1,
        loading: true
      }
    }
    newsapi = async ()=> {
        let url =  "https://newsapi.org/v2/everything?apiKey=3a9222a16c494952a91caf14bddfa6ab&q=anime&pageSize=15&page=" + this.state.page
        console.log( "newsapi runnigng" + url)
        let data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({
            articles: parsedData.articles,
            loading:false
        })
        window.scrollTo(0, 0) 
    }

    async componentDidMount(){
        console.log("cdm running")
        await this.newsapi();
    }

    handlenext = async () =>{
        console.log("handlenext running")
        await this.setState({
            articles:[],
            page :this.state.page +1,
            loading :true
        })
        await this.newsapi();
    }

    handleprev = async () =>{
        console.log("handleprev running")
        await this.setState({
            articles:[],
            page :this.state.page -1,
            loading:true
        })
        await this.newsapi();
    }
    render() {
        return (
           
            <div className="container my-3">
                {console.log("render " + this.state.page)}
                {this.state.loading && <Spinner></Spinner>}
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-4" key = {element.url}>
                    <Card imgUrl = {element.urlToImage? element.urlToImage: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/characters-from-atack-on-titan-naruto-and-my-hero-academia.jpg"} title = {element.title} description = {element.description ?element.description.slice(0,88):""}  url = {element.url}/>
                            </div>
                })}
                
                </div>  
                <div className="container my-3 nextButtons">
                <button type="button" disabled = {this.state.page ===1}className="mx-3 btn btn-primary" onClick={this.handleprev}>&lt;&lt;</button> 
                {this.state.page}
                <button type="button" className="mx-3 btn btn-primary" onClick={this.handlenext}>&gt;&gt;</button>

                </div>
            </div>  
            
        )
    }
}