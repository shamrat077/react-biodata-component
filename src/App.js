import logo from "./logo.svg";
import "./App.css";
import BioData from "./components/BioData";
import AcademicInfo from "./components/AcademicInfo";
import Interest from "./components/Interest";
import Skills from "./components/Skills";
import SocialInfo from "./components/SocialInfo";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <div className="App">
      <BioData name="shamrat" />
      <hr />
      {}
      <PersonalInfo
        name="shamrat"
        number="+8801781821292"
        email="shamrat077@gmail.com"
      />
      <hr />
      <SocialInfo github="github/shamrat077" linkedIn="linkedin/shamrat077" />
      <hr />
      <AcademicInfo ssc="2011" hsc="2014" bsc="2019" />
      <hr />
      <Skills skills={["html", "css", "javaScript"]} />
      <hr />
      <Interest interest={["reading", "coding", "traveling"]} />
    </div>
  );
}

export default App;
