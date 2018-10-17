import React from "react";

const LoginView = ({ onSubmit }) => {
  return (
    <div className="adminLogin">
        <div className="adminLogo">
            <img src="./images/NATIVE2.png"/>
        </div>
        <div className="adminLoginText">
            <h4>Administrator Login</h4>
        </div>
        <form className="col s12 loginField" onSubmit={onSubmit}>
            <div className="row">
                <div className="col l3 hide-on-med-and-down"></div>
                <div className="input-field col s12 l6"> 
                    <input id="email" type="email" name="email" className="validate inputBar"/>
                    <label htmlFor="email">Username</label>
                </div>
                <div className="col l3 hide-on-med-and-down"></div>
            </div>
            <div className="row">
                <div className="col l3 hide-on-med-and-down"></div>
                <div className="input-field col s12 l6"> 
                    <input id="password" type="password" name="password" className="validate inputBar"/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="col l3 hide-on-med-and-down"></div>
            </div>
            <div className="buttonContain">
                <button className="button loginSignupBtn">LOGIN</button>
            </div>
        </form>
    </div>
        
  );
}

export default LoginView;