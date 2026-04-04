import icon from "../assets/icons/react.svg";
/*studio*/
import st1 from "../assets/studio2.jpg";
import st2 from "../assets/studio3.jpg";
import st3 from "../assets/studio4.jpg";
/*apartament*/
import ap0 from "../assets/apartament-room.webp";
import ap1 from "../assets/apartament-room-bedroom.jpg";
import ap2 from "../assets/apartament-room-livingroom.jpg";
import ap3 from "../assets/apartament-room-sauna.jpg";

/*single*/
import sing0 from "../assets/single-room.webp";
/*duet single*/
import duetSing0 from "../assets/duet-room-single.webp";
/*duet*/
import duet0 from "../assets/duet-room.webp";

/*triple*/
import tri0 from "../assets/triple-room.webp";
/*triple with double*/
import triDou0 from "../assets/triple-room-with-double-livingroom.jpg";
import triDou1 from "../assets/triple-room-with-double.jpg";

/*relax*/
import mass0 from "../assets/massage-room.webp";
import gym0 from "../assets/gym-room.webp";
/*sauna*/
import sau0 from "../assets/sauna-room.webp";
import sau1 from "../assets/sauna-room2.jpg";
/*icons*/
import massageIcon from "../assets/icons/massageIcon.svg";
import gymIcon from "../assets/icons/gymIcon.svg";
import saunaIcon from "../assets/icons/saunaIcon.svg";
/**/
import chAO from "../assets/icons/checkInAndOutIcon.svg";

export const galleryData_relax = [
  {
    id: 1,
    img: sau0,
    title: "Sauna",
    description:
      "Chciałbyś wypocić całą złą energie z Siebie?... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: saunaIcon,
  },
  {
    id: 2,
    img: mass0,
    title: "Masaż",
    description:
      "Idealne miejsce na relaks po długim dniu. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: massageIcon,
  },
  {
    id: 3,
    img: gym0,
    title: "Siłownia",
    description:
      "Nowoczesna siłownia z pełnym wyposażeniem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: gymIcon,
  },
];

export const galleryWithImagesData_rooms = [
  {
    id: 1,
    img: [sing0],
    title: "pokój jedno-osobowy",
    description:
      "Pokoj idealny dla podróżojacych w pojedynke lub biznesowo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: chAO,
  },
  {
    id: 2,
    img: [duet0, duetSing0],
    title: "pokoj dwu-osobowy z pojedynczymi łożkmami lub małżeńskim",
    description:
      "Pokój idealny dla par i nie tylko... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: chAO,
  },

  {
    id: 3,
    img: [tri0],
    title: "pokoj trzy-osobowy z pojedynczymi łożkmami ",
    description:
      "Pokój idealny dla par i nie tylko... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: chAO,
  },
  {
    id: 4,
    img: [triDou0, triDou1],
    title: "pokoj trzy-osobowy z małżeńskim oraz dostawką ",
    description:
      "Pokój idealny dla par i nie tylko... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: chAO,
  },
];
export const galleryWithImagesData_Apartaments = [
  {
    id: 1,
    img: [ap0, ap1, ap2, ap3],
    title: "Apartament z sauną",
    description:
      "Pokoj idealny dla podróżojacych w pojedynke lub biznesowo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: icon,
  },
  {
    id: 2,
    img: [st1, st2, st3],
    title: "Apartament/Studio",
    description:
      "Pokój idealny dla par i nie tylko... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: icon,
  },
];

export type carouselProps = {
  id: number;
  img: string;
  title: string;
  description: string;
  link?: string;
};
export type carouselPropsArray = {
  props: carouselProps[];
  link?: string;
};

export const relaxData: carouselPropsArray = {
  link: "pokoje/szczegoly#relaks",
  props: [
    {
      id: 1,
      img: sau0,
      title: "Sauna",
      description: "Idealny po ciężkim dniu i nie tylko...",
    },
    {
      id: 2,
      img: mass0,
      title: "Masaż",
      description: "Idealne miejsce na odpoczynek i regenerację...",
    },
    {
      id: 3,
      img: gym0,
      title: "Siłownia",
      description: "Pełen pakiet wellness dla wymagających...",
    },
  ],
};
import sBM from "../assets/main/sala-bankietowa.jpg";
import ev from "../assets/main/eventy.jpg";
import rest from "../assets/main/restauracja.jpg";

