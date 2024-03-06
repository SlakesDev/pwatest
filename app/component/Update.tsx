"use client";

import { useState } from "react";

import UpdateButton from "../component/UpdateButton";

export default function Update({
  id,
  updateTodo,
}: {
  updateTodo: any;
  id: string;
}) {
  const [input, setInput] = useState<any>();

  return (
    <div className="fullShadow rounded-xl p-[25px] bg-white rouded-xl  flex flex-col items-center ">
      <p className=" text-lg font-extrabold text-text mb-10">Update TODO</p>
      <div className=" flex flex-col gap-1 mb-5">
        <p className=" text-text text-sm">New Todo Name</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo Name"
          className=" p-2 bg-const max500:w-[300px] w-[400px] rounded-xl"
        />
      </div>

      <UpdateButton onUpdate={updateTodo} content={input} id={id} />
    </div>
  );
}
