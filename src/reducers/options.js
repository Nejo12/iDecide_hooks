const optionsReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_OPTIONS":
      return action.options;
    case "ADD_OPTION":
      return [...state, { text: action.text }];
    case "REMOVE_OPTION":
      return state.filter(option => option.text !== action.text);
    case "REMOVE_OPTIONS":
      return [];
    default:
      return state;
  }
};

export { optionsReducer as default };
