import { useEffect, useState } from "react";
import RoomPage from "./Pages/Room";
import HomePage from "./Pages/Home";
import NavPanel from "./components/NavPanel";
import Footer from "./components/Footer";
import RoomsAll from "./Pages/RoomsAll";
import { RestaurantPage } from "./Pages/Restaurant";
import { WeddingPage } from "./Pages/Wedding";
import { EventPage } from "./Pages/Events";

function App() {
  // ✅ HASH STATE (this makes React re-render)
  const [hash, setHash] = useState(window.location.hash || "#/hotel");

  // ✅ Listen to hash changes (back/forward + clicks)
  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash || "#/hotel";

      // remove first "#"
      const cleaned = fullHash.startsWith("#") ? fullHash.slice(1) : fullHash;

      // split route vs anchor
      const [routePart, anchor] = cleaned.split("#");

      const route = routePart || "/hotel";

      setHash(`#${route}`);

      window.scrollTo(0, 0);

      // scroll AFTER render
      if (anchor) {
        setTimeout(() => {
          document.getElementById(anchor)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 50);
      }
    };
    console.log(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // ✅ Animations (your original logic, unchanged)
  useEffect(() => {
    const animateElements = (selector: string, threshold: number) => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((el) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                el.classList.add("animate");
                observer.unobserve(el);
              }
            });
          },
          { threshold }
        );

        observer.observe(el);
      });
    };

    animateElements(".panel", 0.05);
    animateElements(".box", 0.1);
    animateElements(".panel-left", 0.1);
    animateElements(".panel-right", 0.1);

    window.scrollTo(0, 0);
  }, [hash]); // 🔥 re-run animations on route change

  // ✅ ROUTER FUNCTION
  function reLinker(hash: string) {
    switch (hash.toLowerCase()) {
      case "#/hotel":
        return (
          <>
            <HomePage />
          </>
        );

      case "#/pokoje":
        return (
          <>
            <NavPanel blackColor={false} />
            <RoomPage />
          </>
        );

      case "#/pokoje/szczegoly":
        return (
          <>
            <NavPanel blackColor={true} />
            <RoomsAll />
          </>
        );
      case "#/pokoje/szczegoly#relaks":
        return (
          <>
            <NavPanel blackColor={true} />
            <RoomsAll />
          </>
        );

      case "#/restauracja":
        return (
          <>
            <NavPanel blackColor={true} />
            <RestaurantPage />
          </>
        );

      case "#/restauracja#sale":
        return (
          <>
            <NavPanel blackColor={true} />
            <RestaurantPage />
          </>
        );

      case "#/wesela":
        return (
          <>
            <NavPanel blackColor={true} />
            <WeddingPage />
          </>
        );

      case "#/wydarzenia":
        return (
          <>
            <NavPanel blackColor={true} />
            <EventPage />
          </>
        );

      default:
        // ✅ fallback (no reload!)
        window.location.hash = "#/hotel";

        return (
          <>
            <NavPanel blackColor={true} />
            <HomePage />
          </>
        );
    }
  }

  return (
    <>
      {reLinker(hash)}
      <Footer />
    </>
  );
}

export default App;
