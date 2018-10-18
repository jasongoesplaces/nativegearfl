import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import app from "./components/base";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Returns from "./pages/Returns";
import Terms from "./pages/Terms";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Logout from "./components/logout";

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

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
          <Route exact path="/logout" component={Logout} /> 
          <Route exact path="/admin" component={Admin}/>
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            authenticated={authenticated}
          />
        </div>
      </Router>
    );
  }
}
export default App;