import React, { useEffect, useState } from "react";
import "../../styles/Hotel.css";
import "../../styles/animations.css";
import "../../styles/navigationPanel.css";
import navbarIcon2 from "../../src/assets/icons/navbarIcon_2.svg";
import navbarIcon2_black from "../../src/assets/icons/navbarIcon_2_black.png";
import navbarCloseIcon from "../../src/assets/icons/navbarCloseIcon.svg";
import slogo from "../../src/assets/logos/mlogo.png";
type color = {
  blackColor: boolean;
};

const NavPanel = ({ blackColor }: color) => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavbar();
    });
  });

  const media = window.matchMedia("(max-width: 800px)");

  function updateNavbar(media: any) {
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
  const [path, setPath] = useState(window.location.hash);

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
    e.preventDefault(); // prevent page reload
    setPath("/HS/#" + to); // update state for re-render
    window.history.pushState({}, "", "/HS/#" + to); // update URL
    window.location.reload();
  };
  // const scrollToId = (id: string) => {
  //   setTimeout(() => {
  //     document.getElementById(id)?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }, 50);
  // };
  return (
    <div className="element">
      <button
        aria-label="open sidebar"
        aria-expanded="false"
        aria-controls="navbar"
        id="open-sidebar-button"
        className=""
        style={{ color: "black" }}
        onClick={() => {
          openNavbar();
        }}
      >
        <img
          src={blackColor ? navbarIcon2_black : navbarIcon2}
          alt="otworz-pasek-nawigacyjny"
        />
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
          <li
            title="przejdź do strony hotelu Sylwia"
            aria-label="przejdź do strony hotelu Sylwia"
            className="home-li"
          >
            <a
              href="#/hotel"
              className={path && path.includes("/hotel") ? "active-link" : ""}
              onClick={(e) => handleNavClick(e, "/hotel")}
              aria-current="page"
            >
              {/* <img src={logo} alt="Hotel Sylwia" width={"120vw"} /> */}
              <img
                src={slogo}
                alt="Hotel Sylwia"
                width={"30vw"}
                // height={"30vh"}
              />
            </a>
          </li>
          <li
            title="pokoje oraz strefa relaksu"
            aria-label="przejdź do strony pokoi oraz strefy relaksu hotelu Sylwia"
            className=""
          >
            <a
              href="#/pokoje"
              className={path && path.includes("/pokoje") ? "active-link" : ""}
              onClick={(e) => handleNavClick(e, "/pokoje")}
              aria-current="page"
            >
              Pokoje & Relaks
            </a>
          </li>
          <li>
            <a
              title="Restauracja oraz Sale"
              aria-label="przejdź do strony restauracji oraz sali hotelu Sylwia"
              href="#/restauracja"
              className={
                path && path.includes("/restauracja") ? "active-link" : ""
              }
              onClick={(e) => handleNavClick(e, "/restauracja")}
            >
              Restauracja & Sale
            </a>
          </li>
          <li>
            <a
              title="Wesele oraz Plener"
              aria-label="przejdź do strony Weselnej oraz plenerowej hotelu Sylwia"
              href="#/wesela"
              className={path && path.includes("wesela") ? "active-link" : ""}
              onClick={(e) => handleNavClick(e, "/wesela")}
            >
              Wesela & Plener
            </a>
          </li>
          <li>
            <a
              title="wydarzenia oraz parking dla Kamperów"
              aria-label="przejdź do strony z wydarzeniami oraz parkingu dla kamperów hotelu Sylwia"
              href="#/wydarzenia"
              className={
                path && path.includes("/wydarzenia") ? "active-link" : ""
              }
              onClick={(e) => handleNavClick(e, "/wydarzenia")}
            >
              Wydarzenia & Kampery
            </a>
          </li>
          <li>
            <a
              title="Kontakt z hotelem"
              aria-label="przejdź do kontaktu z hotelem Sylwia"
              style={{ cursor: "pointer" }}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
              className="accent-link"
              // className={path === "/Home" ? "active-link" : ""}
              // onClick={(e) => handleNavClick(e, "/Home")}
            >
              KONTAKT
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
