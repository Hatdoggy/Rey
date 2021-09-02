import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Logo from "./Logo.js";
import { useMediaQuery } from "react-responsive";
import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import des from "./Cloud.js";

const SideNav = (prop) => {
  return (
    <aside className="flex flx-col h-100 al-flx-e jc-flx-eve w-20 fadeInDown">
      <Router>
        <h4 className="mont bold w-50">
          <Link onClick={() => prop.res()} to="/">
            About
          </Link>
        </h4>
        <h4 className="mont bold w-50">
          <Link onClick={() => prop.res()} to="/proj">
            Projects
          </Link>
        </h4>
        <h4 className="mont bold w-50">
          <Link onClick={() => prop.res("Contact")} to="/cont">
            Contact
          </Link>
        </h4>
      </Router>
    </aside>
  );
};

export default SideNav;

export const Header = (prop) => {
  const mobile = useMediaQuery({
    query: "(max-width: 800px)",
  });

  return mobile ? (
    <header className="flex al-flex bg-white p-10 shadow front-1 fadeInDown pos-stk top-0">
      <Logo />
      <h4 className="p-10 ml-auto lato bold fade_5">{prop.cur}</h4>
      <FontAwesomeIcon
        icon="bars"
        className="tech ml-2"
        onClick={() => prop.menu(true)}
      />
    </header>
  ) : (
    <header className="flex jc-flex al-flex w-100 pos-fix shadow front-1 bg-white p-10 fadeInDown top-0">
      <Router>
        <h4 className="lato cursor vio">
          <Scroll to="main-top" spy={true} smooth={true}>
            Top
          </Scroll>
        </h4>
        <h4 className="lato cursor vio ml-2">
          <Link onClick={() => prop.ret("/")} replace to="/">
            About me
          </Link>
        </h4>
        <Logo />
        <h4 className="lato cursor vio ml-2">
          <Link onClick={() => prop.ret("/proj")} replace to="/proj">
            Projects
          </Link>
        </h4>
        <h4 className="lato cursor vio ml-2">
          <Link onClick={() => prop.ret("/cont")} replace to="/cont">
            Contact me
          </Link>
        </h4>
      </Router>
    </header>
  );
};

export const Nav = (prop) => {
  const transfer = (url) => {
    window.location.href = url;
  };

  return (
    <nav className="w-100 flex jc-flex al-flex h-100 frnt-top bg-white pos-fix fade_5">
      <FontAwesomeIcon
        icon="times-circle"
        className="exit pos-abs fade_5"
        onClick={() => prop.menu(false)}
      />

      <div className="flex flx-col jc-flex h-100 w-100">
        <Router>
          <h4 className="lato bold cursor vio mt-5 al-ce">
            <Link onClick={() => prop.ret("About")} replace to="/">
              About me
            </Link>
          </h4>
          <h4 className="lato bold cursor vio mt-5 al-ce">
            <Link onClick={() => prop.ret("Projects")} replace to="/proj">
              Projects
            </Link>
          </h4>
          <h4 className="lato bold cursor vio mt-5 al-ce">
            <Link onClick={() => prop.ret("Contact")} replace to="/cont">
              Contact me
            </Link>
          </h4>

          <div className="flex jc-flex w-100 mt-5 nav-tech">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="tech ml-in"
              onClick={() => transfer("https://github.com/Hatdoggy")}
            />
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="tech ml-5"
              onClick={() =>
                transfer(
                  "https://www.linkedin.com/in/rey-louis-ondap-7282991ba"
                )
              }
            />
            <FontAwesomeIcon
              icon={["fab", "google"]}
              className="tech ml-5"
              onClick={() =>
                transfer(
                  "https://mail.google.com/mail/u/0/?fs=1&to=ondaprey@gmail.com&tf=cm"
                )
              }
            />
          </div>
        </Router>
      </div>
    </nav>
  );
};

export const Footer = (prop) => {
  const redirect = (url) => {
    window.location.href = url;
  };

  const filter = (event) => {
    let targets = document.querySelectorAll("." + event);
    let parent = document.querySelector(".grid");

    parent.innerHTML = "";

    if (event === "reset") {
      des.forEach((elem, ndx) => {
        let newNode = document.createElement("img");
        newNode.src = elem.link;
        newNode.alt = elem.title;
        newNode.className = elem.type;
        newNode.style.webkitAnimation = `fadeInDown ${
          0.5 + ndx / 10
        }s ease-in-out`;
        newNode.style.animation = "fadeInDown ${.5+ndx}s ease-in-out";
        newNode.onclick = () => prop.set(true, ndx);
        parent.appendChild(newNode);
      });
    } else {
      let arr = des.filter((elem) => elem.id === event);
      arr.forEach((elem, ndx) => {
        let newNode = document.createElement("img");
        newNode.src = elem.link;
        newNode.alt = elem.title;
        newNode.className = "filt fit";
        newNode.style.webkitAnimation = `fadeInDown ${
          0.5 + ndx / 10
        }s ease-in-out`;
        newNode.style.animation = "fadeInDown ${.5+ndx}s ease-in-out";
        newNode.onclick = () => prop.set(true, ndx, elem.id);
        parent.appendChild(newNode);
      });
    }
  };

  return (
    <footer className="flex jc-flx-eve al-flex p-10 front bg-white pos-stk bot-0 fadeInLeft hideme">
      {prop.des && (
        <div className="flex jc-flx-eve w-100">
          <FontAwesomeIcon
            className="tech1"
            icon="tshirt"
            onClick={() => filter("shirt")}
          />
          <FontAwesomeIcon
            className="tech1"
            icon="coffee"
            onClick={() => filter("mug")}
          />
          <FontAwesomeIcon
            className="tech1"
            icon="book-open"
            onClick={() => filter("print")}
          />
          <FontAwesomeIcon
            className="tech1"
            icon="pencil-alt"
            onClick={() => filter("illus")}
          />
          <FontAwesomeIcon
            className="tech1"
            icon="redo-alt"
            onClick={() => filter("reset")}
          />
        </div>
      )}

      {!prop.web && !prop.des && (
        <Router>
          <div className="flex jc-flx-eve w-100 fade_5">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className="tech1"
              onClick={() => redirect("https://www.facebook.com/rey.ondap.77/")}
            />
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="tech1"
              onClick={() => redirect("https://www.instagram.com/onda_plor/")}
            />
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="tech1"
              onClick={() =>
                redirect(
                  "https://www.linkedin.com/in/rey-louis-ondap-7282991ba"
                )
              }
            />
          </div>
        </Router>
      )}
    </footer>
  );
};

export const NewNav = () => {
  return (
    <nav className="flex jc-flex al-flex p-20 w-100 popShdw">
      <div className="flex jc-flex al-flex">
        <Logo />
        <FontAwesomeIcon icon="bars" className="tech ml-2" clr-wht />
      </div>
    </nav>
  );
};
