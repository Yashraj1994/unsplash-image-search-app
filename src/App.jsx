import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Api from "./Api";
import ImageList from "./components/ImageList";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // For lightbox

  const handleEnter = async (newTerm) => {
    setTerm(newTerm);
    setPage(1);
    const result = await Api(newTerm, 1);
    setImages(result);
  };

  const handlePageChange = async (direction) => {
    const newPage = direction === "next" ? page + 1 : page - 1;
    if (newPage < 1) return;
    setPage(newPage);
    const result = await Api(term, newPage);
    setImages(result);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <div className="toggle-container">
        <button onClick={toggleDarkMode} className="dark-toggle-btn">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
      <h1 className="app-title">Unsplash Image Search 🔍</h1>
      <SearchBar onSubmit={handleEnter} />
      <ImageList images={images} onImageClick={setSelectedImage} />

      {/* Pagination */}
      {images.length > 0 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={page === 1}
          >
            ⬅️ Previous
          </button>
          <span>Page {page}</span>
          <button onClick={() => handlePageChange("next")}>Next ➡️</button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Preview" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default App;
