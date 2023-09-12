import React from "react";

const LeftService = () => {
  return (
    <div>
      <div class="sideBar d-flex flex-column gap-2 justify-content-start">
        <a class="active" href="theStudio">
          <i class="fa fa-angle-right"></i> Services
        </a>
        <a href="/audio">
          <i class="fa fa-angle-right"></i> Audio
        </a>
        <a href="/visual">
          <i class="fa fa-angle-right"></i> Visual
        </a>
        <a href="/digital">
          <i class="fa fa-angle-right"></i> Digital
        </a>
        <a href="/promotional">
          <i class="fa fa-angle-right"></i> Promotional
        </a>
      </div>
    </div>
  );
};

export default LeftService;
