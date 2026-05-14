import BreakTitle from "./break_title";
export const Contact = () => {
  return (
    <section aria-label="informacje o kontakcie" className="about" id="contact">
      <BreakTitle title="Kontakt:"></BreakTitle>
      <p
        style={{
          wordSpacing: "0.1em",
          fontSize: "150%",
          display: "block",
          textAlign: "center",
        }}
      >
        <blockquote style={{}}>
          <b>Recepcja: </b>
          <br />
          <i>tel:</i> 32 234 83 16
          <br />
          recepcja@hotelsylwia.com.pl
        </blockquote>
        <br />
        <blockquote style={{}}>
          <b>Wydarzenia: </b>
          <br />
          <i>tel:</i> 32 234 83 16
          <br />
          recepcja@hotelsylwia.com.pl
        </blockquote>
        <hr />
        <a
          style={{ cursor: "pointer" }}
          aria-label="przejdź do wiekszej ilosci informacji o kontakcie z hotelem"
          title="przejdź do wiekszej ilosci informacji o kontakcie z hotelem"
          onClick={() => {
            document.getElementById("footer")?.scrollIntoView();
          }}
        >
          więcej informacji...
        </a>
      </p>
    </section>
  );
};
