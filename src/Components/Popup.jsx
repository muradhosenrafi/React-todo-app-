const Popup = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="w-[400px] bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Update Post
        </h2>

        <input
          type="text"
          placeholder="Enter updated text..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none mb-4"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Cancel
          </button>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;