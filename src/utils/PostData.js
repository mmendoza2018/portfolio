import { collection, addDoc } from "firebase/firestore/lite";

// Add a new document in collection "cities"
const addData = async (db) => {
  const docRef = await addDoc(collection(db, "calificaciones"), {
    calificacion: 5,
    comentario: "este es un comentario generado automaticamente",
    nombres: "Pepito de las rocas"
  });
}
export default addData;