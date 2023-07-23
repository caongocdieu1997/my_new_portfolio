import React from "react";

interface Props {
  startTime: string;
  endTime: string;
  company: string;
  content: string;
  position: string;
  techList: string[];
}

const ExperienceTab = ({
  startTime,
  endTime,
  company,
  content,
  techList,
  position,
}: Props) => {
  return (
    <div className="experience__tab">
      <div className="experience__tab-head">
        <div className="experience__time">
          <p>
            {startTime}-{endTime}
          </p>
        </div>
        <div className="experience__company">
          <p>{company}</p>
        </div>
      </div>
      <div className="experience__tab-body">
        <div className="experience__position">
          <p>{position}</p>
        </div>
        <div className="experience__content">
          <p>{content}</p>
        </div>
        <div className="experience__technical">
          <div className="experience__technical-tech">
            <p>
              Tech:
              {techList.map((tech, index) => {
                return (
                  <>
                    &nbsp;<span key={index}>{tech}</span>&nbsp;
                  </>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTab;
