import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Index from "./home";
import ProjectPage from "./pages/ProjectPage";
import data from "./data";

function App() {
  let { projectDescTitles } = data.projects;
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/projects/:id"
            render={(props) => (
              <ProjectPage
                {...props}
                data={data}
                projectDescTitles={projectDescTitles}
              />
            )}
          ></Route>
          <Route path="/">
            <Index data={data} />
          </Route>
        </Switch>
      </div>
      {/** The coool thing about this footer placement is that 
       * it will ALWAYS be rendered no matter what page you are on. 
       * */}
      <footer>
        <div class="footer-div">
          <div class="copy">&copy; Dominique Duncan 2020</div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
