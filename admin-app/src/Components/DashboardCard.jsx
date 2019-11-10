import React from "react";

const DashboardCard = ({ name, category, description }) => {
  return (
    <div className="card-main">
      <div className="card-row">
        <div className="card-container">
          <div className="card-body">
            <h2 className="strong">
              {name} 
            </h2>
            <p className="card-text">{category}<br/>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
