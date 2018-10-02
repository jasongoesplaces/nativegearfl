import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
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
        <div className="categories">
          <div className="row">
            <div className="col s6">
              <a href="/shop/men"><img className="homeImgLarge" src="./images/placeholder4.jpg"/>Men</a>
            </div>
            <div className="col s6">
              <a href="/shop/women"><img className="homeImgLarge" src="./images/placeholder5.jpg"/>Women</a>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m3">
              <a href="/shop/kids"><img className="homeImgSmall" src="./images/placeholder6.jpg"/>Kids</a>
            </div>
            <div className="col s6 m3">
              <a href="/shop/hats"><img className="homeImgSmall" src="./images/placeholder7.jpg"/>Hats</a>
            </div>
            <div className="col s6 m3">
              <a href="/shop/accessories"><img className="homeImgSmall" src="./images/placeholder8.jpg"/>Accessories</a>
            </div>
            <div className="col s6 m3">
              <a href="/shop/decals"><img className="homeImgSmall" src="./images/placeholder9.jpg"/>Decals</a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;