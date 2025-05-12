import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
const LogoutButton: React.FC = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <button
      onClick={handleLogout}
      className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      Вийти
    </button>
  );
};

export default LogoutButton;
