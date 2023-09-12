import React from "react";
import { Link } from "react-router-dom";

const LeftService = () => {
  return (
    <div>
      <div className="sideBar d-flex flex-column gap-2 justify-content-start">
        <Link className="active" to="/service">
          <i className="fa fa-angle-right"></i> Services
        </Link>
        <Link to="/audio">
          <i className="fa fa-angle-right"></i> Audio
        </Link>
        <Link to="/visual">
          <i className="fa fa-angle-right"></i> Visual
        </Link>
        <Link to="/digital">
          <i className="fa fa-angle-right"></i> Digital
        </Link>
        <Link to="/promotional">
          <i className="fa fa-angle-right"></i> Promotional
        </Link>
      </div>
    </div>
  );
};

export default LeftService;
