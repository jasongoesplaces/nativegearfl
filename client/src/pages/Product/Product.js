import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

class Returns extends Component {
  render() {
    return (
      <div className="landerPage">
        <Nav/>
        <div className="container productContainer">
            <div className="row">
                <div className="col s6">
                    <img src="./images/product1.png"/>
                </div>
                <div className="col s6">
                    <h4>SWAMP - Structured Trucker</h4>
                    <h5>$23.95</h5>
                    <p>Color: Royal/White with Orange Stitch</p>
                    <p>Details:</p>
                    <ul>
                        <li>* Cotton-Poly/Nylon Mesh</li>
                        <li>* Adjustable Snapback</li>
                        <li>* One Size Fits Most</li>
                    </ul>
                    <a id="submit" className="waves-effect waves-light btn z-depth-0">Add To Cart</a>
                </div>
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Returns;