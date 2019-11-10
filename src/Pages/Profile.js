import React from "react";

const Profile = () => {
  return (
    <section id="profile">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="card-header">
                <h4>Edit Profile</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Brad Traversy"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue="test@test.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      className="form-control"
                      name="editor1"
                      defaultValue={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde at fugiat explicabo temporibus, tempora animi sunt iusto quod beatae optio veritatis velit natus odit error! Possimus esse quisquam quibusdam eveniet autem! Minus dolore quisquam nemo similique doloribus perspiciatis tempore."
                      }
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h3>Your Avatar</h3>
            <img
              src="img/avatar.png"
              alt=""
              className="d-block img-fluid mb-3"
            />
            <button className="btn btn-primary btn-block">Edit Image</button>
            <button className="btn btn-danger btn-block">Delete Image</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
