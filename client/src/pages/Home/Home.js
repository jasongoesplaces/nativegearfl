import React, { Component } from "react";
import Nav from "../../components/Nav"
import {Carousel} from 'react-materialize'

class Home extends Component {
  render() {
    return (
      <div className="landerPage">
      <Nav/>
      <Carousel className="carousel" options={{ fullWidth: true }} images={[
        './images/placeholder0.JPG',
        './images/placeholder1.jpeg',
        './images/placeholder2.jpg',
        './images/placeholder3.jpg',
      ]} />
      </div>
    );
  }
}

export default Home;