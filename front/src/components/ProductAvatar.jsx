import React from "react";

export default function ProductAvatar({ image }) {
  return (
    <div className="product-avatar">
      <img src={image} />
    </div>
  );
}
