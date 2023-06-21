import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>

      <div>
        <Navbar/>
      </div>
      
      <News/>

      </>
    )
  }
}
