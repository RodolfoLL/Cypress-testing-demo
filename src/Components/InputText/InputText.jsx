import { useState } from "react";
import "./InputText.css";

export const InputText = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    onNewCategory(newInputValue);
    setInputValue("");
  };
  const onInputValue = ({ target }) => {
    setInputValue(target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="input">
      <label htmlFor="Buscar" className="myLabel">
        Buscar
      </label>
      <input
        type="text"
        name="text"
        value={inputValue}
        className="myInput"
        onChange={onInputValue}
      />
    </form>
  );
};
