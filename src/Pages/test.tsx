import Footer from "../components/Footer";
import MapsInfo from "../components/Maps";
import p from "../../public/photo0.jpg";

const Test = () => {
  return (
    <>
      <header className="photo-container txt-white ">
        <img src={p} alt="Header Photo of Hotel" />
        <div className="window">
          <h1>Hotel Sylwia</h1>
          <h2>Ceremonie w przepięknym ogrodzie</h2>
        </div>
        <button className="br-m p-p">
          <span>Zorganizuj Wesele</span>
        </button>
      </header>
      <hr />
      <section className="image-container-parent sect panel ">
        <button className="box">
          <div className="image-container">
            <img src={p} alt="more" />
            <h3>Wesela</h3>
            <p>dodatkowe info</p>
          </div>
        </button>
        <button className="box">
          <div className="image-container">
            <img src={p} alt="more" />
            <h3>Wesela</h3>
            <p>dodatkowe info</p>
          </div>
        </button>
        <button className="box">
          <div className="image-container">
            <img src={p} alt="more" />
            <h3>Wesela</h3>
            <p>dodatkowe info</p>
          </div>
        </button>
        <button className="box">
          <div className="image-container">
            <img src={p} alt="more" />
            <h3>Wesela</h3>
          </div>
        </button>
      </section>
      <hr />
      <header className="photo-container txt-white panel">
        <img src={p} alt="Header Photo of Hotel" />
        <div className="window">
          <h1>Hotel Sylwia</h1>
        </div>
        <button className="br-m p-s">
          <span>Zorganizuj Wesele</span>
        </button>
      </header>
      <MapsInfo></MapsInfo>
      <Footer></Footer>
    </>
  );
};
export default Test;
