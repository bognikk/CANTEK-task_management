import React, { ChangeEvent } from 'react';

import './TaskFilter.scss';

interface TaskFilterProps {
  onSelectCategory: (category: string) => void;
  categories: readonly [string, string, string];
}

const TaskFilter: React.FC<TaskFilterProps> = ({ onSelectCategory, categories }) => {
  const categoriesArray = [...categories];

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
  };

  return (
    <div className="task-filter">
      <label htmlFor="categoryFilter">Filter by Category:</label>
      <select id="categoryFilter" onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categoriesArray.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskFilter;
