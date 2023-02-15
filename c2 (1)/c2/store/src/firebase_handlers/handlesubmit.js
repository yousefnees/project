import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
// import { db } from "../../firebase";

export const addProduct = async (e, data) => {
  e.preventDefault();

  try {
    const docRef = await addDoc(collection(db, "products"), {
      name: data.name,
      imgUrl: data.imgUrl,
      category: data.category,
      price: data.price,
      inventory: data.inventory,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
