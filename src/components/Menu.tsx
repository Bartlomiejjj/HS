import { useState } from "react";
import { restaurantMenu } from "../info/info";

export const RestaurantMenu = () => {
  const categories = Array.from(
    new Set(restaurantMenu.map((item) => item.category))
  );

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = categories[activeCategoryIndex];

  const styles = {
    section: {
      padding: "2rem",
      fontFamily: "'Arial', sans-serif",
      color: "#333",
      width: "75vw",
      height: "fit-content",
      margin: "0 auto",
      position: "relative" as const, // make buttons relative to section
    },
    categoryWrapper: {
      textAlign: "center" as const,
      marginBottom: "2rem",
    },
    category: {
      fontSize: "2rem",
      fontWeight: 700,
      borderBottom: "2px solid var(--primary)",
      paddingBottom: "0.5rem",
      display: "inline-block",
    },
    navButton: {
      position: "absolute" as const, // relative to section
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "1.5rem",
      background: "white",
      color: "var(--primary)",
      border: "1px solid var(--primary)",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    leftButton: { left: "-70px" }, // outside the section on the left
    rightButton: { right: "-70px" }, // outside the section on the right
    item: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "1rem",
      fontSize: "1rem",
      alignItems: "flex-start",
    },
    nameDesc: {
      flex: 1,
      marginRight: "1rem",
    },
    price: {
      color: "var(--primary)",
      fontWeight: 700,
      minWidth: "60px",
      textAlign: "right" as const,
    },
  };

  return (
    <section style={styles.section}>
      {/* Left Button */}
      <button
        aria-label="poprzednia strona menu"
        style={{ ...styles.navButton, ...styles.leftButton }}
        onClick={() =>
          setActiveCategoryIndex(
            (activeCategoryIndex - 1 + categories.length) % categories.length
          )
        }
      >
        {/* ◀ */}
      </button>

      {/* Category */}
      <div style={styles.categoryWrapper}>
        <h2 style={styles.category}>{activeCategory}</h2>
      </div>

      {/* Right Button */}
      <button
        aria-label="następna strona menu"
        style={{ ...styles.navButton, ...styles.rightButton }}
        onClick={() =>
          setActiveCategoryIndex((activeCategoryIndex + 1) % categories.length)
        }
      >
        {/* ▶ */}
      </button>

      {/* Menu Items */}
      {restaurantMenu
        .filter((item) => item.category === activeCategory)
        .map((item) => (
          <div key={item.id} style={styles.item}>
            <div style={styles.nameDesc}>
              {item.name}
              {item.description && <span> – {item.description}</span>}
            </div>
            <b style={styles.price}>{item.price}</b>
          </div>
        ))}
    </section>
  );
};
