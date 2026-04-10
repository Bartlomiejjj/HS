import { useEffect, useState } from "react";
import "../../styles/chooser.css";
import { relaxData, type carouselPropsArray } from "../info/info";

export default function Carousel({ props, link }: carouselPropsArray) {
  const [activeIndex, setActiveIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % relaxData.props.length);
    }, 10000); // 10s

    return () => clearInterval(interval);
  }, []);

  // const [path, setPath] = useState(window.location.hash);
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string
  ) => {
    e.preventDefault(); // prevent page reload
    // setPath("/HS/#" + to); // update state for re-render
    window.history.pushState({}, "", "/HS/#" + to); // update URL
    window.location.reload();
  };
  return (
    <section className=" panel carousel-small">
      <div className="group-small">
        {props.map((item, index) => (
          <div
            key={index}
            className={`image-container-chooser ${
              activeIndex === index ? "active" : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <img src={item.img} alt={item.title} />

            <aside className="info-box-chooser">
              <h3 style={{ fontSize: "1.5em" }}>{item.title}</h3>
              <p style={{ fontSize: "1.2em" }}>{item.description}</p>
              <a
                style={{ fontSize: "1.2em" }}
                href={item.link ? "#" + item.link : "#" + link}
                onClick={(e) => {
                  handleNavClick(
                    e,
                    item.link ? "/" + item.link : link ? "/" + link : "/"
                  );
                  // scrollToId(item.link ? item.link : "");
                }}
              >
                Szczegóły
              </a>
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
}
