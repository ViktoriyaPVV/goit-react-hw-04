import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <div>
      <ul className={s.galleryList}>
        {images.map((item) => (
          <li
            key={item.id}
            onClick={() => openModal(item)}
            id={item.id}
            className={s.galleryItem}
          >
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
