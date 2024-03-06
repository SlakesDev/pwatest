import UpdateTodo from "../../component/Update";

import { updateTodo } from "@/app/_actions/actions";

export default function Home() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <UpdateTodo updateTodo={updateTodo} />
    </div>
  );
}
