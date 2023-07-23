"use client";
import React, { LegacyRef, forwardRef } from "react";
import { colorSection } from "@/utils/colorConstant";
import { icon as IconImg, facebookIcon, githubIcon } from "../../static/image";
import Image from "next/image";
import { linkedinIcon } from "../../static/image";
import { FaTimes } from "react-icons/fa";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
interface HeaderProps {
  refHeader: any;
}

const Header = forwardRef(function Header(
  { refHeader }: HeaderProps,
  ref: LegacyRef<HTMLElement> | undefined
) {
  const refInput = React.useRef<HTMLInputElement>(null);

  const sectionOnclick = () => {
    const input = refInput.current as HTMLInputElement;
    input.checked = false;
    if (input) {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflow = "visible";
      }
    }
  };

  const handleAddOverflow = () => {
    if (!refInput.current?.checked) {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflow = "hidden";
      }
    }
  };

  const handleRemoveOverflow = () => {
    if (refInput.current?.checked) {
      const body = document.querySelector("body");
      if (body) {
        body.style.overflow = "visible";
      }
    }
  };

  return (
    <header ref={refHeader}>
      <div className="grid wide">
        <div className="header__wrapper ">
          <div className="header__wrapper__logo">
            <Image src={IconImg} alt="" width={50} height={50}></Image>
            <a href="" className="logo">
              DieuCao
            </a>
          </div>
          <input
            type="checkbox"
            id="nav-mobile-input"
            className="nav__input"
            hidden
            ref={refInput}
          />
          <label
            htmlFor="nav-mobile-input"
            className="menu__btn"
            onClick={handleAddOverflow}
          >
            <div className="menu__btn-burger"></div>
          </label>
          <div className="menu__mobile">
            <label
              htmlFor="nav-mobile-input"
              className="delete__icon"
              onClick={handleRemoveOverflow}
            >
              <FaTimes size={30} color="#fff" />
            </label>
            <div className="menu__wrapper">
              <ul className="menu__mobile-list">
                <li>
                  <a
                    className="menu__mobile-link"
                    href="#home"
                    onClick={sectionOnclick}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="menu__mobile-link"
                    href="#about"
                    onClick={sectionOnclick}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="menu__mobile-link"
                    href="#experience"
                    onClick={sectionOnclick}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="menu__mobile-link"
                    href="#skills"
                    onClick={sectionOnclick}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="menu__mobile-link"
                    href="#contact"
                    onClick={sectionOnclick}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="mobile__icons">
                <div className="mobile__icon-item">
                  <a target="_blank" href="https://github.com/caongocdieu1997">
                    <BsGithub size={30} color="#fff" />
                  </a>
                </div>
                <div className="mobile__icon-item">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/di%E1%BB%87u-cao-779a98222/"
                  >
                    <BsLinkedin size={30} color="#fff" />
                  </a>
                </div>
                <div className="mobile__icon-item">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/dieu.cao.716/"
                  >
                    <BsFacebook size={30} color="#fff" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav ref={ref}>
            <a
              className="active"
              href="#home"
              style={{ "--clr": `${colorSection.home}` } as React.CSSProperties}
            >
              Home
            </a>
            <a
              href="#about"
              style={
                { "--clr": `${colorSection.about}` } as React.CSSProperties
              }
            >
              About
            </a>
            <a
              href="#experience"
              style={
                {
                  "--clr": `${colorSection.experience}`,
                } as React.CSSProperties
              }
            >
              Experience
            </a>
            <a
              href="#skills"
              style={
                { "--clr": `${colorSection.skills}` } as React.CSSProperties
              }
            >
              Skills
            </a>
            <a
              href="#contact"
              style={
                { "--clr": `${colorSection.contact}` } as React.CSSProperties
              }
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
});

export default Header;
