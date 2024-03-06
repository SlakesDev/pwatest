import Link from "next/link";
import React from "react";
import Delete from "./Delete";

export default async function Todos({ onDeleteTodo, todos }) {
  return (
    <div className=" w-full h-screen justify-center items-center flex flex-col gap-2">
      {todos?.map(({ content, id }) => (
        <div
          key={content}
          className="  cursor-pointer fullShadow  w-[400px]  pl-4 pr-4 p-2 bg-white border-2 rounded-2xl font-bold flex justify-between items-center text-text"
        >
          <div className=" flex flex-col gap-1">
            <p className=" capitalize">{content}</p>
            <Link
              href={`/details/${id}`}
              className=" text-sm underline capitalize"
            >
              See Details
            </Link>
          </div>
          <div className=" flex justify-center gap-3">
            <Link href={`/update/${id}`} className=" cursor-pointer text-text">
              Update
            </Link>
            <Delete onDeleteTodo={onDeleteTodo} id={id} />
          </div>
        </div>
      ))}
    </div>
  );
}
