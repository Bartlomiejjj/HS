import { useEffect } from "react";
import "../../styles/wedding.css";
import BreakTitle from "../components/break_title";
import a from "../assets/Wedding/outdoor/krzesla_altana.jpg";
import b from "../assets/Wedding/outdoor/altana.jpg";
import c from "../assets/Wedding/indoor/bankietowa_wesele.jpg";
import d from "../assets/Wedding/indoor/bankietowa_wesele_2.jpg";

export const WeddingPage = () => {
  useEffect(() => {
    document.body.className = "wedding";
  }, []);
  return (
    <>
      <header className="weddingPage image">
        <div className="over">
          <h1>HotelSylwia</h1>
          <p>Ceremonie w ogrodzie</p>
        </div>
      </header>
      {/* <BreakTitle title="Wesela"></BreakTitle> */}
      <BreakTitle title="Ceremonie w Ogrodzie"></BreakTitle>
      <section
        className="wedding images panel element  "
        aria-label="zdjecia altany w parku przygotowanej pod ceremonie weselną"
      >
        <img src={b} alt="" className="vertical" />
        <img src={a} alt="" className="horizontal" />
      </section>

      <BreakTitle title="Elegancka Sala Weselna"></BreakTitle>
      <section
        className="wedding images panel element stack "
        aria-label="zdjecia altany w parku przygotowanej pod ceremonie weselną"
      >
        <img src={d} alt="" className="vertical" />
        <img src={d} alt="" className="horizontal" />
        <img src={c} alt="" className="horizontal" />
        <img src={d} alt="" className="vertical" />
        <img src={d} alt="" className="vertical" />
        <img src={c} alt="" className="horizontal" />
      </section>
      <BreakTitle title="Ogród"></BreakTitle>
      <section aria-label="Ogród"></section>
      <BreakTitle title="Kontakt/Oferta"></BreakTitle>
      <section aria-label="Kontakt" id="footer"></section>
    </>
  );
};
