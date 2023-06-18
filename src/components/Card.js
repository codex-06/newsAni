import React, { Component } from 'react'

export default class Card extends Component {
  render() {
        let {title, description, imgUrl,url} = this.props;
    return (
        <div>
          <div className="card cardframe my-3" style={{width: "18rem"}}>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}.</p>
              <a href={url} className="btn btn-primary">Read more</a>
            </div>
          </div>
        </div>
    )
  }
}
