import React from "react";

const LeftContainer = () => {
  return (
    <div>
      <div class="sideBar d-flex flex-column gap-2 justify-content-start">
        <a href="/theStudio">
          <i class="fa fa-angle-right"></i> The Studio
        </a>
        <a class="active" href="/team">
          <i class="fa fa-angle-right"></i> Team
        </a>
      </div>
    </div>
  );
};

export default LeftContainer;
