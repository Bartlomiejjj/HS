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
    <footer id="kontakt" className="">
      {/* <hr /> */}
      <section className="" aria-labelledby="footer">
        <section aria-label="Logo Hotelu Sylwia">
          <img src={logo} alt="Logo Hotelu Sylwia" />
        </section>
        <section aria-labelledby="footer">
          <b>Lokalizacja</b>
          <hr />
          <ElementWithIconBefore
            ariaLabel="numer kontaktowy na recepcje"
            boldTitle=""
            text="44-153, Sośnicowice k.Gliwic"
          ></ElementWithIconBefore>

          <ElementWithIconBefore
            ariaLabel="ulica"
            boldTitle="ul. "
            text="Gliwicka 90"
          ></ElementWithIconBefore>
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
          <a href="">
            <ElementWithIconBefore
              boldTitle="fb: "
              text="Hotel Sylwia link"
              ariaLabel="link do facebooka Hotelowego"
            ></ElementWithIconBefore>
          </a>
          <a href="">
            <ElementWithIconBefore
              boldTitle="ig: "
              text="Hotel Sylwia link"
              ariaLabel="link do instagrama Hotelowego"
            ></ElementWithIconBefore>
          </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
