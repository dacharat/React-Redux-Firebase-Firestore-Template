export const exampleAcrion = example => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: "EXAMPLE_CASE", example });
  };
};
