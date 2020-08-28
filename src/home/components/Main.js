import React from "react";
import headshot1_square from "../../assets/headshot1_square.jpg";
import resume from "../../assets/resume.pdf";

function Main({ interests }) {
  

  let NavWrapper = () => {
    return (
      <div class="nav-wrapper">
        <div class="controls-wrapper">
          <div id="dot"></div>
          <i class="fas fa-caret-left fa-lg"></i>
          <i class="fas fa-caret-right fa-lg"></i>
          <i class="fas fa-home"></i>
          <i class="fas fa-star"></i>
        </div>
        <ul id="navigation">
          <li>
            <a href={resume} target="_blank">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact-form">Contact</a>
          </li>
        </ul>
      </div>
    );
  };

  let LeftColumn = () => {
    return (
      <div class="left-column">
        <img id="profile-pic" src={headshot1_square} alt="Dominique Duncan" />
      </div>
    );
  };

  
  let InterestsList = () => {
    const listItems = interests.map((interest) => <li>{interest}</li>);
    return <ul id="preview-list">{listItems}</ul>;
  };

  let RightColumn = () => {
    return (
      <div class="right-column">
        <div id="preview-shadow">
          <div id="preview-nav">
            {" "}
            <i class="fas fa-times"></i>
          </div>
          <div id="preview">
            <h4 style={{ textAlign: "center", paddingTop: "5px" }}>
              I like to...
            </h4>
            <InterestsList />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="main-wrapper">
      <NavWrapper />
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default Main;
