import React from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const SectionWrapper = (props) => {
  console.log(props.styling);
  return (
    <section className={`${props.styling}`}>
      <div className="base-container">{props.children}</div>
    </section>
  );
};

function Index({ data }) {
  const { socials, interests, aboutMe, projects } = data;
  console.log(data);
  return (
    <React.Fragment>
      {/**
       * The below is an example of 2 different ways
       * you can render components. I will go into more
       * detail later, as I can imagine that you will likely
       * have questions when you see this.
       * https://reactjs.org/docs/composition-vs-inheritance.html
       */}

      {/**
       * example 1
       */}
      <SectionWrapper styling="s1">
        <Intro socials={socials} />
        <Main interests={interests} />
      </SectionWrapper>

      {/**
       * example 2
       */}
      <section className="s2">
        <div className="base-container">
          <About aboutMe={aboutMe} />
        </div>
      </section>

      {/** The best practice would be example 1, so we're going to stick with that  */}

      <SectionWrapper>
        <Projects projects={projects} />
      </SectionWrapper>

      <SectionWrapper styling="s2">
        <Contact />
      </SectionWrapper>

    </React.Fragment>
  );
}

export default Index;
