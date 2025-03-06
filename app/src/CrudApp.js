import React, { useState, useEffect } from "react";
import axios from "axios";
import AddItem from "./components/AddItem";
import DeleteItem from "./components/DeleteItem";
import UpdateItem from "./components/UpdateItem";
import "./components/CrudStyles.css";


const API_URL = "https://jsonplaceholder.typicode.com/posts";

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  // Load items from localStorage
  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      axios.get(API_URL)
        .then((response) => {
          const initialItems = response.data.slice(0, 10);
          setItems(initialItems);
          localStorage.setItem("items", JSON.stringify(initialItems));
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, []);

  // Update localStorage whenever items change
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  // Add item
  const addItem = () => {
    if (input.trim() === "") return;

    const newItem = { id: Date.now(), title: input, body: "Sample body", userId: 1 };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
    setInput("");
  };

  // Delete item
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  // Update item
  const updateItem = (id, newText) => {
    const updatedItems = items.map((item) => (item.id === id ? { ...item, title: newText } : item));
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  return (
    <div>
      <h2>CRUD App with Local Storage</h2>
      <AddItem input={input} setInput={setInput} addItem={addItem} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
            <UpdateItem id={item.id} text={item.title} updateItem={updateItem} />
            <DeleteItem id={item.id} deleteItem={deleteItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;