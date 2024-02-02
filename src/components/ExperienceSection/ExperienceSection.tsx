import React from "react";
import ExperienceTab from "./components";
import { idText } from "typescript";

interface Tab {
  id: number;
  startTime: string;
  endTime: string;
  company: string;
  position: string;
  content: string;
  techList: string[];
}

const ExperienceSection = () => {
  const experienceTabList: Tab[] = [
    {
      id: 1,
      startTime: "Mar 2022",
      endTime: "Present",
      company: "OnPoint E-commerce",
      position: "Full Stack Developer",
      content:
        "Create a website E-commerce for LG Cosmetic and NestleVN. Upgrade and develop sales channel management features for Tikok, Shopee, Lazada,...Maintain Core Systems",
      techList: [
        "HTML",
        "CSS",
        "MUI",
        "Bootstrap",
        "Javascript",
        "ReactJS",
        "ReactQuery",
        "Elixir",
        "PostgreSQL",
      ],
    },
    {
      id: 2,
      startTime: "Aug 2018",
      endTime: "Mar 2022",
      company: "Ryomo Vietnam Solutions Co., Ltd",
      position: "Full Stack Developer",
      content:
        "Improve web Application of Japanese government, Tax management, Welfare management. Receive, requests and work with Japanese customers. Check and fix errors, optimize system code. Create a report with Report Designer",
      techList: ["HTML", "CSS", "Javascript", "ReactJS", "Java", "Oracle"],
    },
    {
      id: 3,
      startTime: "Jan 2018",
      endTime: "Mar 2018",
      company: "Xtek Asia",
      position: "Front End Intern",
      content:
        " I am just learning new technologies to increase the quality of my work",
      techList: ["HTML", "CSS", "Bootstrap", "Javascript", "ReactJS"],
    },
  ];
  return (
    <div className="experience__section">
      <div className="grid wide">
        <div className="row experience__section-wrapper">
          <div className="section__title">
            <p>Experience</p>
          </div>
          <div className="col c-12 m-12 t-12 experience_tab-wrapper ">
            {experienceTabList.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <ExperienceTab
                    startTime={item.startTime}
                    endTime={item.endTime}
                    company={item.company}
                    position={item.position}
                    content={item.content}
                    techList={item.techList}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
