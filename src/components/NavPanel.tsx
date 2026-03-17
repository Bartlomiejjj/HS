import React, { useEffect, useState } from "react";
import "../../styles/Hotel.css";
import "../../styles/animations.css";
import navbarIcon2 from "../../src/assets/icons/navbarIcon_2.svg";
import navbarCloseIcon from "../../src/assets/icons/navbarCloseIcon.svg";

const NavPanel = () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavbar();
    });
  });

  const media = window.matchMedia("(max-width: 800px)");

  function updateNavbar(e: any) {
    var navbar = document.getElementById("navbar");
    const isMobile = media.matches;
    if (isMobile) {
      navbar?.setAttribute("inert", "");
    } else {
      navbar?.removeAttribute("inert");
    }
  }

  media.addEventListener("change", () => {
    updateNavbar(media);
  });

  function openNavbar() {
    //leave it somewhere else? like one time loaded script?
    var navbar = document.getElementById("navbar");
    var openButton = document.getElementById("open-sidebar-button");

    openButton?.setAttribute("aria-expanded", "true");
    navbar?.classList.add("show");
    navbar?.removeAttribute("inert");
  }
  function closeNavbar() {
    var navbar = document.getElementById("navbar");
    var openButton = document.getElementById("open-sidebar-button");

    openButton?.setAttribute("aria-expanded", "false");
    navbar?.classList.remove("show");
    navbar?.setAttribute("inert", "");
  }
  useEffect(() => {
    const media = window.matchMedia("(max-width: 800px)");
    updateNavbar(media);
    media.addEventListener("change", updateNavbar);
    return () => {
      media.removeEventListener("change", updateNavbar);
    };
  }, []);
  const [path, setPath] = useState(window.location.pathname);

  // update path when back/forward buttons are pressed
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string
  ) => {
    // e.preventDefault(); // prevent page reload
    setPath(to); // update state for re-render
    window.history.pushState({}, "", to); // update URL
  };
  return (
    <div className="element">
      <button
        aria-label="open sidebar"
        aria-expanded="false"
        aria-controls="navbar"
        id="open-sidebar-button"
        className=""
        onClick={() => {
          openNavbar();
        }}
      >
        <img src={navbarIcon2} alt="otworz-pasek-nawigacyjny" />
      </button>
      <nav id="navbar">
        <button
          aria-label="close sidebar"
          id="close-sidebar-button"
          onClick={() => {
            closeNavbar();
          }}
        >
          <img src={navbarCloseIcon} alt="zamknij-pasek-nawigacyjny" />
        </button>
        <ul>
          <li className="home-li">
            <a
              href="/hotel"
              className={path === "/hotel" ? "active-link" : ""}
              onClick={(e) => handleNavClick(e, "/hotel")}
              aria-current="page"
            >
              H O T E L
            </a>
          </li>
          <li className="">
            <a
              href="/pokoje"
              className={path === "/pokoje" ? "active-link" : ""}
              onClick={(e) => handleNavClick(e, "/pokoje")}
              aria-current="page"
            >
              Pokoje
            </a>
          </li>
          <li>
            <a
              href="/restauracja"
              className={path === "/restauracja" ? "active-link" : ""}
              onClick={(e) => handleNavClick(e, "/restauracja")}
            >
              Restauracja
            </a>
          </li>
          <li>
            <a
              href="/wesela"
              className={path === "wesela" ? "active-link" : ""}
              onClick={(e) => handleNavClick(e, "/wesela")}
            >
              Wesela
            </a>
          </li>
          <li>
            <a
              href="/eventy"
              className={path === "/eventy" ? "active-link" : ""}
              onClick={(e) => handleNavClick(e, "/eventy")}
            >
              Eventy
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="accent-link"
              // className={path === "/Home" ? "active-link" : ""}
              // onClick={(e) => handleNavClick(e, "/Home")}
            >
              K O N T A K T
            </a>
          </li>
        </ul>
      </nav>
      <div
        id="overlay"
        aria-hidden="true"
        onClick={() => {
          closeNavbar();
        }}
      ></div>
    </div>
  );
};

export default NavPanel;
