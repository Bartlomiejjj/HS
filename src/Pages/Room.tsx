import "../../styles/Hotel.css";
import "../../styles/animations.css";
import p from "../assets/duet-room.jpg";
import ap from "../assets/apartament-room.jpg";
const RoomPage = () => {
  return (
    <>
      <header>
        <div className="over"></div>
        <h1>Hotel Sylwia</h1>
        <p>Pokoje dla kazdego</p>
      </header>

      {/* <section id="more" aria-label="What is more" className="carousel">
        <div className="group">
          <button className="card" aria-label="Wesele" aria-labelledby="more">
            <a href="">Wesele</a>
          </button>
          <button
            className="card"
            aria-label="Restauracja"
            aria-labelledby="more"
          >
            <a href="">Wesele</a>
          </button>
          <button className="card" aria-label="Impreza" aria-labelledby="more">
            <a href="">Wesele</a>
          </button>
          <button
            className="card"
            aria-label="Spotkanie"
            aria-labelledby="more"
          >
            <a href="">Wesele</a>
          </button>
          <button className="card" aria-label="Kamper" aria-labelledby="more">
            <a href="">Wesele</a>
          </button>
        </div>
        <div aria-hidden className="group">
          <button className="card" aria-label="Wesele" aria-labelledby="more">
            <a href="">Wesele</a>
          </button>
          <button
            className="card"
            aria-label="Restauracja"
            aria-labelledby="more"
          >
            <a href="">Wesele</a>
          </button>
          <button className="card" aria-label="Impreza" aria-labelledby="more">
            <a href="">Wesele</a>
          </button>
          <button
            className="card"
            aria-label="Spotkanie"
            aria-labelledby="more"
          >
            <a href="">Wesele</a>
          </button>
          <button className="card" aria-label="Kamper" aria-labelledby="more">
            <a href="">Wesele</a>
          </button>
        </div>
      </section> */}
      {/* <main title="Hotel" className="">
        <article>
          <h2>Hotel Sylwia Gliwice</h2>
          <p>Tekst opisujacy jakos hotel</p>
        </article>
        <hr />
        <p>cos o okolicy lub mozliwosci</p>
      </main> */}

      <section className="panel-title panel element">
        {/* <hr /> */}
        <h1>Pokoje</h1>
        <hr />
      </section>

      <section
        title="Wesela"
        className="image-container-parent element panel-left "
      >
        <div className="image-container">
          <img src={p} alt="more" />
          <aside className="info-box">
            <h3>Single</h3>
            <p>
              Pokoj idealny dla podróżojacych w pojedynke lub biznesowo Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis
              quibusdam maiores? Magni in qui ex numquam modi vel eligendi
              corporis, repudiandae corrupti! Rem quaerat nobis temporibus
              laboriosam officia incidunt?{" "}
            </p>
          </aside>
        </div>
      </section>
      <section className="panel-title element panel">
        {/* <hr /> */}
        <h1>Apartamenty</h1>
        <hr />
      </section>
      <section title="Wesela" className="image-container-parent  panel-right ">
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
            <a href="#/szczegoly">Szczegóły</a>
          </aside>
        </div>
      </section>
      {/* <section className="image-container-parent sect panel-left ">
        <div className="image-container">
          <img src={p} alt="more" />
          <h3>Wesela</h3>
          <p>dodatkowe info</p>
        </div>
      </section> */}
      <div style={{ height: "20vw" }}></div>
    </>
  );
};

export default RoomPage;
