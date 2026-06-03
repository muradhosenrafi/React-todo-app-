import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Popup from "../Components/Popup";

const Post = ({ textt, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-[500px] mt-9 rounded-3xl min-h-[100px] bg-amber-200 p-4">
        
        {/* Icons */}
        <div className="flex justify-end gap-4 mb-3">
          
          <FaEdit
            onClick={() => setShowModal(true)}
            className="text-xl cursor-pointer hover:scale-110 hover:text-green-500 duration-300"
          />

          <FaTrash
            onClick={onDelete}
            className="text-xl cursor-pointer hover:scale-110 hover:text-red-500 duration-300"
          />

        </div>

        {/* Text */}
        <h1 className="text-4xl break-words pl-5 py-5 font-display font-medium">
          {textt}
        </h1>
      </div>

      <Popup showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Post;