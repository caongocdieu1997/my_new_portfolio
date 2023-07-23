import React, { useEffect } from "react";
import Header from "../Header";
import Section from "../Section";
import Footer from "../Footer";

const App = () => {
  const refSection = React.useRef<HTMLDivElement>(null);
  const refLink = React.useRef<HTMLDivElement>(null);
  const refHeader = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, Number(localStorage.getItem("scrollPos")));
    let htmlRef = document.querySelector("html")?.style;
    if (htmlRef) htmlRef.scrollBehavior = "smooth";
    handleChangeMenu();
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleChangeMenu);
  }

  function handleChangeMenu() {
    const listSection = refSection.current?.querySelectorAll("section") || [];
    const links = refLink.current?.querySelectorAll("a") || [];
    localStorage.setItem("scrollPos", window.scrollY.toString());

    let top = Number(localStorage.getItem("scrollPos"));
    refHeader.current?.classList.toggle("sticky", top > 0);
    listSection.forEach((section) => {
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");
      if (top >= offset && top < offset + height) {
        links.forEach((link) => {
          link.classList.remove("active");
          refLink.current
            ?.querySelector(`a[href*="#${id}"]`)
            ?.classList.add("active");
        });
      }
    });
  }

  return (
    <div>
      <Header refHeader={refHeader} ref={refLink} />
      <Section ref={refSection} />
      <Footer />
    </div>
  );
};

export default App;
