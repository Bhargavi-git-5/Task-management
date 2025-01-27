import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="task">My Tasks</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
