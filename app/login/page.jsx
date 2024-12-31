import LoginForm from "./LoginForm";


export default function login() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-blue-100">
      <LoginForm title="Sign in to Evotech!"/>
    </div>
  );
}
