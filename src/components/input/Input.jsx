import "./input.css";

const Input = ({ lbl, input, setInput, setRes }) => {
  const inputTxt = (e) => {
    setInput(e.target.value);
    setRes("");
  };

  return (
    <div>
      <label className="lbl-cont" htmlFor="input-field">{lbl}</label>
        <input
          type="text"
          name="input-field"
          className="input-field"
          value={input}
          onChange={inputTxt}
        />
    </div>
  );
};

export default Input;
