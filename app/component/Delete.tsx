"use client";

export default function Delete({
  onDeleteTodo,
  id,
}: {
  onDeleteTodo: (id: string) => void;
  id: string;
}) {
  return (
    <p
      onClick={() => onDeleteTodo(id)}
      className=" cursor-pointer text-red-600"
    >
      Delete
    </p>
  );
}
