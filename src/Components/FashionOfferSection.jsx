import React from "react";
import ProductCard from "./ProductCard";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function OfferSection({ title, products }) {
  return (
    <div className="offer-section mr-4 m-4 p-2">
      <div className="flex justify-between items-center mb-4">
        {/* Responsive title */}
        <h2 
          className="font-bold" 
          style={{ fontSize: "clamp(1.5rem, 2vw, 2rem)" }}
        >
          {title}
        </h2>

        {/* Button with responsive design */}
        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(90deg, rgba(171, 46, 106, 0.8) 0%, rgba(157, 39, 96, 0.8) 44%, rgba(88, 24, 99, 0.8) 77%)",
            color: "white",
            padding: { xs: "8px 20px", sm: "12px 40px" },
            borderRadius: "50px",
            fontSize: { xs: "0.8rem", sm: "1rem" },
          }}
        >
          More
        </Button>
      </div>

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "5px 0",
          gap: "5px", 
          '&::-webkit-scrollbar': { display: 'none' }, 
          scrollBehavior: "smooth", 
        }}
      >
        {products.map((product, index) => (
          <Box
            key={index}
            sx={{
              flex: '0 0 auto',
              scrollSnapAlign: "center", 
              marginRight: { xs: '1px', sm: '5px', md: "10px", lg: "15px" }, 
              width: { xs: "100%", sm: "32%", md: "32%", lg:"32%" }, 
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default OfferSection;
