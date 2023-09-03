import { useState } from 'react';
import Task from './components/assets/Task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import categories from './components/assets/categories';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  // Function to add a new task
  const handleAddTask = (taskData: Omit<Task, 'id'>) => {
    const dueDate = new Date(taskData.dueDate);
    dueDate.setHours(24);

    const newTask: Task = {
      id: new Date().getTime(),
      ...taskData,
      dueDate,
    };

    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]);
  };

  // Function to delete a task by ID
  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  // Function to filter tasks by category
  const handleCategoryFilter = (selectedCategory: string) => {
    if (selectedCategory === '') {
      setFilteredTasks(tasks);
    } else {
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