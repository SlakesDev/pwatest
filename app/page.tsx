import CreateTodo from "./component/CreateTodo";
import AuthClient from "./component/auth/AuthClient";

export default function Home() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <AuthClient />
    </div>
  );
}
