const incrementReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      if (state <= 0) {
        return state;
      } else {
        return state - action.value;
      }
    default:
      return state;
  }
};

export default incrementReducer;
