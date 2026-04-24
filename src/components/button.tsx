export type button_props = {
  _text: string;
  _label: string;
  _parent_id: string;
  _void: () => void;
};
export const Button = ({ _text, _label, _parent_id, _void }: button_props) => {
  return (
    <button
      onClick={_void}
      className=""
      title={_label}
      aria-label={_label}
      aria-labelledby={_parent_id}
    >
      <span>{_text}</span>
    </button>
  );
};
