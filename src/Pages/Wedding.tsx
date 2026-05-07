import { useEffect } from "react";
import "../../styles/wedding.css";
import BreakTitle from "../components/break_title";
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
      <BreakTitle title="Elegancka Sala Weselna"></BreakTitle>
      <BreakTitle title="Ceremonie w Ogrodzie"></BreakTitle>
      {/* <BreakTitle title="Campery"></BreakTitle>
      <ImageSectionX
        heading="Eventy Firmowe"
        imageAlt="Sala konferencyjna"
        title="Eventy firmowe"
        description="Konferencje, Bankiety, szkolenia, integracje wszystko mamy"
        linkText="OFERTA EVENTÓW"
        linkHref="Oferta"
        imageSrc={photo}
        withButton
      ></ImageSectionX>
      <ImageSectionReverseX
        heading="Parking dla camperów"
        imageAlt="Parking dla camperów"
        title="Eventy firmowe"
        description="Dogodna lokalizacja, Spokój i natura"
        linkText="DOWIEDZ SIĘ WIĘCEJ"
        linkHref=""
        imageSrc={photo}
        withButton
        reverse
      ></ImageSectionReverseX> */}
      <h2>strona</h2>
      <p>Weselna</p>
    </>
  );
};
