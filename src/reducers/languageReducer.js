export const languageReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LANGUAGE":
      return state === "en" ? "tr" : "en";
    default:
      return state;
  }
};
