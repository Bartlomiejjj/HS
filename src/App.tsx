import "../styles/style.css";
import p from "../public/photo0.jpg";
function App() {
  return (
    <div>
      <nav className="">
        <menu className="nav-bef">
          <button>
            <h5>Wesele</h5>
          </button>
          <button>
            <h5>Eventy</h5>
          </button>
          <button>
            <h5>Hotel</h5>
          </button>
          <button>
            <h5>Restauracja</h5>
          </button>
        </menu>
        <h3>Hotel Sylwia</h3>
        <menu className="nav-aft">
          <button>
            <h5>Hotel</h5>
          </button>
          <button>
            <h5>Restauracja</h5>
          </button>
        </menu>
      </nav>

      <header className="box photo-container txt-white ">
        <img src={p} alt="Header Photo of Hotel" />
        <div className="window">
          <h1>Hotel Sylwia</h1>
          <h2>Ceremonie w przepięknym ogrodzie</h2>
        </div>
        <button className="br-m p-p">
          <span>Zorganizuj Wesele</span>
        </button>
      </header>

      <br />

      <section className="image-container-parent sect ">
        <button>
          <div className="image-container">
            <img src={p} alt="more" />
            <h3>Wesela</h3>
            <p>dodatkowe info</p>
          </div>
        </button>
        <button>
          <div className="image-container">
            <img src={p} alt="more" />
            <h3>Wesela</h3>
            <p>dodatkowe info</p>
          </div>
        </button>
        <button>
          <div className="image-container">
            <img src={p} alt="more" />
            <h3>Wesela</h3>
            <p>dodatkowe info</p>
          </div>
        </button>
        <button>
          <div className="image-container">
            <img src={p} alt="more" />
            <h3>Wesela</h3>
          </div>
        </button>
      </section>

      <hr />

      <header className="box photo-container txt-white">
        <img src={p} alt="Header Photo of Hotel" />
        <div className="window">
          <h1>Hotel Sylwia</h1>
        </div>
        <button className="br-m p-s">
          <span>Zorganizuj Wesele</span>
        </button>
      </header>

      <footer>
        <section>
          <p>Hotel Sylwia</p>
          <p>
            <b>Lokalizacja: </b> Sośnicowice, ul. Gliwicka 90
          </p>
          <p>
            <b>Telefon: </b> Sośnicowice, ul. Gliwicka 90
          </p>
          <p>
            <b>Email: </b> Sośnicowice, ul. Gliwicka 90
          </p>
          <p>
            <b>Social Media: </b> Sośnicowice, ul. Gliwicka 90
          </p>
        </section>
        <section>
          <iframe
            aria-label="mapa google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10200.899478734296!2d18.55315057744174!3d50.269059760364065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471139861a58ab9d%3A0x42d22df277c7b999!2sHotel%20Sylwia%20Gliwice!5e0!3m2!1spl!2spl!4v1773184072426!5m2!1spl!2spl"
            loading="lazy"
          >
            {" "}
          </iframe>
        </section>
      </footer>
    </div>
  );
}

export default App;
