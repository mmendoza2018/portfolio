import { collection, addDoc } from "firebase/firestore/lite";

// Add a new document in collection "cities"
const addData = async (db, objData) => {
  try {
    const docRef = await addDoc(collection(db, "calificaciones"), objData);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}
export default addData;