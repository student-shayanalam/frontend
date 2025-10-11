import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center fs-4 mb-3 mb-md-5">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.6", fontSize: "1.1em" }}
      >
        <div className="col-12 col-md-6 p-3 p-md-4 text-center">
          <img
            src="media/images/shayanAlam.jpeg"
            alt="Shayan Alam"
            className="img-fluid"
            style={{ borderRadius: "100%", width: "55%", maxWidth: "250px" }}
          />
          <h4 className="mt-3 fs-5 fs-md-4">Shayan Alam</h4>
          <h6 className="fs-6 fs-md-5">Frontend Developer</h6>
        </div>

        <div className="col-12 col-md-6 p-3 p-md-4" style={{ fontSize: "0.9em" }}>
          <p>
            Shayan is a Frontend Developer from Korba, Chhattisgarh, currently
            working and learning in a small IT company. He has mastered the basics
            of HTML, CSS, JavaScript, React.js, and Git/GitHub, and is now
            exploring Node.js, Express, and the MERN stack.
          </p>

          <p>
            With a strong foundation in mathematics and a problem-solving mindset,
            Shayan has built and deployed multiple learning projects including a
            Weather App, a Zerodha clone, a Zoom-like WebRTC project, and a
            ChatGPT integration using OpenAI APIs.
          </p>

          <p>
            He is also developing a School Management System to automate the
            workflow of his family’s school, NEW STAR ENGLISH SCHOOL, using
            TypeScript, Node.js, and Express. His goal is to bring digital
            solutions to education in small towns like Korba.
          </p>

          <p>
            When not coding, Shayan enjoys teaching mathematics and exploring new
            ideas to make school management easier through automation.
          </p>

          <p>
            Connect on{" "}
            <a href="#">Homepage</a> / <a href="#">LinkedIn</a> /{" "}
            <a href="#">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
