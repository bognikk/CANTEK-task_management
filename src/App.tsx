import { useState } from 'react';
import Task from './components/assets/Task';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import categories from './components/assets/categories';

import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <TaskForm onSubmit={function (data: { title: string; dueDate: Date; category: 'Work' | 'Personal' | 'School'; }): void {
        throw new Error('Function not implemented.');
      }} />
      <TaskFilter onSelectCategory={function (category: string): void {
        throw new Error('Function not implemented.');
      }} categories={[]} />
      <TaskList tasks={[]} onDelete={function (taskId: number): void {
        throw new Error('Function not implemented.');
      }} />

    </>
  )
}

export default App
