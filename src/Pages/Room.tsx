import "../../styles/Hotel.css";
import "../../styles/animations.css";
import "../../styles/universal.css";
import p from "../assets/single-room.webp";
import ap from "../assets/duet-room-single.webp";
import tr from "../assets/triple-room.webp";
import s from "../assets/studio.webp";

import Carousel from "../components/chooser";
import { relaxData } from "../info/info";
import { ImageSectionX } from "../components/infoBox";
import BreakTitle from "../components/break_title";
const RoomPage = () => {
  return (
    <>
      <header className="roomPage image">
        <div className="over"></div>
        <h1>Hotel Sylwia</h1>
        <p>Pokoje dla kazdego</p>
      </header>

      <BreakTitle title="Pokoje"></BreakTitle>

      <ImageSectionX
        description="Pokoj idealny dla podróżojacych w pojedynke lub biznesowo Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis
              quibusdam maiores? Magni in qui ex numquam modi vel eligendi
              corporis, repudiandae corrupti! Rem quaerat nobis temporibus
              laboriosam officia incidunt?"
        heading="Single"
        imageAlt="pokoj pojedynczy"
        imageSrc={p}
        linkText="Szczegóły"
        linkHref="#/pokoje/szczegoly#pokoje"
        title="Single room"
        withButton
      ></ImageSectionX>

      <section
        title="pokoj dwu osobowy"
        className="image-container-parent  panel-right "
      >
        <div className="image-container-reverseX">
          <img src={ap} alt="more" />
          <aside className="info-box">
            <h3>Double</h3>
            <p>
              Pokoj idealny dla podróżojacych w pojedynke lub biznesowo Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis
              quibusdam maiores? Magni in qui ex numquam modi vel eligendi
              corporis, repudiandae corrupti! Rem quaerat nobis temporibus
              laboriosam officia incidunt?{" "}
            </p>
            <a href="#/pokoje/szczegoly#pokoje">Szczegóły</a>
          </aside>
        </div>
      </section>

      <section
        title="pokoj trzy osobowy"
        className="image-container-parent element panel-left "
      >
        <div className="image-container">
          <img src={tr} alt="more" />
          <aside className="info-box">
            <h3>Triple</h3>
            <p>
              Pokoj idealny dla podróżojacych w pojedynke lub biznesowo Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis
              quibusdam maiores? Magni in qui ex numquam modi vel eligendi
              corporis, repudiandae corrupti! Rem quaerat nobis temporibus
              laboriosam officia incidunt?{" "}
            </p>
            <a href="#/pokoje/szczegoly#pokoje">Szczegóły</a>
          </aside>
        </div>
      </section>
      <BreakTitle title="Apartamenty"></BreakTitle>

      <section
        title="Apartament Studio"
        className="image-container-parent  panel-right "
      >
        <div className="image-container-reverseX">
          <img src={s} alt="more" />
          <aside className="info-box">
            <h3>Studio</h3>
            <p>
              Pokoj idealny dla podróżojacych w pojedynke lub biznesowo Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis
              quibusdam maiores? Magni in qui ex numquam modi vel eligendi
              corporis, repudiandae corrupti! Rem quaerat nobis temporibus
              laboriosam officia incidunt?{" "}
            </p>
            <a href="/pokoje/szczegoly#apartamenty">Szczegóły</a>
          </aside>
        </div>
      </section>
      <BreakTitle title="Relaks & wiecej"></BreakTitle>
      <Carousel link={relaxData.link} props={relaxData.props}></Carousel>
    </>
  );
};

export default RoomPage;
