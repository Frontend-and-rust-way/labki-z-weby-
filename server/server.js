import express from "express";
import cors from "cors";
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import { db } from "./firebase.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// 📥 Отримання замовлень користувача
app.get("/my-account", async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const userOrdersRef = collection(db, "users", userId, "orders");
    const q = query(userOrdersRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    const orders = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(orders);
  } catch (err) {
    console.error("Помилка при отриманні замовлень:", err);
    res.status(500).json({ error: "Помилка сервера" });
  }
});


app.post("/orders", async (req, res) => {
  try {
    const { userId, books } = req.body;

    if (!userId || !Array.isArray(books)) {
      return res.status(400).json({ error: "Необхідно передати userId та масив товарів (books)" });
    }

    if (books.length === 0) {
      return res.status(400).json({ error: "Список товарів не може бути порожнім" });
    }

    const newOrder = {
      books,
      createdAt: serverTimestamp(),
      status: "processing"
    };

    const userOrdersRef = collection(db, "users", userId, "orders");
    await addDoc(userOrdersRef, newOrder);

    res.status(201).json({ message: "Замовлення успішно створено" });
  } catch (err) {
    console.error("Помилка при створенні замовлення:", err);
    res.status(500).json({ error: "Помилка сервера" });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер працює на порту ${PORT}`);
});
