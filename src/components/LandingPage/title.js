import React, { Component } from "react";
import "../../css/title.css";
export default class title extends Component {
  render() {
    return (
      <div>
        <section className="titlesection">
          <div className="logon-container">
            <div className="logintext">
              <a className="loginlink" href="/login">
                Login
              </a>
            </div>
            <br />
            <a className="signuplink" href="/signup">
              Sign Up
            </a>
          </div>
          <div id="LMMtitle">
            LogMy
            <span className="blue-accents">
              <span className="purple-underline">
                <span className="titleshadow">Motion</span>
              </span>
            </span>
          </div>
        </section>
        <section className="groupmembers">
          <div id="pll"> by Pretty Little Leetcoders</div>
        </section>
        <section className="trynowsection">
          <div className="trynowtext">
            <a className="trynowlink" href="/posenetdemo">
              Try Now!
            </a>
          </div>
        </section>
      </div>
    );
  }
}