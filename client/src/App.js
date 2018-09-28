import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import SignUp from "./pages/Signup";
// import Logout from "./components/logout"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={Logout} /> */}
        </div>
      </Router>
    );
  }
}
export default App;