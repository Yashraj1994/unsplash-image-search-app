import React from "react";

const ImageList = ({ images, onImageClick }) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <div
          className="image-card"
          key={image.id}
          onClick={() => onImageClick(image.urls.regular)}
        >
          <img
            className="image"
            src={image.urls.small}
            alt={image.alt_description}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
