import React, { LegacyRef, forwardRef } from "react";
import { colorSection } from "@/utils/colorConstant";
import HomeSection from "../HomeSection";
import AboutSection from "../AboutSection";
import ExperienceSection from "../ExperienceSection";
import Skills from "../Skills";
import Contact from "../Contact";

type Props = {};

const Section = forwardRef(function Section(props: Props, ref) {
  return (
    // @ts-ignore
    <div ref={ref}>
      <section id="home">
        <HomeSection />
      </section>
      <section id="about" style={{} as React.CSSProperties}>
        <AboutSection />
      </section>
      <section id="experience" style={{} as React.CSSProperties}>
        <ExperienceSection />
      </section>
      <section id="skills" style={{} as React.CSSProperties}>
        <Skills />
      </section>
      <section id="contact" style={{} as React.CSSProperties}>
        <Contact />
      </section>
    </div>
  );
});

export default Section;
