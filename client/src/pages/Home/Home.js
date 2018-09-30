import React, { Component } from "react";
import NavBar from "../../components/Nav"
import NavBar2 from "../../components/Nav2"
import {Carousel} from 'react-materialize'

class Home extends Component {
  render() {
    return (
      <div className="landerPage">
      <NavBar />
      <NavBar2 />
      <Carousel options={{ fullWidth: true }} images={[
        './images/placeholder1.jpeg',
        './images/placeholder2.jpg',
        './images/placeholder3.jpg',
      ]} />
      </div>
    );
  }
}

export default Home;