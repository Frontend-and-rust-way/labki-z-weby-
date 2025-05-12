'use client'
import RegisterForm from "@/firebase/register-form";
import LoginForm from "@/firebase/login-form";
import LogoutButton from "@/firebase/logout-form";



const AuthPage: React.FC = () => {
  return (
    <div>
      <h1>Аутентифікація Firebase</h1>
      <RegisterForm />
      <LoginForm />
      <LogoutButton />
    </div>
  );
};

export default AuthPage;
