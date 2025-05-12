import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { booksEn } from "@/mock/mock-books-en";


const addCollection = async (data:string,arrayData:object[]) => {
  try {

    for (let i = 0; i < arrayData.length; i++) {
      await addDoc(collection(db, data), booksEn[i]); 
      console.log(`Книга "${booksEn[i].title}" успішно додана`);
    }
  } catch (e) {
    console.error("Помилка при додаванні: ", e);
  }
};


export default addCollection;