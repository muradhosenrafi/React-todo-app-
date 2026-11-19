import { useEffect, useState } from "react";
import { FaRegImages } from "react-icons/fa6";
import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import toast, { Toaster } from "react-hot-toast";
import Post from "./Layouts/Post";
import Popup from "./Components/Popup";

const App = () => {
  const db = getDatabase();
  const [caption, setCaption] = useState([]);
  const [input, setInput] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleSend = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      toast.error("Please enter a task before submitting.");
      return;
    }

    try {
      await set(push(ref(db, "users")), { caption: trimmedInput });
      toast.success("Post added successfully");
      setInput("");
    } catch (error) {
      console.error("Unable to add post:", error);
      toast.error("Could not save the post. Please try again.");
    }
  };

  useEffect(() => {
    const usersRef = ref(db, "users");
    const unsubscribe = onValue(
      usersRef,
      (snapshot) => {
        const posts = [];
        snapshot.forEach((item) => {
          posts.push({ ...item.val(), id: item.key });
        });
        setCaption(posts);
      },
      (error) => {
        console.error("Unable to load posts:", error);
        toast.error("Could not load posts. Please refresh the page.");
      }
    );

    return unsubscribe;
  }, [db]);

  const handleDelete = async (item) => {
    try {
      await remove(ref(db, `users/${item.id}`));
      toast.success("Post deleted");
    } catch (error) {
      console.error("Unable to delete post:", error);
      toast.error("Could not delete the post. Please try again.");
    }
  };

  const openEditPopup = (item) => {
    setEditingItem(item);
    setEditingText(item.caption ?? "");
  };

  const closeEditPopup = () => {
    setEditingItem(null);
    setEditingText("");
  };

  const handleUpdate = async () => {
    const trimmedText = editingText.trim();

    if (!trimmedText) {
      toast.error("Task cannot be empty.");
      return;
    }

    if (!editingItem?.id) return;

    try {
      await update(ref(db, `users/${editingItem.id}`), {
        caption: trimmedText,
      });
      toast.success("Post updated successfully");
      closeEditPopup();
    } catch (error) {
      console.error("Unable to update post:", error);
      toast.error("Could not update the post. Please try again.");
    }
  };

  return (
    <div className="pt-[200px] flex flex-col items-center justify-center">
      <h1 className="text-8xl font-display font-bold mb-10">
        TODO <span className="text-8xl text-orange-600 font-display font-bold mb-10">APP</span>
      </h1>

      <div className="w-[500px] h-[500px] flex-col bg-amber-700 rounded-2xl">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleSend();
          }}
          className="w-[400px] mb-5 h-[50px] border font-normal font-display border-2 border-amber-100 rounded-2xl pl-4 text-2xl ml-[50px] outline-none mt-10 placeholder:text-2xl placeholder:font-display"
          type="text"
          placeholder="Caption"
          aria-label="New task"
        />

        <div className="flex gap-10">
          <div className="justify-center items-center flex w-[150px] h-[50px] mb-5 font-semibold cursor-pointer ml-[50px] font-display text-2xl rounded-2xl border border-2 border-amber-50">
            <FaRegImages className="text-amber-50" />
          </div>
          <div className="justify-center items-center flex w-[150px] h-[50px] mb-5 font-semibold cursor-pointer ml-[50px] font-display text-2xl rounded-2xl border border-2 border-amber-50">
            <FaRegImages className="text-amber-50" />
          </div>
        </div>

        <div>
          <button
            onClick={handleSend}
            className="w-[400px] h-[50px] font-semibold cursor-pointer ml-[50px] font-display text-2xl rounded-2xl bg-amber-50"
          >
            Send
          </button>
        </div>
      </div>

      {caption.map((item) => (
        <Post
          key={item.id}
          textt={item.caption}
          onEdit={() => openEditPopup(item)}
          onDelete={() => handleDelete(item)}
        />
      ))}

      <Popup
        showModal={Boolean(editingItem)}
        value={editingText}
        onChange={setEditingText}
        onClose={closeEditPopup}
        onUpdate={handleUpdate}
      />

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
