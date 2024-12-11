import React from "react";
import "./TaskItem.scss";

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React<TaskItemProps> = ({
  id,
  title,
  completed,
  toggleTask,
  deleteTask,
}) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      <span className={completed ? "completed" : ""}>{title}</span>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
