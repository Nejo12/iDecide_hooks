import React, { useContext } from "react";
import Option from "./Option";
import OptionsContext from "../context/options-context";

const OptionList = () => {
  const { options } = useContext(OptionsContext);

  return (
    <div>
      {options.map(option => (
        <Option key={option.text} option={option} />
      ))}
    </div>
  );
};

export { OptionList as default };
