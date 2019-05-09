import React, { useContext } from "react";
import OptionsContext from "../context/options-context";

const RemoveOptions = () => {
  const { dispatch } = useContext(OptionsContext);

  return (
    <>
      <button onClick={() => dispatch({ type: "REMOVE_OPTIONS" })}>
        Remove All
      </button>
    </>
  );
};

export { RemoveOptions as default };