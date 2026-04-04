// import "../styles/style.css";
import { useEffect } from "react";
import RoomPage from "./Pages/Room";
import HomePage from "./Pages/Home";
import NavPanel from "./components/NavPanel";
import Footer from "./components/Footer";
import RoomsAll from "./Pages/RoomsAll";
import { RestaurantPage } from "./Pages/Restaurant";
import { WeddingPage } from "./Pages/Wedding";
import { EventPage } from "./Pages/Events";

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
      case "/hs/hotel":
        return (
          <>
            {/* <NavPanel blackColor={true}></NavPanel> */}
            <HomePage></HomePage>;
          </>
        );
      case "/hs/#/pokoje":
        return (
          <>
            <NavPanel blackColor={false}></NavPanel>
            <RoomPage></RoomPage>
          </>
        );
      case "/hs/#/pokoje/szczegoly":
        return (
          <>
            <NavPanel blackColor={true}></NavPanel>
            <RoomsAll></RoomsAll>
          </>
        );
      case "/hs/#/restauracja":
        return (
          <>
            <NavPanel blackColor={true}></NavPanel>
            <RestaurantPage></RestaurantPage>
          </>
        );
      case "/hs/#/wesela":
        return (
          <>
            <NavPanel blackColor={true}></NavPanel>
            <WeddingPage></WeddingPage>
          </>
        );
      case "/hs/#/wydarzenia":
        return (
          <>
            <NavPanel blackColor={true}></NavPanel>
            <EventPage></EventPage>
          </>
        );
      default:
        window.history.replaceState({}, "", "/HS/#/hotel"); // no reload
        return (
          <>
            <NavPanel blackColor={true}></NavPanel>
            <HomePage></HomePage>
          </>
        );
    }
  }
  return (
    <>
      {/* <NavPanel blackColor={true}></NavPanel> */}
      {reLinker(getPathname())}
      {/* <MapsInfo></MapsInfo> */}
      <Footer></Footer>
    </>
  );
}

export default App;
