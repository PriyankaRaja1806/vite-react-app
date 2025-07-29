import React from "react";
import "./Modal.css";

export default function Modal({
  isOpen,
  onClose,
  onSave,
  card,
  labels,
  setLabels,
  comments,
  setComments,
  newComment,
  setNewComment,
  addComment,
  attachments,
  addAttachment,
  checklist,
  newChecklistItem,
  setNewChecklistItem,
  addChecklistItem,
  toggleChecklistItem,
  children,
}) {
  if (!isOpen) return null;

  return (
    <>
    
   <div className="modal-overlay" onClick={onClose} />
    <div
      className="modal-container"
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
    >
        <div className="modal-section">
          <label>🏷️ Labels:</label>
          <input
            type="text"
            value={labels}
            onChange={(e) => setLabels(e.target.value)}
          />
        </div>

        <div className="modal-section">
          <label>💬 Comments:</label>
          <ul>
            {comments.map((comment, i) => (
              <li key={i}>• {comment}</li>
            ))}
          </ul>
          <div className="input-row">
            <input
              type="text"
              value={newComment}
              placeholder="Add a comment..."
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={addComment}>Add</button>
          </div>
        </div>

        <div className="modal-section">
          <label>📎 Attachments:</label>
          <ul>
            {attachments.map((file, i) => (
              <li key={i}>• {file}</li>
            ))}
          </ul>
          <input type="file" multiple onChange={addAttachment} />
        </div>

        <div className="modal-section">
          <label>☑️ Checklist:</label>
          <ul>
            {checklist.map((item, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleChecklistItem(i)}
                />
                <span className={item.done ? "strike" : ""}>{item.text}</span>
              </li>
            ))}
          </ul>
          <div className="input-row">
            <input
              type="text"
              value={newChecklistItem}
              placeholder="Add checklist item..."
              onChange={(e) => setNewChecklistItem(e.target.value)}
            />
            <button onClick={addChecklistItem}>Add</button>
          </div>
        </div>

        {children}

        <div
          className="modal-footer"
          style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}
        >
          <button
            onClick={onSave}
            style={{
              padding: "8px 16px",
              backgroundColor: "#2196f3",
              border: "none",
              borderRadius: "4px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Save
          </button>
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ccc",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
