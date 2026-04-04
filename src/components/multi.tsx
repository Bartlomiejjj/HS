import React from "react";

interface MultiPhotoFlexSectionProps {
  title: string;
  images: string[]; // any number of image URLs
  altTexts?: string[]; // optional alt texts
  roomType: string;
  description: string;
  link: string;
}

const MultiPhotoFlexSection: React.FC<MultiPhotoFlexSectionProps> = ({
  title,
  images,
  altTexts,
  roomType,
  description,
  link,
}) => {
  return (
    <section title={title} className="image-container-parent multi-photo-panel">
      <div className="multi-photo-flex-container">
        <div className="photos-flex">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={altTexts ? altTexts[i] : `photo-${i + 1}`}
              className="photo-item"
            />
          ))}
        </div>
        <aside className="info-box">
          <h3>{roomType}</h3>
          <p>{description}</p>
          <a href={link}>Szczegóły</a>
        </aside>
      </div>
    </section>
  );
};

export default MultiPhotoFlexSection;
