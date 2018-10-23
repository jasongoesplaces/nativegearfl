import React, { Component } from "react";


class NavLinks extends Component {

  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }

  handleMenuToggle = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div>
        <div>
          <ul className="nav2">
            <li className="navlink"><span id="shop" className="linkcolor" onClick={this.handleMenuToggle}>Shop</span></li>
            {/* <li className="navlink">|</li> */}
            <li className="navlink"><a href="/about" className="linkcolor">About Us</a></li>
            {/* <li className="navlink">|</li> */}
            <li className="navlink"><a href="/contact" className="linkcolor">Contact Us</a></li>
            {/* <li className="navlink">|</li> */}
            <li><a href="/faq" className="linkcolor">  FAQ </a></li>
          </ul>
        </div>
        <div>
          {!this.state.isHidden && <Child />}
        </div>
      </div>
    )
  }
};

const Child = () => (
  <ul className="nav3" id="nav3">
    <li className="navlink"><a href="/shop/men" className="linkcolor">Men</a></li>
    <li className="navlink"><a href="/shop/women" className="linkcolor">Women</a></li>
    <li className="navlink"><a href="/shop/kids" className="linkcolor">Kids</a></li>
    <li className="navlink"><a href="/shop/hats" className="linkcolor">Hats</a></li>
    <li className="navlink"><a href="/shop/accessories" className="linkcolor">Accessories</a></li>
    <li><a href="/shop/decals" className="linkcolor">Decals</a></li>
  </ul>
)

export default NavLinks;