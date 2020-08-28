import mfb from "../../assets/mfb.png";
import crystalclearpng from "../../assets/crystalclearpng.png";
import little_diary from "../../assets/little_diary.png";
import MyFriendBookDetails from "./project/MyFriendBook";


class ProjectDescTitles {
  constructor() {
    let titles = Object.freeze({
      whyCreated: "Why I created this project",
      howCreated: "How I created this project",
      challenges: "Challenges",
      howToImprove: "How I want to improve this project",
      vid: "Demo Video",
      liveDemo: "Live Demo"
    });
    this.descTitles = new Map();
    Object.entries(titles).map(([key, value]) => {
      return this.descTitles.set(key, value);
    });
  }
  getDesc(key) {
    return this.descTitles.get(key) || "";
  }
}
export const projectDescTitles = new ProjectDescTitles();

//
class Project {
  constructor(title = "", info = "", route = "", thumbnail = "", details = null) {
    this.title = title;
    this.info = info;
    this.route = route;
    this.thumbnail = thumbnail;
    this.headerImage = "";
    this.whyCreated = "";
    this.howCreated = "";
    this.challenges = "";
    this.howToImprove = "";
    this.notes = "";
    this.vid = "";
    this.liveDemo = "";
    if (details != null) {
      this.setup(details);
    }
  }

  setup(details) {
    this.whyCreated = details.whyCreated;
    this.howCreated = details.howCreated;
    this.challenges = details.challenges;
    this.howToImprove = details.howToImprove;
    this.notes = details.notes;
    this.vid = details.vid;
    this.liveDemo = details.liveDemo;
  }
  // setWhyCreated(why) {
  //   this.whyCreated = why;
  // }

  // setHowCreated(how) {
  //   this.howCreated = how;
  // }

  // setChallenges(chl) {
  //   this.challenges = chl;
  // }

  // setHowToImprove(imp) {
  //   this.howToImprove = imp;
  // }

  // setNotes(notes) {
  //   this.notes = notes;
  // }

  // setDemoVideo(vid) {
  //   this.video = vid;
  // }
}

let myFriendBook = new Project(
  "My Friend Book",
  "Personal Web App for storing information about close friends.",
  "my-friend-book",
  mfb,
  MyFriendBookDetails
);

let crystalClear = new Project(
  "Crystal Clear",
  "Minimalistic UI example.",
  "crystal-clear",
  crystalclearpng
);

let littleDiary = new Project(
  "Little Diary",
  "A personal diary Web App.",
  "little-diary",
  little_diary
);


export default { myFriendBook, crystalClear, littleDiary };
