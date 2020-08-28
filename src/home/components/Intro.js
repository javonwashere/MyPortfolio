import React from "react";

export default ({ socials }) => {

  let socialLinks = Object.entries(socials).map(([network, url]) => {
    return (
      <a href={`${url}`}>
        <i class={`fab fa-${network}`}></i>
      </a>
    );
  });

  return (
    <div class="intro-wrapper">
      <h1 class="greeting">
        I'm Dominique,
        <span class="intro">
          I like to<span class="emphasis"> build</span>
          <br />
          things with code.
        </span>
        <div class="socials-design">
          <hr id="detail" />
          <div class="socials">
            {socialLinks}
          </div>
        </div>
      </h1>
    </div>
  );
};
