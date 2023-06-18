import React from 'react'
import loading from "./loading.gif";

export default function Spinner() {
  return (<div className="flexbox">

    <div className="loader" >
      <img src={loading} className="img-fluid"alt="loading..." />
    </div>
  </div>
  )
}
