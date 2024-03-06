function UpdateButton({ onUpdate, content, id }) {
  return (
    <button
      onClick={() => onUpdate(content, id)}
      type="submit"
      className="text-white  rounded pl-4 pr-4 p-2 bg-const"
    >
      Update Todo
    </button>
  );
}

export default UpdateButton;
