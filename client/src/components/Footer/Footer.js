import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col m1"></div>
                <div className="col m3">
                    <img className="logofooter" src="./images/NATIVE2.png"/>
                    <div className="container socialContain">
                        <a className="social" href="https://www.facebook.com/nativegear/" target="_blank">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a className="social" href="https://www.instagram.com/nativegearfl/" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="social2" href="#" target="_blank">
                            <i className="fab fa-pinterest"></i>
                        </a>
                    </div>
                    <div className="container">
                        <h6>nativegearfl@gmail.com</h6>
                    </div>
                </div>
                <div className="col m4">
                <div className="notificationClub">
                    <div>
                        <h6 id="signUpText" className="notification">Sign up for our newsletter!</h6>
                    </div>
                    <div className="row form">
                        <form id="form" className="col s12">
                            <div className="row">
                                <div className="col s1"></div>
                                <div className="input-field col s10">
                                    <input id="email" type="email" name="email" className="validate"></input>
                                    <label for="email">Email</label>
                                </div>
                                <div className="col s1"></div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col s12 center">
                            <a id="submit" className="waves-effect waves-light btn z-depth-0">Sign Up</a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col m3 infoContain">
                    <h6 className="footerTitle">Info</h6>
                    <ul>
                        <li><a href="/faq">Frequently Asked Questions</a></li>
                        <li><a href="/returns">Shipping & Returns</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="col m1"></div>
            </div>
        </div>
    );
  }
}

export default Footer;