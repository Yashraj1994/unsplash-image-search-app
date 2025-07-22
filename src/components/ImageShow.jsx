import React from "react";
import { motion } from "framer-motion";

const ImageShow = ({ image }) => {
  return (
    <motion.div
      className="image-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* {image.alt_description} */}
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className="image"
      />
    </motion.div>
  );
};

export default ImageShow;
