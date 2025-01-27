import React, { useState } from "react";
import { createTask } from "../services/TaskService";


const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTask({ title, category, dueDate });
    setTitle("");
    setCategory("");
    setDueDate("");
    window.location.reload(); 
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="form-input"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
