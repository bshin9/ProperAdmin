import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ id, name, category, description }) => {
  const [products, setProducts] = useState();

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

  const handleDelete = () => {
    axios.delete(`/api/products/${id}`);
  };

  return (
    <div className="card-main">
      <div className="card-row">
        <div className="card-container">
          <div className="card-body">
            <h2 className="strong">{name}</h2>
            <p className="card-text">
              {category}
              <br />
              {description}
            </p>
            <button onClick={handleDelete} className="btn btn-secondary ml-1">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
