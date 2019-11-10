import React, { useState, useEffect } from "react";
import axios from "axios";

const Modals = () => {
  const [name, setProductName] = useState([]);
  const [description, setProductDescription] = useState([]);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState();

  const handleCreate = () => {
    axios
      .post("/api/Products", {
        ProductName: name,
        ProductDescription: description,
        Category: category
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      {/* ADD POST MODAL */}
      <div className="modal fade" id="addPostModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Add Product</h5>
              <button className="close" data-dismiss="modal">
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
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
            </div>
            <div className="modal-footer">
              <button
                onClick={handleCreate}
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Add Watch
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ADD USER MODAL */}
      <div className="modal fade" id="addUserModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title">Add User</h5>
              <button className="close" data-dismiss="modal">
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Confirm Password</label>
                  <input type="password" className="form-control" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning" data-dismiss="modal">
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
