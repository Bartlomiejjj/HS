import { useEffect, useState, useRef, type CSSProperties } from "react";
// import "../../styles/gallery.css";
import "../../styles/nGallery.css";
/* =========================
   TYPES
========================= */

type galleryContent = {
  id: number;
  img: string;
  title: string;
  description: string;
  icon: string;
};

type galleryWithImagesContent = {
  id: number;
  img: string[]; // multiple images
  title: string;
  description: string;
  icon: string; // single icon
};

type content = {
  gallery: galleryContent[];
};

type contentWithImages = {
  galleryWithImages: galleryWithImagesContent[];
};

/* =========================
   SIMPLE GALLERY (1 IMAGE)
========================= */

export default function Gallery({ gallery }: content) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % gallery.length);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  // Auto-scroll every 20s
  useEffect(() => {
    if (!gallery.length) return;

    intervalRef.current = window.setInterval(nextSlide, 20000);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [gallery.length]);

  if (!gallery.length) return null;

  const current = gallery[activeIndex];

  return (
    <div className="gallery-container">
      <div className="gallery-image-wrapper">
        <button className="nav-button left" onClick={prevSlide}>
          {/* ◀ */}
        </button>

        <img src={current.img} alt={current.title} className="gallery-image" />

        <button className="nav-button right" onClick={nextSlide}>
          {/* ▶ */}
        </button>
      </div>

      {/* ICONS */}
      <div className="icon-list">
        {gallery.map((item, idx) => (
          <img
            key={item.id}
            src={item.icon}
            alt={item.title}
            className={`icon-item ${idx === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      {/* INFO */}
      <div className="info-box-gallery">
        <h3>{current.title}</h3>
        <p>{current.description}</p>
      </div>
    </div>
  );
}

export function GalleryWithMoreImages({
  galleryWithImages,
}: contentWithImages) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fade, setFade] = useState(true);

  const current = galleryWithImages[activeIndex];

  const changeImage = (next: boolean) => {
    setFade(false); // start fade out
    setTimeout(() => {
      setImageIndex((prev) =>
        next
          ? (prev + 1) % current.img.length
          : (prev - 1 + current.img.length) % current.img.length
      );
      setFade(true); // fade in new image
    }, 200); // match transition duration
  };

  const nextImage = () => changeImage(true);
  const prevImage = () => changeImage(false);

  const handlePanelChange = (index: number) => {
    setActiveIndex(index);
    setImageIndex(0);
  };

  if (!galleryWithImages.length) return null;

  /* ===== INLINE STYLES ===== */
  const modalOverlay: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    overflow: "hidden",
  };

  const modalImage: CSSProperties = {
    maxWidth: "90vw",
    maxHeight: "90vh",
    objectFit: "contain",
    borderRadius: "8px",
    boxShadow: "0 0 20px rgba(0,0,0,0.7)",
    transition: "opacity 0.2s ease, transform 0.2s ease",
    opacity: fade ? 1 : 0,
    transform: fade ? "scale(1)" : "scale(0.95)",
    zIndex: "0",
  };

  const modalButtonBase: CSSProperties = {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.9)",
    border: "none",
    padding: "8px 12px",
    fontSize: "24px",
    cursor: "pointer",
    borderRadius: "4px",
  };

  const closeButton: CSSProperties = {
    ...modalButtonBase,
    top: "20px",
    right: "20px",
    zIndex: "1",
  };
  const prevButton: CSSProperties = {
    ...modalButtonBase,
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "1",
  };
  const nextButton: CSSProperties = {
    ...modalButtonBase,
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "1",
  };

  return (
    <div className="gallery-container" style={{ position: "relative" }}>
      {/* IMAGE SLIDER */}
      <div className="gallery-image-wrapper">
        <button className="nav-button left" onClick={prevImage}>
          {/* ◀ */}
        </button>
        <img
          key={imageIndex}
          src={current.img[imageIndex]}
          alt={current.title}
          className="gallery-image"
          onClick={() => setIsModalOpen(true)}
          style={{ cursor: "pointer" }}
        />
        <button className="nav-button right" onClick={nextImage}>
          {/* ▶ */}
        </button>
      </div>

      {/* PANELS */}
      <div className="panel-list">
        {galleryWithImages.map((item, idx) => (
          <button
            key={item.id}
            className={`panel-button ${idx === activeIndex ? "active" : ""}`}
            onClick={() => handlePanelChange(idx)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* INFO */}
      {current.description ? (
        <>
          <div className="info-box-gallery">
            <h3>{current.title}</h3>
            <p>{current.description}</p>
          </div>
        </>
      ) : (
        <></>
      )}

      {/* MODAL OVERLAY */}
      {isModalOpen && (
        <div style={modalOverlay}>
          <button style={closeButton} onClick={() => setIsModalOpen(false)}>
            ✕
          </button>
          <button style={prevButton} onClick={prevImage}>
            <i></i>
            {/* ◀ */}
          </button>

          <img
            src={current.img[imageIndex]}
            alt={current.title}
            style={modalImage}
          />

          <button style={nextButton} onClick={nextImage}>
            {/* ▶ */}
          </button>
        </div>
      )}
    </div>
  );
}
