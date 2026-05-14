type props = {
  title: string;
};
export default function BreakTitle({ title }: props) {
  return (
    <section
      className="panel-title element " //panel
      // style={{ position: "sticky", top: 0 }}
    >
      {/* <hr /> */}
      <h1 style={{ fontWeight: "normal" }}>{title}</h1>
      <hr />
    </section>
  );
}
