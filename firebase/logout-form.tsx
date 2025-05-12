import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";

const LogoutButton: React.FC = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full py-3 outline-2  outline-blue-800  outline-offset-[0px] active:outline-offset-[5px] transition-all px-6 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700  focus:ring-2 duration-300"
    >
      Вийти
    </button>
  );
};

export default LogoutButton;
