import React from "react";

const AddItem = ({ input, setInput, addItem }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
        style={{
          padding: "12px 16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
          flex: "1",
        }}
      />
      <button
        onClick={addItem}
        style={{
          background: "linear-gradient(135deg, #00ff99 0%, #00ccff 100%)",
          border: "none",
          padding: "12px 20px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "600",
          color: "white",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0, 255, 153, 0.3)",
        }}
        onMouseOver={(e) => (e.target.style.boxShadow = "0 5px 20px rgba(0, 255, 153, 0.6)")}
        onMouseOut={(e) => (e.target.style.boxShadow = "0 4px 10px rgba(0, 255, 153, 0.3)")}
      >
        Add
      </button>
    </div>
  );
};

export default AddItem;
