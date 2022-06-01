import { collection, addDoc } from "firebase/firestore/lite";

// Add a new document in collection "cities"
const addData = async (db) => {
  try {
    const docRef = await addDoc(collection(db, "calificaciones"), {
      calificacion: 2,
      comentario: "este es un comentario generado automaticamentes",
      nombres: "Pepito de las rocas 5"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export default addData;