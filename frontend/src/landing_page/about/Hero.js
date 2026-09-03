import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-3">
        <h1 className="fs-3 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1em" }}
      >
        <div className="col-6 p-5">
          <p>
            Finora is a full-stack MERN stock trading platform developed to
            provide a modern, secure, and user-friendly investment experience.
            The platform is designed with a clean interface that makes stock
            trading simple and accessible.
          </p>
          <p>
            Built using MongoDB, Express.js, React.js, and Node.js, Finora
            integrates powerful backend services with an interactive frontend to
            deliver a smooth and responsive user experience.
          </p>
          <p>
            The platform includes features such as user authentication,
            portfolio management, market watchlists, stock dashboards, and
            responsive design, ensuring a complete trading application.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Finora follows modern web development practices with a scalable MERN
            architecture, secure authentication, RESTful APIs, and efficient
            database management.
          </p>
          <p>
            The project demonstrates full-stack development skills, including
            frontend design, backend development, database integration, and
            deployment-ready application structure.
          </p>
          <p>
            Finora reflects a commitment to building reliable, high-performance
            web applications while delivering an intuitive and engaging
            experience for users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
