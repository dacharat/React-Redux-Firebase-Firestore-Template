const initState = { authError: null };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("login success");
      return { ...state, authError: null };
    case "LOGIN_ERROR":
      return { ...state, authError: "Login Failed" };
    case "SIGNOUT_SUCCESS":
      console.log("Logout success");
      return state;
    case "SIGNUP_SUCCES":
      return { ...state, authError: null };
    case "SIGNUP_ERROR":
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};

export default authReducer;
