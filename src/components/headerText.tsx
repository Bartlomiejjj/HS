type props = {
  text: string;
  subtext: string;
};
const HeaderText = ({ text, subtext }: props) => {
  return (
    <header className="text" style={{ zIndex: "-1" }}>
      <h1 className="headerText">{text}</h1>
      <h2 className="headerSubText">{subtext}</h2>
    </header>
  );
};

export default HeaderText;
