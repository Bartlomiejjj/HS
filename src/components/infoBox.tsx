import "../../styles/Hotel.css";
import React from "react";

type ImageSectionProps = {
  title: string;
  imageSrc: string;
  imageAlt: string; // required for accessibility
  heading: string;
  description: string;
  linkHref: string;
  linkText: string;
  reverse?: boolean;
};

export const ImageSectionReverseX: React.FC<ImageSectionProps> = ({
  imageSrc,
  imageAlt,
  heading,
  description,
  linkHref,
  linkText,
}) => {
  const headingId = `${heading.replace(/\s+/g, "-").toLowerCase()}-heading`;
  const descriptionId = `${heading.replace(/\s+/g, "-").toLowerCase()}-desc`;

  return (
    <section
      aria-labelledby={headingId}
      className="image-container-parent panel-right"
    >
      <div className={"image-container-reverseX"}>
        <img src={imageSrc} alt={imageAlt} />

        <aside
          className="info-box"
          role="region"
          aria-labelledby={headingId}
          aria-describedby={descriptionId}
        >
          <h3 id={headingId}>{heading}</h3>

          <p style={{ fontSize: "1.2em" }} id={descriptionId}>
            {description}
          </p>

          <a href={linkHref} aria-label={`${linkText} – ${heading}`}>
            {linkText}
          </a>
        </aside>
      </div>
    </section>
  );
};
export const ImageSectionX: React.FC<ImageSectionProps> = ({
  imageSrc,
  imageAlt,
  heading,
  description,
  linkHref,
  linkText,
}) => {
  const headingId = `${heading.replace(/\s+/g, "-").toLowerCase()}-heading`;
  const descriptionId = `${heading.replace(/\s+/g, "-").toLowerCase()}-desc`;

  return (
    <section
      aria-labelledby={headingId}
      className="image-container-parent panel-left"
    >
      <div className={"image-container"}>
        <img src={imageSrc} alt={imageAlt} />

        <aside
          className="info-box"
          role="region"
          aria-labelledby={headingId}
          aria-describedby={descriptionId}
        >
          <h3 id={headingId}>{heading}</h3>

          <p style={{ fontSize: "1.2em" }} id={descriptionId}>
            {description}
          </p>

          <a href={linkHref} aria-label={`${linkText} – ${heading}`}>
            {linkText}
          </a>
        </aside>
      </div>
    </section>
  );
};
