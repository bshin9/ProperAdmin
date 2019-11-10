import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import UpdateProduct from "./Pages/UpdateProduct";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/products" component={Products} />
        <Route path="/update" component={UpdateProduct} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Footer />
      </Router>
    );
  }
}

export default App;
