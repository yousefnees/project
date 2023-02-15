import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

export const updateDocRef = async (docId, data) => {
  const docRef = doc(db, "products", docId);

  try {
    updateDoc(docRef, data).then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    });
    return true;
  } catch (error) {
    console.error("Error updating document: ", error);
    return false;
  }
};
