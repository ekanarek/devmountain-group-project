import React from "react";
import axios from "axios";

export default function DeleteButton({ moodId, onDelete }) {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this mood? This cannot be undone."
    );
    if (confirmed) {
      try {
        await axios.delete(`/api/moods/${moodId}`);
        onDelete(moodId);
      } catch (error) {
        console.error("Error deleting mood: ", error);
        alert("Failed to delete mood. Please try again.");
      }
    }
  };

  return (
    <button
      className="deleteButton"
      onClick={handleDelete}
      style={{
        height: "24px",
        width: "24px",
        border: "transparent",
        background: "transparent",
        cursor: "pointer",
      }}
    >
      <img alt="" src="/src/assets/trash.svg"></img>
    </button>
  );
}
