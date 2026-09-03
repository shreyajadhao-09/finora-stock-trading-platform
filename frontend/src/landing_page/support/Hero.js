import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" id="TrackTag">Track Tickets</a>
      </div>

      <div className="row ps-5 pe-5 m-3 pb-3">
        <div className="col-6 ps-5 pe-5 pt-2 pb-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O, why is my older getting rejected.." className="mb-3" />
          <br />
          <a href="">Track account opening</a> &nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;
          <a href="">Kite user manual</a>&nbsp;&nbsp;
        </div>
        <div className="col-6 ps-5 pe-0 pt-2 pb-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a style={{lineHeight: "2.5"}} href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a style={{lineHeight: "2.5"}} href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
