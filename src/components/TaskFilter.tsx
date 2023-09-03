// TaskFilter.tsx
import React, { ChangeEvent } from 'react';

interface TaskFilterProps {
  onSelectCategory: (category: string) => void;
  categories: readonly [string, string, string]; // Declare categories as a readonly tuple
}

const TaskFilter: React.FC<TaskFilterProps> = ({ onSelectCategory, categories }) => {
  // Convert readonly tuple to a mutable array using the spread operator
  const categoriesArray = [...categories];

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
  };

  return (
    <div>
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
