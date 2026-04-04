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
