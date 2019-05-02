import React, { useState } from "react";

const AddOptionForm = () => {
  const [options, setOptions] = useState([]);
  const [text, setText] = useState("");

  const addOption = e => {
    e.preventDefault();
    setOptions([...options, { text }]);
    setText("");
    console.log("form submission :", text);
  };

  const removeOption = text => {
    setOptions(options.filter(option => option.text !== text));
    console.log("Text removed :", text);
  };

  return (
    <div>
      <h3>Add options</h3>
      {options.map(option => (
        <div key={option.text}>
          <h3>{option.text}</h3>
          <button
            onClick={() => {
              removeOption(option.text);
            }}
          >
            x
          </button>
        </div>
      ))}
      <form onSubmit={addOption}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button>Add option</button>
      </form>
    </div>
  );
};

export { AddOptionForm as default };
