import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Action from "../Components/Action";
import Modals from "../Components/Modals";
import DashboardCard from "../Components/DashboardCard";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState();
  const [id, setID] = useState([]);

  useEffect(() => {
    axios
      .get("/api/Products")
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);
  
  return (
    <Router>
      <Action />
      <section id="posts">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h4>Latest Updates</h4>
                </div>
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>Keep up to date with our latest changes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <div className="flex-items">
                      {products &&
                        products.map(product => (
                          <DashboardCard
                            key={product.productName}
                            name={product.productName}
                            category={product.category}
                            description={product.productDescription}
                          />
                        ))}
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center bg-primary text-white mb-3">
                <div className="card-body">
                  <h3>Products</h3>
                  <h4 className="display-4">
                    <i className="fas fa-pencil-alt" />{setID}
                  </h4>
                  <NavLink
                    className="btn btn-outline-light btn-sm"
                    to="/products"
                  >
                    View
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modals />
    </Router>
  );
};

export default Dashboard;
