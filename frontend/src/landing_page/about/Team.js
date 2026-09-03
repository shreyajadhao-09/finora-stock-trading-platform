import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>

      <div
        className="row p-4 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1em" }}
      >
        <div className="col-6 p-4 text-center">
          <img
            src="media/images/founder.jpg"
            style={{ width: "55%", borderRadius: "100%" }}
          />
          <h4 className="mt-4">Shreya Jadhao</h4>
          <h6>Founder & CEO</h6>
        </div>
        <div className="col-6 p-4 ">
          <p>
            Shreya built Finora in 2026 as a full-stack MERN stock trading
            platform inspired by Zerodha. The project was developed using
            MongoDB, Express.js, React.js, and Node.js, featuring a responsive
            user interface, secure backend integration, user authentication, and
            seamless navigation.
          </p>
          <p>
            She is pursuing a Bachelor's degree in Computer Science and
            Engineering at Sipna College of Engineering and Technology,
            Amravati.
          </p>
          <p>
            She is passionate about web development, full-stack technologies,
            and building modern financial applications.
          </p>
          <p>
            Connect on <a style={{textDecoration: "none"}} href="https://github.com/shreyajadhao-09">GitHub </a>{" "}
            /{" "}
            <a href="https://linkedin.com/in/shreya-jadhao-287498257" style={{textDecoration: "none"}}>
              LinkedIn
            </a>
            /{" "}
            <a href="https://shreyajadhao-09.github.io/shreya_portfolio/" style={{textDecoration: "none"}}>
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