export const hotelData: carouselPropsArray = {
  props: [
    {
      id: 1,
      img: sBM,
      title: "Wesela/Sale",
      description: "Idealny po ciężkim dniu i nie tylko...",
      link: "wesela",
    },
    {
      id: 2,
      img: rest,
      title: "Bar/Restauracja",
      description: "Idealne miejsce na odpoczynek i regenerację...",
      link: "restauracja",
    },
    {
      id: 3,
      img: sing0,
      title: "Pokoje/Relaks",
      description: "Pełen pakiet wellness dla wymagających...",
      link: "pokoje",
    },
    {
      id: 4,
      img: ev,
      title: "Eventy",
      description: "Pełen pakiet wellness dla wymagających...",
      link: "wydarzenia",
    },
  ],
};

import rc from "../assets/restaurant/resturant-image-table-centered.jpg";
import rr from "../assets/restaurant/resturant-image-table-right.jpg";
import rcl from "../assets/restaurant/resturant-image-table-close.jpg";
import r3 from "../assets/restaurant/resturant-image.jpg";

export const galleryData = [
  {
    id: 1,
    img: [ap0, ap1, ap2, ap3],
    title: "",
    description: "",
    icon: icon,
  },
];

export const restaurantImagesData = [rcl, rc, r3, rr];
export const restaurantRoomCarouselArray: carouselPropsArray = {
  props: [
    {
      id: 1,
      img: rcl,
      title: "Bankietowa",
      description: "Idealny po ciężkim dniu i nie tylko...",
      // link: "#bankietowa",
      link: "#sale",
    },
    {
      id: 2,
      img: rc,
      title: "Restauracyjna",
      description: "Idealne miejsce na odpoczynek i regenerację...",
      // link: "#restauracyjna",
      link: "#sale",
    },
    {
      id: 3,
      img: rr,
      title: "Śniadaniowa",
      description: "Pełen pakiet wellness dla wymagających...",
      // link: "#sniadaniowa",
      link: "#sale",
    },
    {
      id: 4,
      img: r3,
      title: "Mała",
      description: "Pełen pakiet wellness dla wymagających...",
      // link: "#mala",
      link: "#sale",
    },
  ],
};

export const galleryWithImagesData_restaurantRooms = [
  {
    id: 1,
    img: [rcl, rc, r3, rr],
    title: "Bankietowa",
    description:
      "Pokoj idealny dla podróżojacych w pojedynke lub biznesowo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: chAO,
  },
  {
    id: 2,
    img: [rr, rc, r3, rr],
    title: "restauracyjna",
    description:
      "Pokój idealny dla par i nie tylko... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: chAO,
  },

  {
    id: 3,
    img: [rc, rc, r3, rr],
    title: "Śniadaniowa",
    description:
      "Pokój idealny dla par i nie tylko... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: chAO,
  },
  {
    id: 4,
    img: [r3, rc, r3, rr],
    title: "mała",
    description:
      "Pokój idealny dla par i nie tylko... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut temporibus fuga perspiciatis corrupti a sapiente minima eaque amet sunt, hic quod delectus, eos doloribus animi id magni soluta voluptatum! Ut?",
    icon: chAO,
  },
];

