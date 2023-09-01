import { useState } from 'react';
import './App.css'

interface Task {
  id: number;
  title: string;
  dueDate: Date;
  category: string;
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <div>
        Start
      </div>

    </>
  )
}

export default App
