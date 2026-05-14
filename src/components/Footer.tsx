import "../../styles/universal.css";
import logo from "../assets/logos/nLogo.png";
type eleWIB = {
  text: string;
  ariaLabel: string;
  iconSource?: string;
  boldTitle?: string;
};
export const ElementWithIconBefore = ({
  text,
  ariaLabel,
  iconSource,
  boldTitle,
}: eleWIB) => {
  return (
    <div aria-label={ariaLabel}>
      {iconSource ? (
        <p>
          <img src={iconSource} alt={ariaLabel} /> {text}
        </p>
      ) : (
        <p>
          <b>{boldTitle}</b>
          {text}
        </p>
      )}
    </div>
  );
};
const Footer = () => {
  return (
    <footer id="footer" className="">
      <section className="" aria-labelledby="footer">
        <section aria-label="Logo Hotelu Sylwia">
          <img src={logo} alt="Logo Hotelu Sylwia" />
        </section>
        <section aria-labelledby="footer">
          <b>Lokalizacja</b>
          <hr />
          <a
            title="zobacz hotel na mapie.."
            aria-label="zobacz hotel na mapie..."
            href="https://www.google.com/maps/place/Hotel+Sylwia+Gliwice/@50.1829429,18.5473347,10z/data=!4m9!3m8!1s0x471139861a58ab9d:0x42d22df277c7b999!5m2!4m1!1i2!8m2!3d50.2690465!4d18.5634503!16s%2Fg%2F12vr50gzf?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
          >
            <ElementWithIconBefore
              ariaLabel="numer kontaktowy na recepcje"
              boldTitle=""
              text="44-153, Sośnicowice k.Gliwic"
            ></ElementWithIconBefore>
          </a>
          <a
            aria-label="zobacz hotel na mapie..."
            title="zobacz hotel na mapie.."
            href="https://www.google.com/maps/place/Hotel+Sylwia+Gliwice/@50.1829429,18.5473347,10z/data=!4m9!3m8!1s0x471139861a58ab9d:0x42d22df277c7b999!5m2!4m1!1i2!8m2!3d50.2690465!4d18.5634503!16s%2Fg%2F12vr50gzf?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
          >
            <ElementWithIconBefore
              ariaLabel="ulica"
              boldTitle="ul. "
              text="Gliwicka 90"
            ></ElementWithIconBefore>
          </a>
        </section>
        <section aria-labelledby="footer">
          <b>Recepcja</b>
          <hr />
          <ElementWithIconBefore
            ariaLabel="numer kontaktowy na recepcje"
            boldTitle="e-mail: "
            text="recepcja@hotelsylwia.com.pl"
          ></ElementWithIconBefore>

          <ElementWithIconBefore
            ariaLabel="ulica"
            boldTitle="ul. "
            text="Gliwicka 90"
          ></ElementWithIconBefore>
        </section>
        <section>
          <b>Social Media</b>
          <hr />
          <a
            title="zobacz hotel na facebooku.."
            aria-label="zobacz hotel na facebooku..."
            href="https://www.facebook.com/hotelsylwiarestauracja/"
          >
            <ElementWithIconBefore
              boldTitle="fb: "
              text="Hotel Sylwia Facebook"
              ariaLabel="link do facebooka Hotelowego"
            ></ElementWithIconBefore>
          </a>
          <a
            href="https://www.instagram.com/hotelsylwia_restauracja/"
            title="zobacz hotel na instagramie.."
            aria-label="zobacz hotel na instagramie..."
          >
            <ElementWithIconBefore
              boldTitle="ig: "
              text="Hotel Sylwia Instagram"
              ariaLabel="link do instagrama Hotelowego"
            ></ElementWithIconBefore>
          </a>
          <a
            href="https://www.instagram.com/hotelsylwia_restauracja/"
            title="zobacz hotel na instagramie.."
            aria-label="zobacz hotel na instagramie..."
          >
            <ElementWithIconBefore
              boldTitle="ig: "
              text="Hotel Sylwia wedding Instagram"
              ariaLabel="link do instagrama Hotelowego"
            ></ElementWithIconBefore>
          </a>
        </section>
        <section>
          <b>Wynajemn Bus-a</b>
          <hr />
          <ElementWithIconBefore
            boldTitle="tel: "
            text=""
            ariaLabel="number telefonu aby wynająć busa"
          ></ElementWithIconBefore>
        </section>
        <section>
          <b>Wydarzenia & imprezy</b>
          <hr />
          <ElementWithIconBefore
            boldTitle="tel: "
            text=""
            ariaLabel="number telefonu aby dowiedzieć się o imprezach i wydarzeniach"
          ></ElementWithIconBefore>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
