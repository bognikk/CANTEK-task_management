import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import categories from './assets/categories';

import './TaskForm.scss';

const schema = z.object({
  title: z.string().min(3).max(50),
  dueDate: z.date(),
  category: z.enum(categories),
});

type TaskFormData = z.infer<typeof schema>;

interface TaskFormProps {
  onSubmit: SubmitHandler<TaskFormData>;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TaskFormData>();

  const handleFormSubmit: SubmitHandler<TaskFormData> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" {...register('title', { required: true })} />
        {errors.title && <p>Title is required</p>}
      </div>

      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input type="date" id="dueDate" {...register('dueDate', { required: true })} />
        {errors.dueDate && <p>Due Date is required</p>}
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select id="category" {...register('category', { required: true })}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p>Category is required</p>}
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
