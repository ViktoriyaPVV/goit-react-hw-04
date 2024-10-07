import React, { useEffect, useState } from "react";
import { fetchImage } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (!query) {
        return;
      }
      try {
        setIsError(false);
        setIsLoader(true);
        const data = await fetchImage(page, query);
        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSearch = (topik) => {
    setImages([]);
    setQuery(topik);
    setPage(1);
    // setTotalPages(0);
  };
  const openModal = (image) => {
    if (!isModalOpen) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoader && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn handleChangePage={handleChangePage} />}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
