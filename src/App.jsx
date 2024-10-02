import React, { useEffect } from "react";
import Header from "./components/Header";
import FeaturedBox from "./components/FeaturedBox";
import AboutBox from "./components/AboutBox";
import ProjectsBox from "./components/ProjectsBox";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import "./App.css"; // Assuming you have a CSS file for styles

function App() {
  useEffect(() => {
    /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    function headerShadow() {
      const navHeader = document.getElementById("header");

      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    }
    window.onscroll = function () {
      headerShadow();
    };

    /* ----- CHANGE ACTIVE LINK ----- */

    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    }

    window.addEventListener("scroll", scrollActive);
    /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    /* -- HOME -- */
    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });

    /* -- PROJECT BOX -- */
    sr.reveal(".project-box", { interval: 200 });

    /* -- HEADINGS -- */
    sr.reveal(".top-header", {});

    /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

    /* -- ABOUT INFO & CONTACT INFO -- */
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    /* -- ABOUT SKILLS & FORM BOX -- */
    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 100 });
    srRight.reveal(".form-control", { delay: 100 });

    /* ----- TYPING EFFECT ----- */
    const typingEffect = new Typed(".typedText", {
      strings: ["Lecturer", "Developer", "Researcher"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <FeaturedBox />
        <AboutBox />
        <ProjectsBox />
        <ContactBox />
      </main>
      <Footer />
      {/* Include external scripts */}
      {/* <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
      <script src="https://unpkg.com/scrollreveal"></script>
      <script src="assets/js/main.js"></script> */}
    </div>
  );
}

export default App;
