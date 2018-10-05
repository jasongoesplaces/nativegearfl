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
            <div className="col s6 container">
              <a href="/shop/men"><img className="homeImgLarge" src="./images/placeholder4.jpg"/></a>
              <div className="linkText">Men</div>
            </div>
            <div className="col s6 container">
              <a href="/shop/women"><img className="homeImgLarge" src="./images/placeholder5.jpg"/></a>
              <div className="linkText">Women</div>
            </div>
          </div>
          <div className="row">
            <div className="col s6 m3 container">
              <a href="/shop/kids"><img className="homeImgSmall" src="./images/placeholder6.jpg"/></a>
              <div className="linkText">Kids</div>
            </div>
            <div className="col s6 m3 container">
              <a href="/shop/hats"><img className="homeImgSmall" src="./images/placeholder7.jpg"/></a>
              <div className="linkText">Hats</div>
            </div>
            <div className="col s6 m3 container">
              <a href="/shop/accessories"><img className="homeImgSmall" src="./images/placeholder8.jpg"/></a>
              <div className="linkText">Accessories</div>
            </div>
            <div className="col s6 m3 container">
              <a href="/shop/decals"><img className="homeImgSmall" src="./images/placeholder9.jpg"/></a>
              <div className="linkText">Decals</div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;