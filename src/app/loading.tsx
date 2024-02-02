import React from "react";
import { SiHappycow } from "react-icons/si";

type Props = {};

function Loading({}: Props) {
  return (
    <div>
      <div className="loader__wrapper">
        <div className="loader__overlay"></div>
        <div className="loading">
          <SiHappycow size={60} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
