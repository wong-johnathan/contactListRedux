import { CREATE_USER, DELETE_USER, FETCH_USERS, OPEN_MODAL, UPDATE_USER } from "constants/actionsTypes";
import firebase from "config/firebase";
import { ERROR, SUCCESS } from "constants/modals";

export const fetchUsers = (_id) => async (dispatch) => {
  try {
    const usersRef = await firebase.collection("users").get();
    const users = usersRef.docs.map((doc) => ({ _id: doc.id, ...doc.data() }));
    dispatch({ type: FETCH_USERS, payload: users });
  } catch (e) {
    console.log(`ERROR in FETCH USER: ${e.response.data.message}`);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const newUser = await firebase.collection("users").add(user);
    dispatch({ type: CREATE_USER, payload: { _id: newUser.id, ...user } });
    dispatch({ type: OPEN_MODAL, payload: { type: SUCCESS, children: "New contact has been successfully added" } });
    return { status: true };
  } catch (e) {
    console.log(`ERROR in ADD USER: ${e.message}`);
    dispatch({ type: OPEN_MODAL, payload: { type: ERROR, children: e.message } });
  }
};

export const deleteUser = (_id) => async (dispatch) => {
  try {
    await firebase.collection("users").doc(_id).delete();
    dispatch({ type: DELETE_USER, payload: _id });
    dispatch({ type: OPEN_MODAL, payload: { type: SUCCESS, children: "Contact has been successfully deleted" } });
    return { status: true };
  } catch (e) {
    console.log(`ERROR in DELETE USER: ${e.response.data.message}`);
    dispatch({ type: OPEN_MODAL, payload: { type: ERROR, children: e.message } });
  }
};

export const updateUser = (user) => async (dispatch) => {
  const { _id, ...update } = user;
  try {
    await firebase.collection("users").doc(_id).set(update);
    dispatch({ type: UPDATE_USER, payload: user });
    dispatch({ type: OPEN_MODAL, payload: { type: SUCCESS, children: "Contact has been successfully updated" } });
    return { status: true };
  } catch (e) {
    console.log(`ERROR in DELETE USER: ${e.response.data.message}`);
    dispatch({ type: OPEN_MODAL, payload: { type: ERROR, children: e.message } });
  }
};
