import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductSectionCard from "./ProductSectionCard";

const ProductsSection = () => {
  const categorywiseProducts = useLoaderData();

  return (
    <div>
      <h2 className="text-5xl my-10 text-orange-300 font-semibold text-center">
        Available {categorywiseProducts[0].categoryName} Laptops
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
      {categorywiseProducts.map((categorywiseProduct) => (
        <ProductSectionCard
          key={categorywiseProduct._id}
          categorywiseProduct={categorywiseProduct}
        ></ProductSectionCard>
      ))}
      </div>
    </div>
  );
};

export default ProductsSection;
