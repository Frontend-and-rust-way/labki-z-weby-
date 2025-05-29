"use client"

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";


const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); //! уникнути перезавнатаження форми по суті він хоче щоб форма по суті звалилиа звідти перзавантаження 
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="email" placeholder="пошта" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="пароль" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Зареєструватися</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default RegisterForm;
