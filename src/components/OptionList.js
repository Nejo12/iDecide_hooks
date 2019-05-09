import React, { useContext } from "react";
import RemoveOption from "./RemoveOption";
import OptionsContext from "../context/options-context";

const OptionList = () => {
  const { options } = useContext(OptionsContext);

  return (
    <div>
      {options.map((option, index) => (
        <RemoveOption key={option.text} option={option} />
      ))}
    </div>
  );
};

export { OptionList as default };
