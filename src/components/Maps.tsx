const MapsInfo = () => {
  return (
    <section aria-label="Informacje" className="localization">
      {/* <div aria-label="Informacje" className="container">
        <hr className="item" />
        <h1 className="item">Informacje</h1>
        <hr className="item" />
      </div> */}
      <iframe
        aria-label="lokalizacja hotelu na mapie google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10200.899478734296!2d18.55315057744174!3d50.269059760364065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471139861a58ab9d%3A0x42d22df277c7b999!2sHotel%20Sylwia%20Gliwice!5e0!3m2!1spl!2spl!4v1773184072426!5m2!1spl!2spl"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default MapsInfo;
