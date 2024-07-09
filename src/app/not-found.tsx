import React from "react";
import { TbError404 } from "react-icons/tb";

function NotFound({}) {
  return (
    <div>
      <div className="loader__wrapper">
        <div className="loader__overlay"></div>
        <div className="loading">
          <TbError404 size={60} />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
