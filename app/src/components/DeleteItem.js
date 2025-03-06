import React from "react";

const DeleteItem = ({ id, deleteItem }) => {
  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (isConfirmed) {
      deleteItem(id);
    }
  };

  return (
    <button className="delete-button" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteItem;