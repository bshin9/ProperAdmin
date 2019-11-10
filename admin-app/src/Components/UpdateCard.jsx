import React, { useState } from "react";
import axios from "axios";

const UpdateCard = ({ name, category, description }) => {
  const [id, setID] = useState([]);
  const [prodname, setProductName] = useState([]);
  const [proddescription, setProductDescription] = useState([]);
  const [prodcategory, setCategory] = useState([]);
  const [products, setProducts] = useState();

  const handleUpdate = () => {
    axios
      .put(`/api/Products/${id}`, {
        Id: id,
        ProductName: prodname,
        ProductDescription: proddescription,
        Category: prodcategory
      })
      .catch(err => console.log(err));
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
            <form>
              <label>Id:</label>
              <input onChange={e => setID(e.target.value)} />
              <div className="form-group">
                <label htmlFor="title">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={e => setProductName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={e => setCategory(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="body">Description</label>
                <textarea
                  name="editor1"
                  className="form-control"
                  defaultValue={""}
                  onChange={e => setProductDescription(e.target.value)}
                />
              </div>
              
            </form>
            <button onClick={handleUpdate} className="btn btn-secondary">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCard;
