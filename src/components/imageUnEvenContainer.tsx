import React from "react";

interface RoomSectionProps {
  title: string;
  imageSrc: string;
  altText: string;
  roomType: string;
  description: string;
  link: string;
  reverse?: boolean; // new prop to toggle layout
}

const RoomSection: React.FC<RoomSectionProps> = ({
  title,
  imageSrc,
  altText,
  roomType,
  description,
  link,
  reverse = false,
}) => {
  const containerClass = reverse
    ? "image-container-reverseX vertical-photo"
    : "image-container vertical-photo";

  return (
    <section title={title} className="image-container-parent panel-right">
      <div className={containerClass}>
        <img src={imageSrc} alt={altText} />
        <aside className="info-box">
          <h3>{roomType}</h3>
          <p>{description}</p>
          <a href={link}>Szczegóły</a>
        </aside>
      </div>
    </section>
  );
};

export default RoomSection;
