const initialState = {};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIRST_CASE":
      return state;
    default:
      return state;
  }
};

export default exampleReducer;
