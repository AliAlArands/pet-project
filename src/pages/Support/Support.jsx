import React from "react";
import "./Support.css";
import Navbar from "../../components/Navbar/Navbar";
import Navigation from "../../components/Navigation/Navigation";
function Support() {
  return (
    <div>
      <Navbar />
      <Navigation />
      <div className="background-gc support-background contain">
        <div className="support">
          <h1 className="title large-title">Technical support</h1>
          <p className="support-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem
            hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id
            cursus dolor urna. Aliquam diam integer vitae eget.
          </p>
          <form action="" className="w-100 d-flex justify-content-center align-items-center flex-column">
            <input type="text" className="support-input" />
            <button className="btn btn-primary submit-btn pages-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
