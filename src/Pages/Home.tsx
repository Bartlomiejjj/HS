import BreakTitle from "../components/break_title";
import Carousel from "../components/chooser";
import { galleryData, hotelData } from "../info/info";
import logo from "../assets/logos/nLogo.png";
import { ImageSectionX } from "../components/infoBox";
import ele from "../assets/elevator.jpg";
import { GalleryWithMoreImages } from "../components/gallery";
const HomePage = () => {
  //   window.loca;
  return (
    <>
      <header className="homePage image">
        <div className="over"></div>
        <h1>Hotel Sylwia</h1>
        <p>Cisza i spokoj</p>
      </header>

      {/* <BreakTitle title="Hotel Sylwia"></BreakTitle> */}
      <section aria-label="O Hotelu" className="about">
        <img
          src={logo}
          alt="logo"
          width={"100%"}
          style={{ margin: "auto", opacity: "0.7" }}
        />
        <p style={{ fontSize: "1.2em", opacity: "0.7" }}>
          Jeśli pragną Państwo spróbować wyśmienitej kuchni regionalnej,
          odpocząć od zgiełku miasta, a jednocześnie spędzić czas w miejscu o
          wysokim standardzie zapraszamy do naszego hotelu. Posiadamy komfortową
          i zróżnicowaną bazę noclegową. Do dyspozycji gości oddajemy 29 w pełni
          wyposażonych pokoi w tym 2 apartamenty i studia. Nasz Hotel to nie
          tylko miejsce na udany odpoczynek, ale również idealny obiekt na
          organizację wesel, szkolenie oraz konferencji.
        </p>
      </section>
      <BreakTitle title="Oferujemy"></BreakTitle>
      <Carousel props={hotelData.props}></Carousel>
      <ImageSectionX
        heading="Winda"
        description="Dzięki uzyskanemu dofinansowaniu z uni europejskiej, mamy nową winde dla starszych i nie tylko..."
        imageAlt="winda"
        imageSrc={ele}
        linkHref=""
        linkText=""
        title="Winda"
      ></ImageSectionX>
      <BreakTitle title="Galeria"></BreakTitle>
      <GalleryWithMoreImages
        galleryWithImages={galleryData}
      ></GalleryWithMoreImages>
    </>
  );
};
export default HomePage;
