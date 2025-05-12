import { db } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getCollectionData(collectionName: string) {
    try {
        const data = collection(db, collectionName);
        const docs = await getDocs(data);
        console.log(docs.docs.map(doc => doc.data()));
        return docs.docs.map(doc => doc.data());
    } catch (error) {
        console.error(error, "error in getCollectionDataFunction");
    }
} 
