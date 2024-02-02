import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import Button from "../Button/Button";
import Image from "next/image";
import { person_header } from "@/static/image";
type Props = {};

const HomeSection = (props: Props) => {
  return (
    <div className="home__section">
      <div className="grid wide">
        <div className="row home__section-wrapper">
          <div className="col c-7 t-12 m-12 home__left">
            <div className="home__icons">
              <div className="home__icon-item">
                <a target="_blank" href="https://github.com/caongocdieu1997">
                  <BsGithub size={30} />
                </a>
              </div>
              <div className="home__icon-item">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/di%E1%BB%87u-cao-779a98222/"
                >
                  <BsLinkedin size={30} />
                </a>
              </div>
              <div className="home__icon-item">
                <a
                  target="_blank"
                  href="https://www.facebook.com/dieu.cao.716/"
                >
                  <BsFacebook size={30} />
                </a>
              </div>
            </div>
            <div className="home__introduce">
              <div className="home__introduce-title">
                <p>
                  I&apos;m <span>Web</span> Developer <br />
                  Dieu <span>Cao</span>
                </p>
              </div>
              <div className="home__introduce-content">
                <p style={{ color: "transparent" }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit minima aperiam fuga accusantium reprehenderit enim animi
                  praesentium in vero ducimus. Assumenda dolore, dolores
                  architecto dolor quia nesciunt suscipit rem eius?
                </p>
              </div>
              <div className="home__introduce-button">
                <Button>Download MyCv</Button>
              </div>
            </div>
          </div>
          <div className="c-5 t-12 m-12 home__right">
            <div className="home__img">
              <div className="home__img-wrapper">
                <Image src={person_header.src} alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
