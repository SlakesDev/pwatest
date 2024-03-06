import { cookieBasedClient } from "@/app/utils/amplify-utils";
import Details from "../../component/Details";

export default async function Home({ params }) {
  let { data: todo } = await cookieBasedClient.models.Todo.get(
    {
      id: params.id,
    },
    {
      authMode: "apiKey",
      selectionSet: ["content"],
    }
  );

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <Details content={todo.content} />
    </div>
  );
}
