import React from "react";
import { Link } from "react-router-dom";

const LeftContainer = ({ team }) => {
  return (
    <div>
      <div className="sideBar d-flex flex-column gap-2 justify-content-start">
        <Link to="/theStudio">
          <i className="fa fa-angle-right"></i> The Studio
        </Link>
        <Link className="active" to="/team">
          <i className="fa fa-angle-right"></i> Team
        </Link>
      </div>
    </div>
  );
};

export default LeftContainer;
