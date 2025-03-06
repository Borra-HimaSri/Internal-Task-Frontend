import React, { useState } from "react";

const UpdateItem = ({ id, text, updateItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleUpdate = () => {
    updateItem(id, newText);
    setIsEditing(false);
  };

  return (
    <span>
      {isEditing ? (
        <>
          <input
            type="text"
            className="edit-input"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            autoFocus
          />
          <button className="save-button" onClick={handleUpdate}>
            Save
          </button>
          <button className="cancel-button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <button className="update-button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
    </span>
  );
};

export default UpdateItem;
