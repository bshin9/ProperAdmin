import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Card from "../Components/Card";

const Products = () => {
  const [products, setProducts] = useState();
  const [id, setId] = useState();
  // using a componentDidMount here to retrieve my products from my endpoint

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
    <section id="Products">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h4>Latest Products</h4>
              </div>
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>Update the products here</th>
                  </tr>
                </thead>
              </table>
              <div className="flex-items">
                {products &&
                  products.map(product => (
                    <Card
                      id={product.id}
                      key={product.productName}
                      name={product.productName}
                      category={product.category}
                      description={product.productDescription}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
