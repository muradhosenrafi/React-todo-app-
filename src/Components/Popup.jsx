const Popup = ({ showModal, value, onChange, onClose, onUpdate }) => {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="w-[400px] max-w-[calc(100vw-2rem)] bg-white rounded-xl p-6 shadow-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-post-title"
      >
        <h2 id="edit-post-title" className="text-2xl font-semibold mb-4">
          Update Post
        </h2>

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") onUpdate();
            if (event.key === "Escape") onClose();
          }}
          placeholder="Enter updated text..."
          aria-label="Updated task"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none mb-4"
          autoFocus
        />

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
