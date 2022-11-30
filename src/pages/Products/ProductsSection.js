import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from './BookingModal/BookingModal'

import ProductSectionCard from "./ProductSectionCard";

const ProductsSection = () => {
  const categorywiseProducts = useLoaderData();
const [products , setProducts] = useState('')
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
            setProducts={setProducts}
          ></ProductSectionCard>
        ))}
      </div>
      {products && (
        <BookingModal
          products={products}
          setProducts={setProducts}
        ></BookingModal>
      )}
    </div>
  );
};

export default ProductsSection;
