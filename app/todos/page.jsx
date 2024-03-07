import Todos from "../component/Todos";

import { cookieBasedClient } from "../utils/amplify-utils";

import { onDeleteTodo } from "../_actions/actions";
import Link from "next/link";

export default async function Home() {
  let { data: todos } = await cookieBasedClient.models.Todo.list({
    selectionSet: ["content", "id"],
    authMode: "apiKey",
  });

  todos = Array.isArray(todos) ? todos : [];

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      {todos.length > 0 ? (
        <Todos todos={todos} onDeleteTodo={onDeleteTodo} />
      ) : (
        <div>
          <p className=" text-text text-lg"> You have no todos </p>
          <Link className="text-text text-sm" href={"/create"}>
            Create Todo
          </Link>
        </div>
      )}
    </div>
  );
}
