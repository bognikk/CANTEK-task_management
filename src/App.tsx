import { useState } from 'react';
import Task from './components/assets/Task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import categories from './components/assets/categories';

import './App.css'

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  // Function to add a new task
  const handleAddTask = (taskData: Omit<Task, 'id'>) => {
    const dueDate = new Date(taskData.dueDate);
    dueDate.setHours(24); // Adjust dueDate to start of day in local time zone

    const newTask: Task = {
      id: new Date().getTime(), // Unique timestamp-based ID
      ...taskData,
      dueDate, // Set dueDate separately
    };

    setTasks([...tasks, newTask]);
  };

  // Function to delete a task by ID
  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to filter tasks by category
  const handleCategoryFilter = (selectedCategory: string) => {
    // If the selected category is empty (All Categories), display all tasks
    if (selectedCategory === '') {
      setFilteredTasks(tasks);
    } else {
      // Filter tasks by the selected category
      const filteredTasks = tasks.filter((task) => task.category === selectedCategory);
      setFilteredTasks(filteredTasks);
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskFilter onSelectCategory={handleCategoryFilter} categories={categories} />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App