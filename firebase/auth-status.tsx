"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/app/firebase";

const AuthStatus: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex w-full items-center justify-center p-4 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-md">
      <div className="text-blue-900 text-lg font-semibold">
        {user ? ( 
          <p>
            Ви увійшли під імейлом {" "}
            <span className="text-blue-600 font-bold">{user.email}</span>
          </p>
        ) : (
          <p>Корстувач не увійшов в акаунт або не зареєструвався</p>  
        )}
      </div>
    </div>
  );
};

export default AuthStatus;