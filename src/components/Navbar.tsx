import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";
import { smootherState } from "./utils/smootherState";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    smootherState.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2.5,
      smoothTouch: 0.1,
      speed: 1.2,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smootherState.current.scrollTop(0);
    smootherState.current.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (smootherState.current) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smootherState.current.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      if (smootherState.current) {
        ScrollSmoother.refresh(true);
      }
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          ARM
        </a>
        <a
          href="mailto:rahman14122004@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          rahman14122004@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
            <button
              onClick={toggleTheme}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                padding: "0"
              }}
              aria-label="Toggle Theme"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
