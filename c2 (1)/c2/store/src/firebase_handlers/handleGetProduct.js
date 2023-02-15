import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getProduct = async (e, data) => {
  try {
    return getDocs(collection(db, "products")).then((querySnapshot) => {
      return querySnapshot.docs.find((doc) => doc.id === data.id);
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getAllProductByCategory = async (e, data) => {
  try {
    return getDocs(collection(db, "products")).then((querySnapshot) => {
      return querySnapshot.docs.filter(
        (doc) => doc.data().category === data.category
      );
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getAllProduct = async () => {
  try {
    return getDocs(collection(db, "products")).then((querySnapshot) => {
      return querySnapshot.docs;
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
