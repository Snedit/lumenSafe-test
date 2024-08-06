import React from "react";
function HowItWorks() {
  function viewTutor() {
    const howMain = document.querySelector(".how-main");
    howMain.style.height = "100vh";
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
          How it works?
        </button>
      </div>
    </section>
  );
}

export default HowItWorks;
