import { FaEdit, FaTrash } from "react-icons/fa";

const Post = ({ textt, onEdit, onDelete }) => {
  return (
    <div className="w-[500px] mt-9 rounded-3xl min-h-[100px] bg-amber-200 p-4">
      <div className="flex justify-end gap-4 mb-3">
        <button
          type="button"
          onClick={onEdit}
          aria-label="Edit task"
          className="cursor-pointer"
        >
          <FaEdit className="text-xl hover:scale-110 hover:text-green-500 duration-300" />
        </button>

        <button
          type="button"
          onClick={onDelete}
          aria-label="Delete task"
          className="cursor-pointer"
        >
          <FaTrash className="text-xl hover:scale-110 hover:text-red-500 duration-300" />
        </button>
      </div>

      <h2 className="text-4xl break-words pl-5 py-5 font-display font-medium">
        {textt}
      </h2>
    </div>
  );
};

export default Post;
