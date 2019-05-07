import React, { useContext } from "react";
import Option from "./Option";
import OptionsContext from "../context/options-context";

const OptionList = () => {
  const { options } = useContext(OptionsContext);

  return options.map(option => <Option key={option.text} option={option} />);
};

export { OptionList as default };
