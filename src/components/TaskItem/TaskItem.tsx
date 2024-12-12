import React, { useState } from "react";
import "./TaskItem.scss";

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newTitle: string) => void;
}

const TaskItem: React<TaskItemProps> = ({
  id,
  title,
  completed,
  toggleTask,
  deleteTask,
  editTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTitle.trim() === "") return;
    editTask(id, newTitle.trim());
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleTask(id)}
          />
          <span className={completed ? "completed" : ""}>{title}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
