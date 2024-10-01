import React from "react";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Hello! I'm a passionate web developer with expertise in both
              frontend and backend technologies. My skill set includes HTML,
              CSS, Bootstrap, Tailwind, JavaScript, React, Node.js, PHP, Java,
              Python, MySQL, PostgreSQL, and MongoDB. I enjoy creating dynamic
              and responsive web applications that provide excellent user
              experiences. Let's build something amazing together!
            </p>
            <div className="about-btn">
              <a href="/assets/download/CV_WUTTHA_THAI-211121.pdf" download>
                <button className="btn">
                  Download CV <i className="uil uil-import"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Tailwind</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>JAVA</span>
              <span>Python</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
