import { useEffect } from "react";
import BreakTitle from "../components/break_title";
import Gallery, { GalleryWithMoreImages } from "../components/gallery";
import {
  galleryData_relax,
  galleryWithImagesData_rooms,
  galleryWithImagesData_Apartaments,
} from "../info/info";

export default function RoomsAll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector<HTMLElement>(hash);
        if (el) {
          // Get element's current top relative to viewport
          const elementTop = el.getBoundingClientRect().top + window.scrollY;
          const offset = 200; // move 100px higher
          window.scrollTo({
            top: elementTop - offset,
            behavior: "smooth",
          });
        }
      }
    };

    const timeout = setTimeout(scrollToHash, 100);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <>
      <BreakTitle title="Pokoje" />
      <section id="pokoje">
        <GalleryWithMoreImages
          galleryWithImages={galleryWithImagesData_rooms}
        ></GalleryWithMoreImages>
      </section>

      <BreakTitle title="Apartamenty" />
      <section id="apartamenty">
        <GalleryWithMoreImages
          galleryWithImages={galleryWithImagesData_Apartaments}
        ></GalleryWithMoreImages>
      </section>

      <BreakTitle title="Relaks" />
      <section id="relaks">
        <Gallery gallery={galleryData_relax}></Gallery>
      </section>
    </>
  );
}
