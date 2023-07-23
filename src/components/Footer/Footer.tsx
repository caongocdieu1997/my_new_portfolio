import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="grid wide footer__wrapper">
      <div className="row">
        <div className="col c-12 t-12 m-12">
          <div className="footer__content">
            <p>
              Copyright © 2023 <span>Dieu Cao</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
