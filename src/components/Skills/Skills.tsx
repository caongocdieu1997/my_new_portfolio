import {
  bootstrapIcon,
  cssIcon,
  elixirIcon,
  htmlIcon,
  javaIcon,
  jsIcon,
  muiIcon,
  nextIcon,
  oracleIcon,
  postgresqlIcon,
  reactIcon,
  reactQueryIcon,
  reduxIcon,
  sassIcon,
  tailWindCssIcon,
  tsIcon,
} from "@/static/image";
import Image from "next/image";
import React from "react";

const SkillsSection = () => {
  const listIcon = [
    {
      icon: htmlIcon,
      content: "HTML",
    },
    {
      icon: cssIcon,
      content: "CSS",
    },
    {
      icon: sassIcon,
      content: "Sass",
    },
    {
      icon: bootstrapIcon,
      content: "Bootstrap",
    },
    {
      icon: tailWindCssIcon,
      content: "Tailwind",
    },
    {
      icon: muiIcon,
      content: "MUI",
    },

    {
      icon: jsIcon,
      content: "Javascript",
    },
    {
      icon: tsIcon,
      content: "TypeScript",
    },
    {
      icon: reactIcon,
      content: "ReactJS",
    },
    {
      icon: nextIcon,
      content: "NextJS",
    },

    {
      icon: reduxIcon,
      content: "Redux",
    },
    {
      icon: reactQueryIcon,
      content: "React Query",
    },
    {
      icon: javaIcon,
      content: "Java",
    },
    {
      icon: elixirIcon,
      content: "Elixir",
    },
    {
      icon: oracleIcon,
      content: "Oracle",
    },
    {
      icon: postgresqlIcon,
      content: "PostgreSql",
    },
  ];
  return (
    <div className="skills__section">
      <div className="grid wide">
        <div className="row">
          <div className="section__title">
            <p>Technical Skills</p>
          </div>
          <div className="col c-12 m-12 t-12">
            <div className="skills__wrapper">
              <div className="skills__list">
                {listIcon.map(({ icon, content }) => {
                  return (
                    <div className="skills__item" key={content}>
                      <Image src={icon} height={150} width={150} alt="" />
                      <p>{content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
