import React from "react";
import online from "./assets/images/icon-online.svg";
import simple from "./assets/images/icon-budgeting.svg";
import fast from "./assets/images/icon-onboarding.svg";
import open from "./assets/images/icon-api.svg";

const Section1 = () => {
  return (
    <section id="section">
      <div className="div-con">
        <div>
          <div className="first-div">
            <h3>Why choose Easybank?</h3>
            <p className="p">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your financies like nevr before
            </p>
          </div>
          <div className="second-div">
            <div className="card">
              <img src={online} alt="" />
              <h4>Online Banking</h4>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world
              </p>
            </div>
            <div className="card">
              <img src={simple} alt="" />
              <h4>Simple Budgeting</h4>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you'er close to hitting your limits.
              </p>
            </div>
            <div className="card">
              <img src={fast} alt="" />
              <h4>Fast Onboarding</h4>
              <p>
                We don't do branches. Open your account in minutes online and
                start taking control of yopur finances rigt away
              </p>
            </div>
            <div className="card">
              <img src={open} alt="" />
              <h4>Open API</h4>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. tracking your money has never been easier
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
