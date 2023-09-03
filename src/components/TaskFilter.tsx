import React, { ChangeEvent } from 'react';

interface TaskFilterProps {
  onSelectCategory: (category: string) => void;
  categories: string[];
}

const TaskFilter: React.FC<TaskFilterProps> = ({ onSelectCategory, categories }) => {
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
  };

  return (
    <div>
      <label htmlFor="categoryFilter">Filter by Category:</label>
      <select id="categoryFilter" onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskFilter;
