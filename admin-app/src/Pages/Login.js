import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section id="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header">
                <h4>Login to Proper Watches</h4>
              </div>
              <div className="card-body">
                <form action="index.html">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <NavLink className="btn btn-primary btn-block" to="/dashboard">
                    Login
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