/* Menu */
export type MenuItem = {
  id: number;
  category: string; // e.g., "Lunch", "Danie mięsne", "Desery"
  name: string;
  description?: string;
  price: string; // e.g., "45zł"
};
export const restaurantMenu: MenuItem[] = [
  // Lunch menu
  {
    id: 1,
    category: "Lunch",
    name: "Zupa, danie główne, deser",
    price: "45zł",
  },

  // Special menu
  {
    id: 2,
    category: "Special Menu",
    name: "Polędwica wołowa Buffalo",
    description:
      "Plastry bekonu | złociste ziemniaki | pieczony czosnek | sos toskański | surówka z akcentem mango i melona",
    price: "110zł",
  },
  {
    id: 3,
    category: "Special Menu",
    name: "Zestaw dla 4 osób",
    description:
      "Krem z batatów (waza) | grillowana karkówka 2 szt | filet z kurczaka w migdałach 2 szt | kapusta zasmażana z grzybami | puree ziemniaczane | pierogi z mięsem 8 szt.",
    price: "250zł",
  },

  // Menu dla dzieci
  {
    id: 4,
    category: "Menu dla dzieci",
    name: "Rosół z makaronem",
    price: "16zł",
  },
  {
    id: 5,
    category: "Menu dla dzieci",
    name: "Burger z kurczakiem + bataty",
    price: "21zł",
  },
  {
    id: 6,
    category: "Menu dla dzieci",
    name: "Łosoś z grilla + ryż z warzywami",
    price: "23zł",
  },

  // Przystawki
  {
    id: 7,
    category: "Przystawki",
    name: "Boeuf Strogonow",
    description: "Pieczarka | cebula | aromat czerwonego wina",
    price: "40zł",
  },
  {
    id: 8,
    category: "Przystawki",
    name: "Chrupiące placuszki ziemniaczane",
    description: "Wędzony łosoś | kapary | mus ze śmietany",
    price: "33zł",
  },
  {
    id: 9,
    category: "Przystawki",
    name: "Krewetki tygrysie",
    description: "Smażone z imbirem | sos z marakui | tost",
    price: "43zł",
  },
  {
    id: 10,
    category: "Przystawki",
    name: "Tradycyjny befsztyk tatarski",
    description: "Tost czosnkowy",
    price: "46zł",
  },

  // Zupy
  {
    id: 11,
    category: "Zupy",
    name: "Tradycyjny polski rosół",
    description: "Podawany z makaronem",
    price: "21zł",
  },
  {
    id: 12,
    category: "Zupy",
    name: "Barszcz czerwony",
    description: "Podawany z uszkami lub kołdunami",
    price: "26zł",
  },
  {
    id: 13,
    category: "Zupy",
    name: "Zupa Borowikowo-łososiowa",
    price: "28zł",
  },
  {
    id: 14,
    category: "Zupy",
    name: "Francuska zupa cebulowa",
    description: "Białe wino | grzanka serowa",
    price: "25zł",
  },
  { id: 15, category: "Zupy", name: "Krem z batatów", price: "24zł" },

  // Dania mięsne
  {
    id: 16,
    category: "Danie mięsne",
    name: "Rumsztyk wołowy",
    description: "Smażona cebulka | sos meksykański | frytki stekowe | surówka",
    price: "88zł",
  },
  {
    id: 17,
    category: "Danie mięsne",
    name: "Rolada wołowa",
    description: "Modra kapusta | kluski śląskie",
    price: "58zł",
  },
  {
    id: 18,
    category: "Danie mięsne",
    name: "Sznycel po wiedeńsku",
    description: "Jajko sadzone | frytki | zestaw surówek",
    price: "64zł",
  },
  {
    id: 19,
    category: "Danie mięsne",
    name: "Smażone polędwiczki wieprzowe",
    description: "Sos kurkowy | puree z batatów | surówka z kapusty kiszonej",
    price: "68zł",
  },
  {
    id: 20,
    category: "Danie mięsne",
    name: "Gnocchi z kurczakiem",
    description: "Sos pesto | suszone pomidory",
    price: "45zł",
  },
  {
    id: 21,
    category: "Danie mięsne",
    name: "Makaron Papardelle z łososiem",
    description: "Sos śmietanowo-borowikowy",
    price: "42zł",
  },

  // Ryby i sałatki
  {
    id: 22,
    category: "Ryby i sałatki",
    name: "Halibut",
    description: "Sałata francuska | sos Vinaigrette",
    price: "51zł",
  },
  {
    id: 23,
    category: "Ryby i sałatki",
    name: "Filet z sandacza",
    description:
      "Boczek pieczony | ziemniaki puree | surówka z kapusty kiszonej",
    price: "56zł",
  },
  {
    id: 24,
    category: "Ryby i sałatki",
    name: "Sałatka jesienna z dynią",
    description:
      "Tymianek | sałata | cebula czerwona | avocado | orzechy włoskie | feta | pestki granatu | oliwa | miód",
    price: "40zł",
  },
  {
    id: 25,
    category: "Ryby i sałatki",
    name: "Sałatka Toskańska",
    description:
      "Grillowana wołowina | rukola | pomidorki cherry | mozzarella | ziołowa bagietka",
    price: "51zł",
  },

  // Desery
  { id: 26, category: "Desery", name: "Tiramisu", price: "24zł" },
  {
    id: 27,
    category: "Desery",
    name: "Szarlotka na ciepło z lodami",
    price: "24zł",
  },
  {
    id: 28,
    category: "Desery",
    name: "Pieczone jabłko z cynamonem",
    price: "24zł",
  },
];
