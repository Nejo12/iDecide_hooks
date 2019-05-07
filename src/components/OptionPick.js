import React, { useContext } from "react";
import OptionsContext from "../context/options-context";

const OptionPick = () => {
  const { options } = useContext(OptionsContext);

  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    alert(option.text);
  };

  return <button onClick={handlePick}>Select best choice</button>;
};

export { OptionPick as default };
