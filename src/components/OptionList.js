import React, { useContext } from "react";
import RemoveOption from "./RemoveOption";
import OptionsContext from "../context/options-context";
import shortid from "shortid";

const OptionList = () => {
  const { options } = useContext(OptionsContext);

  return (
    <>
      {options.map(option => (
        <RemoveOption key={shortid.generate()} option={option} />
      ))}
    </>
  );
};

export { OptionList as default };
