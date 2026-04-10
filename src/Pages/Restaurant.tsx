import { useEffect } from "react";
import "../../styles/universal.css";
import BreakTitle from "../components/break_title";
import Carousel from "../components/chooser";
import { GalleryWithMoreImages } from "../components/gallery";
import HeaderText from "../components/headerText";
import { RestaurantMenu } from "../components/Menu";
import {
  galleryWithImagesData_restaurantRooms,
  restaurantRoomCarouselArray,
} from "../info/info";

export const RestaurantPage = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.split("#")[2];
      console.log(hash);
      if (hash == "sale") {
        const el = document.querySelector<HTMLElement>("#" + hash);
        if (el) {
          // Get element's current top relative to viewport
          const elementTop = el.getBoundingClientRect().top + window.scrollY;
          const offset = 200; // move 100px higher
          window.scrollTo({
            top: elementTop - offset,
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    const timeout = setTimeout(scrollToHash, 200);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <>
      <HeaderText text="Hotel Sylwia" subtext="RESTAURACJA"></HeaderText>
      <BreakTitle title="Oferuje Salę: "></BreakTitle>
      <Carousel props={restaurantRoomCarouselArray.props} link=""></Carousel>
      {/* <section id="bankietowa">
        <RoomSection
          altText="photo"
          description="lorem ipsum..."
          imageSrc={restaurantImagesData[1]}
          link=""
          roomType="Bankietowa"
          title="sala Bankietowa"
          reverse
        ></RoomSection>
      </section> */}
      {/* <section id="restauracyjna">
        <MultiPhotoSection
          description="dsjnakndksa"
          roomType="REstauracyjna"
          title="Sala Restauracyjna"
          images={restaurantImagesData}
          altTexts={["sala Restauracyjna"]}
          link=""
        ></MultiPhotoSection>
      </section> */}
      {/* <section id="sniadaniowa"></section>
      <section id="mala"></section> */}
      <BreakTitle title="Menu: "></BreakTitle>
      <section id="menu">
        <RestaurantMenu></RestaurantMenu>
      </section>
      <BreakTitle title="Sale: "></BreakTitle>
      <section id="sale">
        <GalleryWithMoreImages
          galleryWithImages={galleryWithImagesData_restaurantRooms}
        ></GalleryWithMoreImages>
      </section>
    </>
  );
};
