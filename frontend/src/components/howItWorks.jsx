import React from "react";
import githubani from "./../assets/githubani.gif";
import slither from "./../assets/slither2.png";
// import LightContainer from "./LightContainer";
import lighthouse from "./../assets/lighthouse.png";
import arrow from "./../assets/curved-arrow.png";
import Sarrow from "./../assets/straight-arrow.png";
import "./working.css";
function HowItWorks() {
  function viewTutor() {
    const howMain = document.querySelector(".how-main");
    howMain.style.height = "100vh";
    howMain.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="how-main" id="how-main">
      <div className="Sub-container">
        <button
          onClick={() => {
            viewTutor();
          }}
          className="howTrigger"
        >
          <h2>How Lumen Safe works?</h2>
        </button>
        <br />
        <br />
        <div className="tutorVid">
          <div className="codeTransfer">
            <img className="arrow1" src={arrow} alt="hi" />
            <span className="yourCode">Your Code</span>
            <div className="github">
              <img
                className="github-icon"
                // src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                src={githubani}
                alt=""
                srcset=""
              />
              <span>Github</span>
            </div>
            <img className="arrow2" src={Sarrow} alt="" />
            <div className="slither">
              <img className="arrow3" src={arrow} alt="" />
              <span id="cicd">
                Continuous <span id="cicd-text">Integration</span>
              </span>
              <img className="slither-logo" src={slither} alt="" srcset="" />
              <img src={arrow} alt="" className="arrow4" />
            </div>
          </div>
          <div className="lighthouse">
            <img className="lighthouse-pic" src={lighthouse} />

            <span>Upload the compressed files to LightHouse</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
