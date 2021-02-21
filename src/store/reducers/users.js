import { CREATE_USER, DELETE_USER, FETCH_USERS, UPDATE_USER } from "constants/actionsTypes";
const reducer = (state = [], actions) => {
  switch (actions.type) {
    case FETCH_USERS:
      return actions.payload;
    case CREATE_USER:
      return [...state, actions.payload];
    case UPDATE_USER:
      return state.map((user) => (user._id === actions.payload._id ? actions.payload : user));
    case DELETE_USER:
      console.log(actions.payload);
      return state.filter((user) => user._id !== actions.payload);
    default:
      return state;
  }
};

export default reducer;
