// import "../styles/style.css";
import { useEffect } from "react";
import RoomPage from "./Pages/Room";
import HomePage from "./Pages/Home";
import NavPanel from "./components/NavPanel";
import Footer from "./components/Footer";
import MapsInfo from "./components/Maps";

function App() {
  useEffect(() => {
    // Animate panels
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              panel.classList.add("animate");
              observer.unobserve(panel);
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(panel);
    });

    // Animate boxes inside panels
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              box.classList.add("animate");
              observer.unobserve(box);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(box);
    });

    const panelsLeft = document.querySelectorAll(".panel-left");
    panelsLeft.forEach((box) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              box.classList.add("animate");
              observer.unobserve(box);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(box);
    });
    const panelsRight = document.querySelectorAll(".panel-right");
    panelsRight.forEach((box) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              box.classList.add("animate");
              observer.unobserve(box);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(box);
    });
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);
  function getPathname() {
    return window.location.pathname;
  }
  console.log(window.location.pathname);
  function reLinker(pathname: string) {
    switch (pathname.toLowerCase()) {
      case "/hotel":
        return <HomePage></HomePage>;
      case "/pokoje":
        return <RoomPage></RoomPage>;
      default:
        window.history.replaceState({}, "", "/hotel"); // no reload
        return <HomePage></HomePage>;
    }
  }
  return (
    <>
      <NavPanel></NavPanel>
      {reLinker(getPathname())}
      <MapsInfo></MapsInfo>
      <Footer></Footer>
    </>
  );
}

export default App;
