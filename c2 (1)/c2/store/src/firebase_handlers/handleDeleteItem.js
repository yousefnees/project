import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const handleDelete = (data) => {
  console.log(data);
  const docRef = doc(db, "products", data.id);

  deleteDoc(docRef)
    .then(() => {
      console.log("Entire Document has been deleted successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
};
