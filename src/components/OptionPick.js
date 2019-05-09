import React, { useContext } from "react";
import OptionsContext from "../context/options-context";
import swal from "sweetalert";

const OptionPick = () => {
  const { options } = useContext(OptionsContext);

  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    swal({
      title: option.text,
      text: `I'd go with ${
        option.text
      }. Since its quite reasonable on a long term basis.`,
      icon: "success"
    });
    //swal("Selected option...", option.text, "info");
    // swal(option.text);
  };

  return (
    <button disabled={!options.length} onClick={handlePick}>
      Select best choice
    </button>
  );
};

export { OptionPick as default };
