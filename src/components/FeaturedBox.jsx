import avatar from "../assets/images/avatar.jpg";
import cv from "../assets/download/CV_WUTTHA.pdf";
const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Worachet Uttha</span>
        </div>
        <div className="featured-name">
          <p>
            I'm <span className="typedText"></span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Currently I'm a lecturer at Software Engineering Program, Faculty of
            Science and Technology , Nakhon Pathom Rajabhat University, I'm
            interested in Specification and Verification of access control
            model, Security policies, Web Service, SOA, Distributed System and
            Software Engineering.
          </p>
        </div>
        <div className="featured-text-btn">
          <a href={cv} download>
            <button className="btn">
              Download CV <i className="uil uil-file-alt"></i>
            </button>
          </a>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/w.u.510/" target="_blank">
              <i className="uil uil-instagram"></i>
            </a>
          </div>

          <div className="icon">
            <a href="https://www.facebook.com/worachet.uttha" target="_blank">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/Wuttha" target="_blank">
              <i className="uil uil-github-alt"></i>
            </a>{" "}
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
