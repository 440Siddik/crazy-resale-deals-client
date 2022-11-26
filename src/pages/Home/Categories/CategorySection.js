import React from 'react';
import {useQuery} from "@tanstack/react-query";
import CategoryCard from './CategoryCard';
const CategorySection = () => {

  
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetch("http://localhost:5000/categories")
    .then(res => res.json())
  });
  
  return (
    <div className='my-20'>
      <h3 className="text-blue-400 font-bold text-4xl text-center my-6">
        Categories
      </h3>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;