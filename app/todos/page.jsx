import Todos from "../component/Todos";

import { cookieBasedClient } from "../utils/amplify-utils";

import { onDeleteTodo } from "../_actions/actions";

export default async function Home() {
  let { data: todos } = await cookieBasedClient.models.Todo.list({
    selectionSet: ["content", "id"],
    authMode: "apiKey",
  });

  todos = Array.isArray(todos) ? todos : [];

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <Todos todos={todos} onDeleteTodo={onDeleteTodo} />
    </div>
  );
}
