import UpdateTodo from "../../component/Update";

import { updateTodo } from "@/app/_actions/actions";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <UpdateTodo updateTodo={updateTodo} id={params?.id} />
    </div>
  );
}
