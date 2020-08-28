import React from "react";
import cta from "../../assets/cta.png";
export default ({ aboutMe }) => {
  const TextSection = ({ sectionTitle, details, paragraphStyle }) => {
    const header = <h3>{sectionTitle}</h3>;
    const paragraphs = details.map((entry) => {
      return <p style={paragraphStyle}>{entry}</p>;
    });

    return (
      <React.Fragment>
        {header}
        {paragraphs}
      </React.Fragment>
    );
  };

  const BlogSection = () => {
    return (
      <div class="blog">
        <div class="video">
          <div class="embed-container">
            <iframe
              title="My Friend Book"
              src="https://www.youtube.com/embed/1n2j-ixO66U"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <p>
            Here is a presentation video of me explaining and demonstrating a
            course project at Auburn.
          </p>
          <a href="https://www.codewithdom.com">
            <img
              alt="code with dom"
              src={cta}
              style={{ width: "100%", cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div class="about-wrapper">
      <div class="about-me">
        <TextSection
          sectionTitle={"About Me"}
          details={aboutMe.bio}
          paragraphStyle={{ textAlign: "left" }}
        />
        <TextSection
          sectionTitle={"What I Know"}
          details={aboutMe.whatIKnow}
          paragraphStyle={{ textAlign: "left" }}
        />
      </div>
      <BlogSection />
    </div>
  );
};
