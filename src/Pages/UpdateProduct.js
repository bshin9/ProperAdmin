import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateCard from "../Components/UpdateCard";

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
                <h4>Edit our products here</h4>
              </div>
              <table className="table table-striped">
                <thead className="thead-dark">
                </thead>
              </table>
              <div className="flex-items">
                {products &&
                  products.map(product => (
                    <UpdateCard
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
