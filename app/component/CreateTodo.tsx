import { createTodo } from "../_actions/actions";

export default function CreateTodo() {
  return (
    <form
      action={createTodo}
      className="fullShadow rounded-xl p-[25px] bg-white rouded-xl  flex flex-col items-center "
    >
      <p className=" text-lg font-extrabold text-text mb-10">CREATE TODO</p>
      <div className=" flex flex-col gap-1 mb-5">
        <p className=" text-text text-sm">Todo Name</p>
        <input
          type="text"
          name="content"
          id="content"
          placeholder="Todo Name"
          className="max500:w-[250px] p-2 bg-const w-[400px] rounded-xl"
        />
      </div>

      <button
        type="submit"
        className="text-white  rounded pl-4 pr-4 p-2 bg-const"
      >
        Create Todo
      </button>
    </form>
  );
}
