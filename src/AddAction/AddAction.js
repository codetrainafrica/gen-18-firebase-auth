export const ADD_USERS = "ADD_USERS";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";

export const AddAction = (user) => {
  return (dispact, state, { getFirestore }) => {
    getFirestore()
      .collection("contact")
      .add(user)
      .then((docs) => {
        console.log(docs);
      });
  };
};
export const deleteUser = (user_id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contact")
      .doc(user_id)
      .delete()
      .then(() => {});
  };
};
export const editUser = (updatedcontct) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contact")
      .doc(updatedcontct.id)
      .set(updatedcontct)
      .then(() => {});
  };
};
export const getALLcontact = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contact")
      .onSnapshot((snapshot) => {
        let contact = [];
        snapshot.forEach((doc) => {
          contact.push({ ...doc.data(), id: doc.id });
        });
        dispatch({
          type: "SET_ALL_CONTACT",
          payload: contact,
        });
      });
  };
};
