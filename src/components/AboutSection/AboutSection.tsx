import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import Button from "../Button/Button";
import Image from "next/image";
import { aboutImg } from "@/static/image";

const AboutSection = () => {
  return (
    <div className="about__section">
      <div className="grid wide">
        <div className="section__title">
          <p>About Me</p>
        </div>
        <div className="row about__section-wrapper">
          <div className="col c-6 t-12 m-12 ">
            <div className="about__left">
              <div className="about__left-title">
                <p>Developing With a Passion While Exploring The World.</p>
              </div>
              <div className="about__left-content">
                <p>
                  I have had over 4 years working experience in software
                  development. I am passionate about learning new technologies
                  to increase the quality of my work and I always look forward
                  to sharing my knowledge with the members of the company. Hope
                  I can contribute to the development of the company.
                </p>
              </div>
              <Button href="#contact">Contact Me</Button>
            </div>
          </div>
          <div className="col c-6 t-12 m-12 about__right">
            <div className="home__img">
              <div className="home__img-wrapper">
                <Image src={aboutImg.src} alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
