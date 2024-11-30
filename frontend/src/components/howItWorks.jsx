import React, { useEffect, useState } from "react";
import lumenSafe from "./../assets/lumen.gif";
import polygon from "./../assets/polygon.webp";
import githubani from "./../assets/githubani.gif";
import slither from "./../assets/slither2.png";
// import LightContainer from "./LightContainer";
import lighthouse from "./../assets/lighthouse.png";
import arrow from "./../assets/curved-arrow.png";
import Sarrow from "./../assets/straight-arrow.png";
import "./working.css";
function HowItWorks() {
  const [text, setText] = useState("Integration");
  const [fadeOut, setFadeOut] = useState(false);
  const messages = ["Scanning", "Security", "Integration"];
  let currentIndex = 0;
  // const cicdElem = document.querySelector("#cicd-text");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeOut(true);

      setTimeout(() => {
        setText(messages[currentIndex]);
        currentIndex = (currentIndex + 1) % messages.length;
        setFadeOut(false);
      }, 1000); // Match this timeout with the CSS transition duration
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  function viewTutor() {
    const howMain = document.querySelector(".how-main");
    howMain.style.height = "100vh";
    const tutorCont = document.querySelector(".tutorVid");
    tutorCont.style.display = "block";
    setTimeout(() => {
      tutorCont.style.opacity = "1";
    }, 500);
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
                Continuous{" "}
                <span id="cicd-text" className={fadeOut ? "fade-out" : ""}>
                  {text}
                </span>
              </span>
              <img className="slither-logo" src={slither} alt="" srcset="" />
              <img src={arrow} alt="" className="arrow4" />
            </div>
          </div>
          <div className="lighthouse">
            <img className="lighthouse-pic" src={lighthouse} />

            <span>Upload the compressed files to LightHouse</span>
            <img src={arrow} alt="" className="arrow5" />
          </div>
          <div className="polygon">
            <img src={polygon} className="polygon-logo" alt="" srcset="" />
            <span>
              CID of your backup stored in Polygon Network (Added Security
              Layer)
            </span>
          </div>
          <img src={arrow} alt="" className="arrow6" />
          <div className="lumen">
            <img src={lumenSafe} alt="" className="lumen-logo" srcset="" />
            <span>Your Backups Fetched By Lumen Safe</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
