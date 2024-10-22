import React from 'react';
import Menscard from './Menscard';

const ProductCarousel = ({ title, products }) => {
  return (
    <div className="bg-white p-12">
      {/* Title Section */}
      <p className="text-[25px] font-medium mb-4">{title}</p>

      {/* Product Display */}
      <div className="flex gap-10 overflow-hidden overflow-x-auto scrollbar-hide">
        {products && products.length > 0 ? (
          products.map((item) => (
            <Menscard
              key={item.id}
              id={item.id}
              brand={item.brand}
              name={item.name}
              description={item.Description}
              price={item.price}
              salePrice={item.salePrice}
              discount={item.discount}
              image={item.image}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;
