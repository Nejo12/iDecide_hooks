import React, { useState, useContext } from "react";
import OptionsContext from "../context/options-context";

const AddOptionForm = () => {
  const { dispatch } = useContext(OptionsContext);
  // const [options, setOptions] = useState([]);
  const [text, setText] = useState("");

  const addOption = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_OPTION",
      text
    });
    setText("");
  };

  return (
    <>
      <h3>Add option</h3>
      <form onSubmit={addOption}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button>Add option</button>
      </form>
    </>
  );
};
// Note: dont add when empty input

export { AddOptionForm as default };
