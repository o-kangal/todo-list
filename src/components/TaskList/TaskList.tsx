import React from "react";
import TaskItem from "../TaskItem/TaskItem.tsx";
import "./TaskList.scss";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newTitle: string) => void;
}

const TaskList: React<TaskListProps> = ({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
}) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
