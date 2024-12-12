import React, { useState } from "react";
import "./TaskForm.scss";

interface TaskFormProps {
  addTask: (title: string) => void;
}

const TaskForm: React<TaskFormProps> = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;
    addTask(taskTitle.trim());
    setTaskTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;