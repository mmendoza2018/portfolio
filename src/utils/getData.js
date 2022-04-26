import { collection, getDocs } from "firebase/firestore/lite";

async function getCalificaciones(db) {
  const calificaciones = collection(db, "calificaciones");
  const calificacionesSnapshot = await getDocs(calificaciones);
  const calificacionesList = calificacionesSnapshot.docs.map((doc) => doc.data());
  return calificacionesList;
}
export default getCalificaciones;
