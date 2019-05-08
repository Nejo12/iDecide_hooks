import React, { useState, useContext } from "react";
import OptionsContext from "../context/options-context";

const AddOptionForm = () => {
  const { dispatch, options } = useContext(OptionsContext);
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
      {options.length < 1 && <p>Write in your option to get started!</p>}
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
