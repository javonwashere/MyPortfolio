import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../home/index";
import { Link } from "react-router-dom";

export default ({ match, data, projectDescTitles }) => {
  let id = match.params.id;
  let project = Object.values(data.projects).filter((obj) => obj.route === id);

  let {
    title,
    whyCreated,
    howCreated,
    challenges,
    howToImprove,
    vid,
    liveDemo,
    notes,
    route,
    thumbnail,
  } = project[0];

  console.log(project[0]);

  const Title = ({ title }) => {
    return (
      <div class="intro-wrapper">
        <div class="greeting">
          <h1>{title === null ? title : "null"}</h1>
        </div>
      </div>
    );
  };

  const HeroImage = ({ headerImage, route }) => {
    return (
      <div class="screenshot-container">
        <img class="screenshots" src={headerImage} alt={route} />
      </div>
    );
  };

  const Description = ({ text, title }) => {
    if (text !== "") {
      let foundTitle = Object.keys(project[0]).filter((key) => {
        return project[0][key] === text;
      });
      console.log(foundTitle);
      return (
        <div>
          <h3>
            {title === undefined
              ? projectDescTitles.getDesc(`${foundTitle}`)
              : title}
          </h3>
          <p>{text}</p>
        </div>
      );
    }
    return <></>;
  };

  const Video = ({ text }) => {
    if (text !== "") {
      let foundTitle = Object.keys(project[0]).filter((key) => {
        return project[0][key] === text;
      });
      console.log(foundTitle);
      return (
        <div>
          <h4>
            {title === undefined
              ? projectDescTitles.getDesc(`${foundTitle}`)
              : title}
          </h4>
          <div className="video">
            <div className="embed-container">
              <iframe
                title={foundTitle}
                src={text}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      );
    }
    return <></>;
  };

  const LiveDemo = ({ text, title }) => {
    if (text !== "") {
      let foundTitle = Object.keys(project[0]).filter((key) => {
        return project[0][key] === text;
      });
      console.log(foundTitle);
      return (
        <div>
          <h4>
            <Link to={text}>
              {title === undefined
                ? projectDescTitles.getDesc(`${foundTitle}`)
                : title}
            </Link>
          </h4>
        </div>
      );
    }
    return <></>;
  };

  return (
    <React.Fragment>
      <SectionWrapper>
        <Title title={title} />
        <HeroImage headerImage={thumbnail} alt={route} />
      </SectionWrapper>
      <SectionWrapper styling="s2">
        <div class="base-container info">
          <div class="descriptions">
            <Description text={whyCreated} />
            <Description text={howCreated} />
            <Description text={challenges} />
            <Description text={challenges} />
            <Description text={howToImprove} />
            <Description text={notes} />
            <Video text={vid} />
            <LiveDemo text={liveDemo} />
            <div class="info-nav">
              <Link to="/">Go back</Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </React.Fragment>
  );
};
