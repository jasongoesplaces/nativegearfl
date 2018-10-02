import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Returns from "./pages/Returns";
import Terms from "./pages/Terms";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import SignUp from "./pages/Signup";
// import Logout from "./components/logout"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/faq" component={FAQ}/>
          <Route exact path="/privacy" component={Privacy}/>
          <Route exact path="/returns" component={Returns}/>
          <Route exact path="/terms" component={Terms}/>
          {/* 
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={Logout} /> */}
        </div>
      </Router>
    );
  }
}
export default App;